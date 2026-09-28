-- CloudflareImages SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("cloudflare-images_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local CloudflareImagesSDK = {}
CloudflareImagesSDK.__index = CloudflareImagesSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

CloudflareImagesSDK._make_feature = _make_feature


function CloudflareImagesSDK.new(options)
  local self = setmetatable({}, CloudflareImagesSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: test


  return self
end


function CloudflareImagesSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function CloudflareImagesSDK:get_utility()
  return Utility.copy(self._utility)
end


function CloudflareImagesSDK:get_root_ctx()
  return self._rootctx
end


function CloudflareImagesSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function CloudflareImagesSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function CloudflareImagesSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function CloudflareImagesSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "CloudflareImagesSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function CloudflareImagesSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function CloudflareImagesSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "CloudflareImagesSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:CloudflareImage():list() / client:CloudflareImage():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:CloudflareImage(data)
  local EntityMod = require("entity.cloudflare_image_entity")
  if data == nil then
    if self._cloudflare_image == nil then
      self._cloudflare_image = EntityMod.new(self, nil)
    end
    return self._cloudflare_image
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Image():list() / client:Image():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:Image(data)
  local EntityMod = require("entity.image_entity")
  if data == nil then
    if self._image == nil then
      self._image = EntityMod.new(self, nil)
    end
    return self._image
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImagesDeleted():list() / client:ImagesDeleted():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:ImagesDeleted(data)
  local EntityMod = require("entity.images_deleted_entity")
  if data == nil then
    if self._images_deleted == nil then
      self._images_deleted = EntityMod.new(self, nil)
    end
    return self._images_deleted
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImagesImageDirectUpload():list() / client:ImagesImageDirectUpload():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:ImagesImageDirectUpload(data)
  local EntityMod = require("entity.images_image_direct_upload_entity")
  if data == nil then
    if self._images_image_direct_upload == nil then
      self._images_image_direct_upload = EntityMod.new(self, nil)
    end
    return self._images_image_direct_upload
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImagesImageKeyResponseCollection():list() / client:ImagesImageKeyResponseCollection():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:ImagesImageKeyResponseCollection(data)
  local EntityMod = require("entity.images_image_key_response_collection_entity")
  if data == nil then
    if self._images_image_key_response_collection == nil then
      self._images_image_key_response_collection = EntityMod.new(self, nil)
    end
    return self._images_image_key_response_collection
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImagesImageResponseSingle():list() / client:ImagesImageResponseSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:ImagesImageResponseSingle(data)
  local EntityMod = require("entity.images_image_response_single_entity")
  if data == nil then
    if self._images_image_response_single == nil then
      self._images_image_response_single = EntityMod.new(self, nil)
    end
    return self._images_image_response_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImagesImageVariantFlat():list() / client:ImagesImageVariantFlat():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:ImagesImageVariantFlat(data)
  local EntityMod = require("entity.images_image_variant_flat_entity")
  if data == nil then
    if self._images_image_variant_flat == nil then
      self._images_image_variant_flat = EntityMod.new(self, nil)
    end
    return self._images_image_variant_flat
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImagesImageVariantList():list() / client:ImagesImageVariantList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:ImagesImageVariantList(data)
  local EntityMod = require("entity.images_image_variant_list_entity")
  if data == nil then
    if self._images_image_variant_list == nil then
      self._images_image_variant_list = EntityMod.new(self, nil)
    end
    return self._images_image_variant_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImagesImageVariantSimple():list() / client:ImagesImageVariantSimple():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:ImagesImageVariantSimple(data)
  local EntityMod = require("entity.images_image_variant_simple_entity")
  if data == nil then
    if self._images_image_variant_simple == nil then
      self._images_image_variant_simple = EntityMod.new(self, nil)
    end
    return self._images_image_variant_simple
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImagesImagesList():list() / client:ImagesImagesList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:ImagesImagesList(data)
  local EntityMod = require("entity.images_images_list_entity")
  if data == nil then
    if self._images_images_list == nil then
      self._images_images_list = EntityMod.new(self, nil)
    end
    return self._images_images_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImagesImagesStat():list() / client:ImagesImagesStat():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:ImagesImagesStat(data)
  local EntityMod = require("entity.images_images_stat_entity")
  if data == nil then
    if self._images_images_stat == nil then
      self._images_images_stat = EntityMod.new(self, nil)
    end
    return self._images_images_stat
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImagesMetadataKey():list() / client:ImagesMetadataKey():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:ImagesMetadataKey(data)
  local EntityMod = require("entity.images_metadata_key_entity")
  if data == nil then
    if self._images_metadata_key == nil then
      self._images_metadata_key = EntityMod.new(self, nil)
    end
    return self._images_metadata_key
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImagesSourcingkitConnectivityCheck():list() / client:ImagesSourcingkitConnectivityCheck():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:ImagesSourcingkitConnectivityCheck(data)
  local EntityMod = require("entity.images_sourcingkit_connectivity_check_entity")
  if data == nil then
    if self._images_sourcingkit_connectivity_check == nil then
      self._images_sourcingkit_connectivity_check = EntityMod.new(self, nil)
    end
    return self._images_sourcingkit_connectivity_check
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImagesSourcingkitMigration():list() / client:ImagesSourcingkitMigration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:ImagesSourcingkitMigration(data)
  local EntityMod = require("entity.images_sourcingkit_migration_entity")
  if data == nil then
    if self._images_sourcingkit_migration == nil then
      self._images_sourcingkit_migration = EntityMod.new(self, nil)
    end
    return self._images_sourcingkit_migration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImagesSourcingkitMigrationList():list() / client:ImagesSourcingkitMigrationList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:ImagesSourcingkitMigrationList(data)
  local EntityMod = require("entity.images_sourcingkit_migration_list_entity")
  if data == nil then
    if self._images_sourcingkit_migration_list == nil then
      self._images_sourcingkit_migration_list = EntityMod.new(self, nil)
    end
    return self._images_sourcingkit_migration_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImagesSourcingkitMigrationLogList():list() / client:ImagesSourcingkitMigrationLogList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:ImagesSourcingkitMigrationLogList(data)
  local EntityMod = require("entity.images_sourcingkit_migration_log_list_entity")
  if data == nil then
    if self._images_sourcingkit_migration_log_list == nil then
      self._images_sourcingkit_migration_log_list = EntityMod.new(self, nil)
    end
    return self._images_sourcingkit_migration_log_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImagesSourcingkitMigrationProgress():list() / client:ImagesSourcingkitMigrationProgress():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:ImagesSourcingkitMigrationProgress(data)
  local EntityMod = require("entity.images_sourcingkit_migration_progress_entity")
  if data == nil then
    if self._images_sourcingkit_migration_progress == nil then
      self._images_sourcingkit_migration_progress = EntityMod.new(self, nil)
    end
    return self._images_sourcingkit_migration_progress
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImagesSourcingkitMigrationSingle():list() / client:ImagesSourcingkitMigrationSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:ImagesSourcingkitMigrationSingle(data)
  local EntityMod = require("entity.images_sourcingkit_migration_single_entity")
  if data == nil then
    if self._images_sourcingkit_migration_single == nil then
      self._images_sourcingkit_migration_single = EntityMod.new(self, nil)
    end
    return self._images_sourcingkit_migration_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImagesSourcingkitSource():list() / client:ImagesSourcingkitSource():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:ImagesSourcingkitSource(data)
  local EntityMod = require("entity.images_sourcingkit_source_entity")
  if data == nil then
    if self._images_sourcingkit_source == nil then
      self._images_sourcingkit_source = EntityMod.new(self, nil)
    end
    return self._images_sourcingkit_source
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImagesSourcingkitSourceList():list() / client:ImagesSourcingkitSourceList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:ImagesSourcingkitSourceList(data)
  local EntityMod = require("entity.images_sourcingkit_source_list_entity")
  if data == nil then
    if self._images_sourcingkit_source_list == nil then
      self._images_sourcingkit_source_list = EntityMod.new(self, nil)
    end
    return self._images_sourcingkit_source_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ImagesSourcingkitSourceSingle():list() / client:ImagesSourcingkitSourceSingle():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:ImagesSourcingkitSourceSingle(data)
  local EntityMod = require("entity.images_sourcingkit_source_single_entity")
  if data == nil then
    if self._images_sourcingkit_source_single == nil then
      self._images_sourcingkit_source_single = EntityMod.new(self, nil)
    end
    return self._images_sourcingkit_source_single
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Migration():list() / client:Migration():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:Migration(data)
  local EntityMod = require("entity.migration_entity")
  if data == nil then
    if self._migration == nil then
      self._migration = EntityMod.new(self, nil)
    end
    return self._migration
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Source():list() / client:Source():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:Source(data)
  local EntityMod = require("entity.source_entity")
  if data == nil then
    if self._source == nil then
      self._source = EntityMod.new(self, nil)
    end
    return self._source
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:V1n():list() / client:V1n():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function CloudflareImagesSDK:V1n(data)
  local EntityMod = require("entity.v1n_entity")
  if data == nil then
    if self._v1n == nil then
      self._v1n = EntityMod.new(self, nil)
    end
    return self._v1n
  end
  return EntityMod.new(self, data)
end




function CloudflareImagesSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = CloudflareImagesSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return CloudflareImagesSDK
