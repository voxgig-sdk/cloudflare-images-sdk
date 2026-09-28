-- CloudflareImages SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "CloudflareImages",
      slug = "cloudflare-images",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://api.cloudflare.com/client/v4",
      auth = {
        prefix = "",
        name = "X-Auth-Email",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["cloudflare_image"] = {},
        ["image"] = {},
        ["images_deleted"] = {},
        ["images_image_direct_upload"] = {},
        ["images_image_key_response_collection"] = {},
        ["images_image_response_single"] = {},
        ["images_image_variant_flat"] = {},
        ["images_image_variant_list"] = {},
        ["images_image_variant_simple"] = {},
        ["images_images_list"] = {},
        ["images_images_stat"] = {},
        ["images_metadata_key"] = {},
        ["images_sourcingkit_connectivity_check"] = {},
        ["images_sourcingkit_migration"] = {},
        ["images_sourcingkit_migration_list"] = {},
        ["images_sourcingkit_migration_log_list"] = {},
        ["images_sourcingkit_migration_progress"] = {},
        ["images_sourcingkit_migration_single"] = {},
        ["images_sourcingkit_source"] = {},
        ["images_sourcingkit_source_list"] = {},
        ["images_sourcingkit_source_single"] = {},
        ["migration"] = {},
        ["source"] = {},
        ["v1n"] = {},
      },
    },
    entity = {
      ["cloudflare_image"] = {
        ["fields"] = {},
        ["name"] = "cloudflare_image",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{account_id}/images/v1/{image_id}/blob",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["var"] = "v1_id",
                  },
                  {
                    ["lit"] = "blob",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v1",
                  "{v1_id}",
                  "blob",
                },
                ["rename"] = {
                  ["param"] = {
                    ["image_id"] = "v1_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "v1_id",
                      ["orig"] = "image_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "107b9558-dd06-4bbd-5fef-9c2c16bb7900",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "v1_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["image"] = {
        ["fields"] = {
          {
            ["name"] = "etag",
            ["title"] = "Etag",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "flows",
            ["title"] = "Flows",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "version",
            ["title"] = "Version",
            ["type"] = "`$NUMBER`",
            ["req"] = true,
          },
        },
        ["name"] = "image",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zones/{zone_id}/images/v1/flows",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "flows",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "images",
                  "v1",
                  "flows",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.result`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/zones/{zone_id}/images/v1/flows",
                ["segments"] = {
                  {
                    ["lit"] = "zones",
                  },
                  {
                    ["var"] = "zone_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "flows",
                  },
                },
                ["parts"] = {
                  "zones",
                  "{zone_id}",
                  "images",
                  "v1",
                  "flows",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.result`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "zone_id",
                      ["orig"] = "zone_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "zone_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["images_deleted"] = {
        ["fields"] = {},
        ["name"] = "images_deleted",
        ["op"] = {
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/accounts/{account_id}/images/v1/variants/{variant_id}",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "variants",
                  },
                  {
                    ["var"] = "variant_id",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v1",
                  "variants",
                  "{variant_id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "variant_id",
                      ["orig"] = "variant_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "hero",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "variant_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["images_image_direct_upload"] = {
        ["fields"] = {
          {
            ["name"] = "expiry",
            ["title"] = "Expiry",
            ["type"] = "`$STRING`",
            ["short"] = "The date after which the upload will not be accepted.",
            ["format"] = "date-time",
          },
        },
        ["name"] = "images_image_direct_upload",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/accounts/{account_id}/images/v1/direct_upload",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "direct_upload",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v1",
                  "direct_upload",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/accounts/{account_id}/images/v2/direct_upload",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "direct_upload",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v2",
                  "direct_upload",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["images_image_key_response_collection"] = {
        ["fields"] = {
          {
            ["name"] = "errors",
            ["title"] = "Errors",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Whether the API call was successful",
          },
        },
        ["name"] = "images_image_key_response_collection",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{account_id}/images/v1/keys",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "keys",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v1",
                  "keys",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/accounts/{account_id}/images/v1/keys/{signing_key_name}",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "keys",
                  },
                  {
                    ["var"] = "signing_key_name",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v1",
                  "keys",
                  "{signing_key_name}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "signing_key_name",
                      ["orig"] = "signing_key_name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "someKey",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "signing_key_name",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/accounts/{account_id}/images/v1/keys/{signing_key_name}",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "keys",
                  },
                  {
                    ["var"] = "signing_key_name",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v1",
                  "keys",
                  "{signing_key_name}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "signing_key_name",
                      ["orig"] = "signing_key_name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "someKey",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "signing_key_name",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["images_image_response_single"] = {
        ["fields"] = {
          {
            ["name"] = "creator",
            ["title"] = "Creator",
            ["type"] = "`$STRING`",
            ["short"] = "Can set the creator field with an internal user ID.",
          },
          {
            ["name"] = "metadata",
            ["title"] = "Metadata",
            ["type"] = "`$OBJECT`",
            ["short"] = "User modifiable key-value store.",
          },
          {
            ["name"] = "requireSignedURLs",
            ["title"] = "Require Signed Ur Ls",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Indicates whether the image can be accessed using only its UID.",
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "images_image_response_single",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/accounts/{account_id}/images/v1",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v1",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v1",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{account_id}/images/v1/{image_id}",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["var"] = "image_id",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v1",
                  "{image_id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "image_id",
                      ["orig"] = "image_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "107b9558-dd06-4bbd-5fef-9c2c16bb7900",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "image_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/accounts/{account_id}/images/v1/{image_id}",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["var"] = "image_id",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v1",
                  "{image_id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "image_id",
                      ["orig"] = "image_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "107b9558-dd06-4bbd-5fef-9c2c16bb7900",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "image_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["images_image_variant_flat"] = {
        ["fields"] = {
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
        },
        ["name"] = "images_image_variant_flat",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{account_id}/images/v1/variants/{variant_id}/flat",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "variants",
                  },
                  {
                    ["var"] = "variant_id",
                  },
                  {
                    ["lit"] = "flat",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v1",
                  "variants",
                  "{variant_id}",
                  "flat",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "variant_id",
                      ["orig"] = "variant_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "hero",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "variant_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["images_image_variant_list"] = {
        ["fields"] = {
          {
            ["name"] = "errors",
            ["title"] = "Errors",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Whether the API call was successful",
          },
        },
        ["name"] = "images_image_variant_list",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{account_id}/images/v1/variants",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "variants",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v1",
                  "variants",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["images_image_variant_simple"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "neverRequireSignedURLs",
            ["title"] = "Never Require Signed Ur Ls",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Indicates whether the variant can access an image without a signature, regardless of image access control.",
          },
          {
            ["name"] = "options",
            ["title"] = "Options",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Allows you to define image resizing sizes for different use cases.",
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "images_image_variant_simple",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/accounts/{account_id}/images/v1/variants",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "variants",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v1",
                  "variants",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{account_id}/images/v1/variants/{variant_id}",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "variants",
                  },
                  {
                    ["var"] = "variant_id",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v1",
                  "variants",
                  "{variant_id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "variant_id",
                      ["orig"] = "variant_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "hero",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "variant_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/accounts/{account_id}/images/v1/variants/{variant_id}",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "variants",
                  },
                  {
                    ["var"] = "variant_id",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v1",
                  "variants",
                  "{variant_id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "variant_id",
                      ["orig"] = "variant_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "hero",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "variant_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["images_images_list"] = {
        ["fields"] = {
          {
            ["name"] = "errors",
            ["title"] = "Errors",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
            ["op"] = {
              ["list"] = {
                ["req"] = true,
                ["type"] = "`$OBJECT`",
              },
            },
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Whether the API call was successful",
          },
        },
        ["name"] = "images_images_list",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{account_id}/images/v1",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v1",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v1",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "creator",
                      ["orig"] = "creator",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["example"] = 1,
                    },
                    {
                      ["name"] = "per_page",
                      ["orig"] = "per_page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["example"] = 1000,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "creator",
                    "page",
                    "per_page",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{account_id}/images/v2",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v2",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v2",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "continuation_token",
                      ["orig"] = "continuation_token",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "iD0bxlWFSVUWsDHbzIqvDkgBW4otifAAuGXLz1n8BQA",
                    },
                    {
                      ["name"] = "creator",
                      ["orig"] = "creator",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "meta_<field>_<operator>",
                      ["orig"] = "meta_<field>_<operator>",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "per_page",
                      ["orig"] = "per_page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["example"] = 1000,
                    },
                    {
                      ["name"] = "sort_order",
                      ["orig"] = "sort_order",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "desc",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "continuation_token",
                    "creator",
                    "meta_<field>_<operator>",
                    "per_page",
                    "sort_order",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["images_images_stat"] = {
        ["fields"] = {
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "images_images_stat",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{account_id}/images/v1/stats",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "stats",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v1",
                  "stats",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["images_metadata_key"] = {
        ["fields"] = {
          {
            ["name"] = "errors",
            ["title"] = "Errors",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Whether the API call was successful",
          },
        },
        ["name"] = "images_metadata_key",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{account_id}/images/v2/metadata/keys",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "metadata",
                  },
                  {
                    ["lit"] = "keys",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v2",
                  "metadata",
                  "keys",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["images_sourcingkit_connectivity_check"] = {
        ["fields"] = {
          {
            ["name"] = "account",
            ["title"] = "Account",
            ["type"] = "`$STRING`",
            ["short"] = "Account identifier for the bucket (required for R2 vendor).",
          },
          {
            ["name"] = "bucket",
            ["title"] = "Bucket",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The name of the storage bucket.",
          },
          {
            ["name"] = "region",
            ["title"] = "Region",
            ["type"] = "`$STRING`",
            ["short"] = "The region hint for the bucket (S3 only).",
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "secret",
            ["title"] = "Secret",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Storage credentials for accessing the bucket.",
            ["writeOnly"] = true,
          },
          {
            ["name"] = "vendor",
            ["title"] = "Vendor",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The cloud storage vendor of the source bucket.",
          },
        },
        ["name"] = "images_sourcingkit_connectivity_check",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/accounts/{account_id}/images/v2/sourcingkit/sources/connectivity-precheck",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "sourcingkit",
                  },
                  {
                    ["lit"] = "sources",
                  },
                  {
                    ["lit"] = "connectivity-precheck",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v2",
                  "sourcingkit",
                  "sources",
                  "connectivity-precheck",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}/connectivity",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "sourcingkit",
                  },
                  {
                    ["lit"] = "sources",
                  },
                  {
                    ["var"] = "source_id",
                  },
                  {
                    ["lit"] = "connectivity",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v2",
                  "sourcingkit",
                  "sources",
                  "{source_id}",
                  "connectivity",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "source_id",
                      ["orig"] = "source_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5ca167e6-4e40-4ced-a209-ca1b9dd6a265",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "source_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.source",
            },
          },
        },
      },
      ["images_sourcingkit_migration"] = {
        ["fields"] = {
          {
            ["name"] = "conflictBehaviour",
            ["title"] = "Conflict Behaviour",
            ["type"] = "`$STRING`",
            ["short"] = "How to handle objects that already exist at the destination.",
          },
          {
            ["name"] = "excludedContentTypes",
            ["title"] = "Excluded Content Types",
            ["type"] = "`$ARRAY`",
            ["short"] = "Content types to skip during migration.",
          },
          {
            ["name"] = "pathPrefix",
            ["title"] = "Path Prefix",
            ["type"] = "`$STRING`",
            ["short"] = "Prefix to prepend to image custom IDs.",
          },
          {
            ["name"] = "rootDirectory",
            ["title"] = "Root Directory",
            ["type"] = "`$STRING`",
            ["short"] = "Only import objects under this prefix in the source bucket.",
          },
          {
            ["name"] = "sourceId",
            ["title"] = "Source Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The identifier of the source to migrate from.",
            ["format"] = "uuid",
          },
        },
        ["name"] = "images_sourcingkit_migration",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/accounts/{account_id}/images/v2/sourcingkit/migrations",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "sourcingkit",
                  },
                  {
                    ["lit"] = "migrations",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v2",
                  "sourcingkit",
                  "migrations",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["images_sourcingkit_migration_list"] = {
        ["fields"] = {
          {
            ["name"] = "errors",
            ["title"] = "Errors",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Whether the API call was successful",
          },
        },
        ["name"] = "images_sourcingkit_migration_list",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{account_id}/images/v2/sourcingkit/migrations",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "sourcingkit",
                  },
                  {
                    ["lit"] = "migrations",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v2",
                  "sourcingkit",
                  "migrations",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 25,
                    },
                    {
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "limit",
                    "offset",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["images_sourcingkit_migration_log_list"] = {
        ["fields"] = {
          {
            ["name"] = "errors",
            ["title"] = "Errors",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Whether the API call was successful",
          },
        },
        ["name"] = "images_sourcingkit_migration_log_list",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/logs",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "sourcingkit",
                  },
                  {
                    ["lit"] = "migrations",
                  },
                  {
                    ["var"] = "migration_id",
                  },
                  {
                    ["lit"] = "logs",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v2",
                  "sourcingkit",
                  "migrations",
                  "{migration_id}",
                  "logs",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "migration_id",
                      ["orig"] = "migration_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5ca167e6-4e40-4ced-a209-ca1b9dd6a265",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 25,
                    },
                    {
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "limit",
                    "migration_id",
                    "offset",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.migration",
            },
          },
        },
      },
      ["images_sourcingkit_migration_progress"] = {
        ["fields"] = {
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "images_sourcingkit_migration_progress",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/lifecycle",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "sourcingkit",
                  },
                  {
                    ["lit"] = "migrations",
                  },
                  {
                    ["var"] = "migration_id",
                  },
                  {
                    ["lit"] = "lifecycle",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v2",
                  "sourcingkit",
                  "migrations",
                  "{migration_id}",
                  "lifecycle",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "migration_id",
                      ["orig"] = "migration_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5ca167e6-4e40-4ced-a209-ca1b9dd6a265",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "migration_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.migration",
            },
          },
        },
      },
      ["images_sourcingkit_migration_single"] = {
        ["fields"] = {
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "images_sourcingkit_migration_single",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "sourcingkit",
                  },
                  {
                    ["lit"] = "migrations",
                  },
                  {
                    ["var"] = "migration_id",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v2",
                  "sourcingkit",
                  "migrations",
                  "{migration_id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "migration_id",
                      ["orig"] = "migration_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5ca167e6-4e40-4ced-a209-ca1b9dd6a265",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "migration_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/lifecycle/abort",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "sourcingkit",
                  },
                  {
                    ["lit"] = "migrations",
                  },
                  {
                    ["var"] = "migration_id",
                  },
                  {
                    ["lit"] = "lifecycle",
                  },
                  {
                    ["lit"] = "abort",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v2",
                  "sourcingkit",
                  "migrations",
                  "{migration_id}",
                  "lifecycle",
                  "abort",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "migration_id",
                      ["orig"] = "migration_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5ca167e6-4e40-4ced-a209-ca1b9dd6a265",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "migration_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/lifecycle/start",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "sourcingkit",
                  },
                  {
                    ["lit"] = "migrations",
                  },
                  {
                    ["var"] = "migration_id",
                  },
                  {
                    ["lit"] = "lifecycle",
                  },
                  {
                    ["lit"] = "start",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v2",
                  "sourcingkit",
                  "migrations",
                  "{migration_id}",
                  "lifecycle",
                  "start",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "migration_id",
                      ["orig"] = "migration_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5ca167e6-4e40-4ced-a209-ca1b9dd6a265",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "migration_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.migration",
            },
          },
        },
      },
      ["images_sourcingkit_source"] = {
        ["fields"] = {
          {
            ["name"] = "account",
            ["title"] = "Account",
            ["type"] = "`$STRING`",
            ["short"] = "Account identifier for the bucket (required for R2 vendor).",
          },
          {
            ["name"] = "bucket",
            ["title"] = "Bucket",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The name of the storage bucket.",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "A human-readable name for the source.",
          },
          {
            ["name"] = "secret",
            ["title"] = "Secret",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Storage credentials for accessing the bucket.",
            ["writeOnly"] = true,
          },
          {
            ["name"] = "vendor",
            ["title"] = "Vendor",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "The cloud storage vendor of the source bucket.",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "images_sourcingkit_source",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/accounts/{account_id}/images/v2/sourcingkit/sources",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "sourcingkit",
                  },
                  {
                    ["lit"] = "sources",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v2",
                  "sourcingkit",
                  "sources",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PATCH",
                ["orig"] = "/accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "sourcingkit",
                  },
                  {
                    ["lit"] = "sources",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v2",
                  "sourcingkit",
                  "sources",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["source_id"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "source_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5ca167e6-4e40-4ced-a209-ca1b9dd6a265",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["images_sourcingkit_source_list"] = {
        ["fields"] = {
          {
            ["name"] = "errors",
            ["title"] = "Errors",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "messages",
            ["title"] = "Messages",
            ["type"] = "`$ARRAY`",
            ["req"] = true,
          },
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "success",
            ["title"] = "Success",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Whether the API call was successful",
          },
        },
        ["name"] = "images_sourcingkit_source_list",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{account_id}/images/v2/sourcingkit/sources",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "sourcingkit",
                  },
                  {
                    ["lit"] = "sources",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v2",
                  "sourcingkit",
                  "sources",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 25,
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "offset",
                      ["orig"] = "offset",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "limit",
                    "name",
                    "offset",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["images_sourcingkit_source_single"] = {
        ["fields"] = {
          {
            ["name"] = "result",
            ["title"] = "Result",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "images_sourcingkit_source_single",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "sourcingkit",
                  },
                  {
                    ["lit"] = "sources",
                  },
                  {
                    ["var"] = "source_id",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v2",
                  "sourcingkit",
                  "sources",
                  "{source_id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "source_id",
                      ["orig"] = "source_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5ca167e6-4e40-4ced-a209-ca1b9dd6a265",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "source_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.source",
            },
          },
        },
      },
      ["migration"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "migration",
        ["op"] = {
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "sourcingkit",
                  },
                  {
                    ["lit"] = "migrations",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v2",
                  "sourcingkit",
                  "migrations",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["migration_id"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "migration_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5ca167e6-4e40-4ced-a209-ca1b9dd6a265",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["source"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "source",
        ["op"] = {
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v2",
                  },
                  {
                    ["lit"] = "sourcingkit",
                  },
                  {
                    ["lit"] = "sources",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v2",
                  "sourcingkit",
                  "sources",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["source_id"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "source_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5ca167e6-4e40-4ced-a209-ca1b9dd6a265",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["v1n"] = {
        ["fields"] = {},
        ["name"] = "v1n",
        ["op"] = {
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/accounts/{account_id}/images/v1/{image_id}",
                ["segments"] = {
                  {
                    ["lit"] = "accounts",
                  },
                  {
                    ["var"] = "account_id",
                  },
                  {
                    ["lit"] = "images",
                  },
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["var"] = "image_id",
                  },
                },
                ["parts"] = {
                  "accounts",
                  "{account_id}",
                  "images",
                  "v1",
                  "{image_id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "account_id",
                      ["orig"] = "account_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "023e105f4ecef8ad9ca31a8372d0c353",
                    },
                    {
                      ["name"] = "image_id",
                      ["orig"] = "image_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "107b9558-dd06-4bbd-5fef-9c2c16bb7900",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "account_id",
                    "image_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
