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

func TestImagesSourcingkitMigrationSingleEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ImagesSourcingkitMigrationSingle(nil)
		if ent == nil {
			t.Fatal("expected non-nil ImagesSourcingkitMigrationSingleEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := images_sourcingkit_migration_singleBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "images_sourcingkit_migration_single." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_MIGRATION_SINGLE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		imagesSourcingkitMigrationSingleRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.images_sourcingkit_migration_single")))
		var imagesSourcingkitMigrationSingleRef01Data map[string]any
		if len(imagesSourcingkitMigrationSingleRef01DataRaw) > 0 {
			imagesSourcingkitMigrationSingleRef01Data = core.ToMapAny(imagesSourcingkitMigrationSingleRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = imagesSourcingkitMigrationSingleRef01Data

		// UPDATE
		imagesSourcingkitMigrationSingleRef01Ent := client.ImagesSourcingkitMigrationSingle(nil)
		imagesSourcingkitMigrationSingleRef01DataUp0Up := map[string]any{
			"account_id": setup.idmap["account_id"],
		}

		imagesSourcingkitMigrationSingleRef01ResdataUp0Result, err := imagesSourcingkitMigrationSingleRef01Ent.Update(imagesSourcingkitMigrationSingleRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		imagesSourcingkitMigrationSingleRef01ResdataUp0 := core.ToMapAny(entityData(imagesSourcingkitMigrationSingleRef01ResdataUp0Result))
		if imagesSourcingkitMigrationSingleRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}

		// LOAD
		imagesSourcingkitMigrationSingleRef01MatchDt0 := map[string]any{}
		imagesSourcingkitMigrationSingleRef01DataDt0Loaded, err := imagesSourcingkitMigrationSingleRef01Ent.Load(imagesSourcingkitMigrationSingleRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if imagesSourcingkitMigrationSingleRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func images_sourcingkit_migration_singleBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "images_sourcingkit_migration_single", "ImagesSourcingkitMigrationSingleTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read images_sourcingkit_migration_single test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse images_sourcingkit_migration_single test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"images_sourcingkit_migration_single01", "images_sourcingkit_migration_single02", "images_sourcingkit_migration_single03", "migration01", "migration02", "migration03", "account01"},
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
	entidEnvRaw := os.Getenv("CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_MIGRATION_SINGLE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_MIGRATION_SINGLE_ENTID": idmap,
		"CLOUDFLARE_IMAGES_TEST_LIVE":      "FALSE",
		"CLOUDFLARE_IMAGES_TEST_EXPLAIN":   "FALSE",
		"CLOUDFLARE_IMAGES_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDFLARE_IMAGES_TEST_IMAGES_SOURCINGKIT_MIGRATION_SINGLE_ENTID"])
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
