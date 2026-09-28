package sdktest

import (
	"encoding/json"
	"fmt"
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

func TestImagesImageResponseSingleEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ImagesImageResponseSingle(nil)
		if ent == nil {
			t.Fatal("expected non-nil ImagesImageResponseSingleEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := images_image_response_singleBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "images_image_response_single." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGE_RESPONSE_SINGLE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		imagesImageResponseSingleRef01Ent := client.ImagesImageResponseSingle(nil)
		imagesImageResponseSingleRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "images_image_response_single"}), "images_image_response_single_ref01"))
		imagesImageResponseSingleRef01Data["account_id"] = setup.idmap["account01"]

		imagesImageResponseSingleRef01DataResult, err := imagesImageResponseSingleRef01Ent.Create(imagesImageResponseSingleRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		imagesImageResponseSingleRef01Data = core.ToMapAny(entityData(imagesImageResponseSingleRef01DataResult))
		if imagesImageResponseSingleRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		imagesImageResponseSingleRef01DataUp0Up := map[string]any{
			"account_id": setup.idmap["account_id"],
		}

		imagesImageResponseSingleRef01MarkdefUp0Name := "creator"
		imagesImageResponseSingleRef01MarkdefUp0Value := fmt.Sprintf("Mark01-images_image_response_single_ref01_%d", setup.now)
		imagesImageResponseSingleRef01DataUp0Up[imagesImageResponseSingleRef01MarkdefUp0Name] = imagesImageResponseSingleRef01MarkdefUp0Value

		imagesImageResponseSingleRef01ResdataUp0Result, err := imagesImageResponseSingleRef01Ent.Update(imagesImageResponseSingleRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		imagesImageResponseSingleRef01ResdataUp0 := core.ToMapAny(entityData(imagesImageResponseSingleRef01ResdataUp0Result))
		if imagesImageResponseSingleRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if imagesImageResponseSingleRef01ResdataUp0[imagesImageResponseSingleRef01MarkdefUp0Name] != imagesImageResponseSingleRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", imagesImageResponseSingleRef01MarkdefUp0Name, imagesImageResponseSingleRef01ResdataUp0[imagesImageResponseSingleRef01MarkdefUp0Name])
		}

		// LOAD
		imagesImageResponseSingleRef01MatchDt0 := map[string]any{}
		imagesImageResponseSingleRef01DataDt0Loaded, err := imagesImageResponseSingleRef01Ent.Load(imagesImageResponseSingleRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if imagesImageResponseSingleRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func images_image_response_singleBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "images_image_response_single", "ImagesImageResponseSingleTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read images_image_response_single test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse images_image_response_single test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"images_image_response_single01", "images_image_response_single02", "images_image_response_single03", "account01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGE_RESPONSE_SINGLE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGE_RESPONSE_SINGLE_ENTID": idmap,
		"CLOUDFLARE_IMAGES_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_IMAGES_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_IMAGES_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_IMAGES_TEST_IMAGES_IMAGE_RESPONSE_SINGLE_ENTID"])
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
