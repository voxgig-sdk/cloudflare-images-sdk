package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/cloudflare-images-sdk/go"
)

// Args is the common argument shape for both tools. `entity` selects
// the SDK entity to operate on; `query` is the optional reqmatch /
// reqdata map passed through to the SDK. For load, `query` should be
// `{"id": <value>}`. For list, omit `query` or pass an empty map.
type Args struct {
	Entity string         `json:"entity" jsonschema:"cloudflare_image | image | images_deleted | images_image_direct_upload | images_image_key_response_collection | images_image_response_single | images_image_variant_flat | images_image_variant_list | images_image_variant_simple | images_images_list | images_images_stat | images_metadata_key | images_sourcingkit_connectivity_check | images_sourcingkit_migration | images_sourcingkit_migration_list | images_sourcingkit_migration_log_list | images_sourcingkit_migration_progress | images_sourcingkit_migration_single | images_sourcingkit_source | images_sourcingkit_source_list | images_sourcingkit_source_single | migration | source | v1n"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional match map e.g. {\"id\":1} for load, omit for list"`
}

func registerTools(server *mcp.Server, client *sdk.CloudflareImagesSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-images_list",
		Description: "List records from CloudflareImages. " +
			"Args: entity (one of the supported SDK entities), query (optional filter map). " +
			"Returns the first page of records as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "list", args)
	})

	mcp.AddTool(server, &mcp.Tool{
		Name: "cloudflare-images_load",
		Description: "Load a single record from CloudflareImages. " +
			"Args: entity, query ({\"id\":N} required). Returns the record as JSON.",
	}, func(ctx context.Context, req *mcp.CallToolRequest, args Args) (*mcp.CallToolResult, any, error) {
		return runOp(client, "load", args)
	})
}

func runOp(client *sdk.CloudflareImagesSDK, op string, args Args) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, args.Entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(args.Query, nil)
	case "load":
		result, err = ent.Load(args.Query, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.CloudflareImagesSDK, name string) (sdk.CloudflareImagesEntity, error) {
	switch strings.ToLower(name) {
	case "cloudflare_image":
		return client.CloudflareImage(nil), nil
	case "image":
		return client.Image(nil), nil
	case "images_deleted":
		return client.ImagesDeleted(nil), nil
	case "images_image_direct_upload":
		return client.ImagesImageDirectUpload(nil), nil
	case "images_image_key_response_collection":
		return client.ImagesImageKeyResponseCollection(nil), nil
	case "images_image_response_single":
		return client.ImagesImageResponseSingle(nil), nil
	case "images_image_variant_flat":
		return client.ImagesImageVariantFlat(nil), nil
	case "images_image_variant_list":
		return client.ImagesImageVariantList(nil), nil
	case "images_image_variant_simple":
		return client.ImagesImageVariantSimple(nil), nil
	case "images_images_list":
		return client.ImagesImagesList(nil), nil
	case "images_images_stat":
		return client.ImagesImagesStat(nil), nil
	case "images_metadata_key":
		return client.ImagesMetadataKey(nil), nil
	case "images_sourcingkit_connectivity_check":
		return client.ImagesSourcingkitConnectivityCheck(nil), nil
	case "images_sourcingkit_migration":
		return client.ImagesSourcingkitMigration(nil), nil
	case "images_sourcingkit_migration_list":
		return client.ImagesSourcingkitMigrationList(nil), nil
	case "images_sourcingkit_migration_log_list":
		return client.ImagesSourcingkitMigrationLogList(nil), nil
	case "images_sourcingkit_migration_progress":
		return client.ImagesSourcingkitMigrationProgress(nil), nil
	case "images_sourcingkit_migration_single":
		return client.ImagesSourcingkitMigrationSingle(nil), nil
	case "images_sourcingkit_source":
		return client.ImagesSourcingkitSource(nil), nil
	case "images_sourcingkit_source_list":
		return client.ImagesSourcingkitSourceList(nil), nil
	case "images_sourcingkit_source_single":
		return client.ImagesSourcingkitSourceSingle(nil), nil
	case "migration":
		return client.Migration(nil), nil
	case "source":
		return client.Source(nil), nil
	case "v1n":
		return client.V1n(nil), nil

	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}
