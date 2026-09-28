package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/cloudflare-images-sdk/go"
	"github.com/voxgig-sdk/cloudflare-images-sdk/go/core"

	vs "github.com/voxgig-sdk/cloudflare-images-sdk/go/utility/struct"
)

func TestImagesImageKeyResponseCollectionEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ImagesImageKeyResponseCollection(nil)
		if ent == nil {
			t.Fatal("expected non-nil ImagesImageKeyResponseCollectionEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"images_image_key_response_collection": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ImagesImageKeyResponseCollection(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.ImagesImageKeyResponseCollection(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := images_image_key_response_collectionBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "images_image_key_response_collection." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGE_KEY_RESPONSE_COLLECTION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		imagesImageKeyResponseCollectionRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.images_image_key_response_collection")))
		var imagesImageKeyResponseCollectionRef01Data map[string]any
		if len(imagesImageKeyResponseCollectionRef01DataRaw) > 0 {
			imagesImageKeyResponseCollectionRef01Data = core.ToMapAny(imagesImageKeyResponseCollectionRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = imagesImageKeyResponseCollectionRef01Data

		// LIST
		imagesImageKeyResponseCollectionRef01Ent := client.ImagesImageKeyResponseCollection(nil)
		imagesImageKeyResponseCollectionRef01Match := map[string]any{
			"account_id": setup.idmap["account01"],
		}

		imagesImageKeyResponseCollectionRef01ListResult, err := imagesImageKeyResponseCollectionRef01Ent.List(imagesImageKeyResponseCollectionRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, imagesImageKeyResponseCollectionRef01ListOk := imagesImageKeyResponseCollectionRef01ListResult.([]any)
		if !imagesImageKeyResponseCollectionRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", imagesImageKeyResponseCollectionRef01ListResult)
		}

		// UPDATE
		imagesImageKeyResponseCollectionRef01DataUp0Up := map[string]any{
			"account_id": setup.idmap["account_id"],
		}

		imagesImageKeyResponseCollectionRef01ResdataUp0Result, err := imagesImageKeyResponseCollectionRef01Ent.Update(imagesImageKeyResponseCollectionRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		imagesImageKeyResponseCollectionRef01ResdataUp0 := core.ToMapAny(entityData(imagesImageKeyResponseCollectionRef01ResdataUp0Result))
		if imagesImageKeyResponseCollectionRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}

	})
}

func images_image_key_response_collectionBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "images_image_key_response_collection", "ImagesImageKeyResponseCollectionTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read images_image_key_response_collection test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse images_image_key_response_collection test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"images_image_key_response_collection01", "images_image_key_response_collection02", "images_image_key_response_collection03", "account01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGE_KEY_RESPONSE_COLLECTION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGE_KEY_RESPONSE_COLLECTION_ENTID": idmap,
		"CLOUDFLARE_IMAGES_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_IMAGES_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_IMAGES_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGE_KEY_RESPONSE_COLLECTION_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add account_id alias for update test.
	if idmapResolved["account_id"] == nil {
		idmapResolved["account_id"] = idmapResolved["account01"]
	}

	if env["CLOUDFLARE_IMAGES_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["CLOUDFLARE_IMAGES_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewCloudflareImagesSDK(core.ToMapAny(mergedOpts))
	}

	live := env["CLOUDFLARE_IMAGES_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["CLOUDFLARE_IMAGES_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
