package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "CloudflareImages",
			"slug": "cloudflare-images",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.cloudflare.com/client/v4",
			"auth": map[string]any{
				"prefix": "",
				"name": "X-Auth-Email",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"cloudflare_image": map[string]any{},
				"image": map[string]any{},
				"images_deleted": map[string]any{},
				"images_image_direct_upload": map[string]any{},
				"images_image_key_response_collection": map[string]any{},
				"images_image_response_single": map[string]any{},
				"images_image_variant_flat": map[string]any{},
				"images_image_variant_list": map[string]any{},
				"images_image_variant_simple": map[string]any{},
				"images_images_list": map[string]any{},
				"images_images_stat": map[string]any{},
				"images_metadata_key": map[string]any{},
				"images_sourcingkit_connectivity_check": map[string]any{},
				"images_sourcingkit_migration": map[string]any{},
				"images_sourcingkit_migration_list": map[string]any{},
				"images_sourcingkit_migration_log_list": map[string]any{},
				"images_sourcingkit_migration_progress": map[string]any{},
				"images_sourcingkit_migration_single": map[string]any{},
				"images_sourcingkit_source": map[string]any{},
				"images_sourcingkit_source_list": map[string]any{},
				"images_sourcingkit_source_single": map[string]any{},
				"migration": map[string]any{},
				"source": map[string]any{},
				"v1n": map[string]any{},
			},
		},
		"entity": map[string]any{
			"cloudflare_image": map[string]any{
				"fields": []any{},
				"name": "cloudflare_image",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/images/v1/{image_id}/blob",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"var": "v1_id",
									},
									map[string]any{
										"lit": "blob",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v1",
									"{v1_id}",
									"blob",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"image_id": "v1_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "v1_id",
											"orig": "image_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "107b9558-dd06-4bbd-5fef-9c2c16bb7900",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"v1_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"image": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "etag",
						"title": "Etag",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "flows",
						"title": "Flows",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "version",
						"title": "Version",
						"type": "`$NUMBER`",
						"req": true,
					},
				},
				"name": "image",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/zones/{zone_id}/images/v1/flows",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "flows",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"images",
									"v1",
									"flows",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/zones/{zone_id}/images/v1/flows",
								"segments": []any{
									map[string]any{
										"lit": "zones",
									},
									map[string]any{
										"var": "zone_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "flows",
									},
								},
								"parts": []any{
									"zones",
									"{zone_id}",
									"images",
									"v1",
									"flows",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.result`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "zone_id",
											"orig": "zone_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"zone_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"images_deleted": map[string]any{
				"fields": []any{},
				"name": "images_deleted",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/images/v1/variants/{variant_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "variants",
									},
									map[string]any{
										"var": "variant_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v1",
									"variants",
									"{variant_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "variant_id",
											"orig": "variant_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "hero",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"variant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"images_image_direct_upload": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "expiry",
						"title": "Expiry",
						"type": "`$STRING`",
						"short": "The date after which the upload will not be accepted.",
						"format": "date-time",
					},
				},
				"name": "images_image_direct_upload",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/images/v1/direct_upload",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "direct_upload",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v1",
									"direct_upload",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/images/v2/direct_upload",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "direct_upload",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v2",
									"direct_upload",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"images_image_key_response_collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
				},
				"name": "images_image_key_response_collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/images/v1/keys",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "keys",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v1",
									"keys",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/images/v1/keys/{signing_key_name}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "keys",
									},
									map[string]any{
										"var": "signing_key_name",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v1",
									"keys",
									"{signing_key_name}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "signing_key_name",
											"orig": "signing_key_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "someKey",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"signing_key_name",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/accounts/{account_id}/images/v1/keys/{signing_key_name}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "keys",
									},
									map[string]any{
										"var": "signing_key_name",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v1",
									"keys",
									"{signing_key_name}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "signing_key_name",
											"orig": "signing_key_name",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "someKey",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"signing_key_name",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"images_image_response_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "creator",
						"title": "Creator",
						"type": "`$STRING`",
						"short": "Can set the creator field with an internal user ID.",
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": "`$OBJECT`",
						"short": "User modifiable key-value store.",
					},
					map[string]any{
						"name": "requireSignedURLs",
						"title": "Require Signed Ur Ls",
						"type": "`$BOOLEAN`",
						"short": "Indicates whether the image can be accessed using only its UID.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "images_image_response_single",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/images/v1",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v1",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v1",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/images/v1/{image_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"var": "image_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v1",
									"{image_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "image_id",
											"orig": "image_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "107b9558-dd06-4bbd-5fef-9c2c16bb7900",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"image_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/images/v1/{image_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"var": "image_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v1",
									"{image_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "image_id",
											"orig": "image_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "107b9558-dd06-4bbd-5fef-9c2c16bb7900",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"image_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"images_image_variant_flat": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"name": "images_image_variant_flat",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/images/v1/variants/{variant_id}/flat",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "variants",
									},
									map[string]any{
										"var": "variant_id",
									},
									map[string]any{
										"lit": "flat",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v1",
									"variants",
									"{variant_id}",
									"flat",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "variant_id",
											"orig": "variant_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "hero",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"variant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"images_image_variant_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
				},
				"name": "images_image_variant_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/images/v1/variants",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "variants",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v1",
									"variants",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"images_image_variant_simple": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "neverRequireSignedURLs",
						"title": "Never Require Signed Ur Ls",
						"type": "`$BOOLEAN`",
						"short": "Indicates whether the variant can access an image without a signature, regardless of image access control.",
					},
					map[string]any{
						"name": "options",
						"title": "Options",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Allows you to define image resizing sizes for different use cases.",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "images_image_variant_simple",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/images/v1/variants",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "variants",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v1",
									"variants",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/images/v1/variants/{variant_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "variants",
									},
									map[string]any{
										"var": "variant_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v1",
									"variants",
									"{variant_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "variant_id",
											"orig": "variant_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "hero",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"variant_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/images/v1/variants/{variant_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "variants",
									},
									map[string]any{
										"var": "variant_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v1",
									"variants",
									"{variant_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "variant_id",
											"orig": "variant_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "hero",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"variant_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"images_images_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"op": map[string]any{
							"list": map[string]any{
								"req": true,
								"type": "`$OBJECT`",
							},
						},
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
				},
				"name": "images_images_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/images/v1",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v1",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v1",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "creator",
											"orig": "creator",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1000,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"creator",
										"page",
										"per_page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/images/v2",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v2",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v2",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "continuation_token",
											"orig": "continuation_token",
											"type": "`$STRING`",
											"kind": "query",
											"example": "iD0bxlWFSVUWsDHbzIqvDkgBW4otifAAuGXLz1n8BQA",
										},
										map[string]any{
											"name": "creator",
											"orig": "creator",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "meta_<field>_<operator>",
											"orig": "meta_<field>_<operator>",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 1000,
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
											"example": "desc",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"images_images_stat": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "images_images_stat",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/images/v1/stats",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "stats",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v1",
									"stats",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"images_metadata_key": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
				},
				"name": "images_metadata_key",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/images/v2/metadata/keys",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "metadata",
									},
									map[string]any{
										"lit": "keys",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v2",
									"metadata",
									"keys",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"images_sourcingkit_connectivity_check": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account",
						"title": "Account",
						"type": "`$STRING`",
						"short": "Account identifier for the bucket (required for R2 vendor).",
					},
					map[string]any{
						"name": "bucket",
						"title": "Bucket",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the storage bucket.",
					},
					map[string]any{
						"name": "region",
						"title": "Region",
						"type": "`$STRING`",
						"short": "The region hint for the bucket (S3 only).",
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "secret",
						"title": "Secret",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Storage credentials for accessing the bucket.",
						"writeOnly": true,
					},
					map[string]any{
						"name": "vendor",
						"title": "Vendor",
						"type": "`$STRING`",
						"req": true,
						"short": "The cloud storage vendor of the source bucket.",
					},
				},
				"name": "images_sourcingkit_connectivity_check",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/images/v2/sourcingkit/sources/connectivity-precheck",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "sourcingkit",
									},
									map[string]any{
										"lit": "sources",
									},
									map[string]any{
										"lit": "connectivity-precheck",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v2",
									"sourcingkit",
									"sources",
									"connectivity-precheck",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}/connectivity",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "sourcingkit",
									},
									map[string]any{
										"lit": "sources",
									},
									map[string]any{
										"var": "source_id",
									},
									map[string]any{
										"lit": "connectivity",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v2",
									"sourcingkit",
									"sources",
									"{source_id}",
									"connectivity",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "source_id",
											"orig": "source_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5ca167e6-4e40-4ced-a209-ca1b9dd6a265",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"source_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.source",
						},
					},
				},
			},
			"images_sourcingkit_migration": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "conflictBehaviour",
						"title": "Conflict Behaviour",
						"type": "`$STRING`",
						"short": "How to handle objects that already exist at the destination.",
					},
					map[string]any{
						"name": "excludedContentTypes",
						"title": "Excluded Content Types",
						"type": "`$ARRAY`",
						"short": "Content types to skip during migration.",
					},
					map[string]any{
						"name": "pathPrefix",
						"title": "Path Prefix",
						"type": "`$STRING`",
						"short": "Prefix to prepend to image custom IDs.",
					},
					map[string]any{
						"name": "rootDirectory",
						"title": "Root Directory",
						"type": "`$STRING`",
						"short": "Only import objects under this prefix in the source bucket.",
					},
					map[string]any{
						"name": "sourceId",
						"title": "Source Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The identifier of the source to migrate from.",
						"format": "uuid",
					},
				},
				"name": "images_sourcingkit_migration",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/images/v2/sourcingkit/migrations",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "sourcingkit",
									},
									map[string]any{
										"lit": "migrations",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v2",
									"sourcingkit",
									"migrations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"images_sourcingkit_migration_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
				},
				"name": "images_sourcingkit_migration_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/images/v2/sourcingkit/migrations",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "sourcingkit",
									},
									map[string]any{
										"lit": "migrations",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v2",
									"sourcingkit",
									"migrations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"limit",
										"offset",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"images_sourcingkit_migration_log_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
				},
				"name": "images_sourcingkit_migration_log_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/logs",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "sourcingkit",
									},
									map[string]any{
										"lit": "migrations",
									},
									map[string]any{
										"var": "migration_id",
									},
									map[string]any{
										"lit": "logs",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v2",
									"sourcingkit",
									"migrations",
									"{migration_id}",
									"logs",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "migration_id",
											"orig": "migration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5ca167e6-4e40-4ced-a209-ca1b9dd6a265",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.migration",
						},
					},
				},
			},
			"images_sourcingkit_migration_progress": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "images_sourcingkit_migration_progress",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/lifecycle",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "sourcingkit",
									},
									map[string]any{
										"lit": "migrations",
									},
									map[string]any{
										"var": "migration_id",
									},
									map[string]any{
										"lit": "lifecycle",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v2",
									"sourcingkit",
									"migrations",
									"{migration_id}",
									"lifecycle",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "migration_id",
											"orig": "migration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5ca167e6-4e40-4ced-a209-ca1b9dd6a265",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"migration_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.migration",
						},
					},
				},
			},
			"images_sourcingkit_migration_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "images_sourcingkit_migration_single",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "sourcingkit",
									},
									map[string]any{
										"lit": "migrations",
									},
									map[string]any{
										"var": "migration_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v2",
									"sourcingkit",
									"migrations",
									"{migration_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "migration_id",
											"orig": "migration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5ca167e6-4e40-4ced-a209-ca1b9dd6a265",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"migration_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/lifecycle/abort",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "sourcingkit",
									},
									map[string]any{
										"lit": "migrations",
									},
									map[string]any{
										"var": "migration_id",
									},
									map[string]any{
										"lit": "lifecycle",
									},
									map[string]any{
										"lit": "abort",
									},
								},
								"parts": []any{
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
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "migration_id",
											"orig": "migration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5ca167e6-4e40-4ced-a209-ca1b9dd6a265",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"migration_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}/lifecycle/start",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "sourcingkit",
									},
									map[string]any{
										"lit": "migrations",
									},
									map[string]any{
										"var": "migration_id",
									},
									map[string]any{
										"lit": "lifecycle",
									},
									map[string]any{
										"lit": "start",
									},
								},
								"parts": []any{
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
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "migration_id",
											"orig": "migration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5ca167e6-4e40-4ced-a209-ca1b9dd6a265",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"migration_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.migration",
						},
					},
				},
			},
			"images_sourcingkit_source": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "account",
						"title": "Account",
						"type": "`$STRING`",
						"short": "Account identifier for the bucket (required for R2 vendor).",
					},
					map[string]any{
						"name": "bucket",
						"title": "Bucket",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the storage bucket.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "A human-readable name for the source.",
					},
					map[string]any{
						"name": "secret",
						"title": "Secret",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Storage credentials for accessing the bucket.",
						"writeOnly": true,
					},
					map[string]any{
						"name": "vendor",
						"title": "Vendor",
						"type": "`$STRING`",
						"req": true,
						"short": "The cloud storage vendor of the source bucket.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "images_sourcingkit_source",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/accounts/{account_id}/images/v2/sourcingkit/sources",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "sourcingkit",
									},
									map[string]any{
										"lit": "sources",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v2",
									"sourcingkit",
									"sources",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PATCH",
								"orig": "/accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "sourcingkit",
									},
									map[string]any{
										"lit": "sources",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v2",
									"sourcingkit",
									"sources",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"source_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "id",
											"orig": "source_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5ca167e6-4e40-4ced-a209-ca1b9dd6a265",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"images_sourcingkit_source_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "errors",
						"title": "Errors",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "messages",
						"title": "Messages",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "success",
						"title": "Success",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Whether the API call was successful",
					},
				},
				"name": "images_sourcingkit_source_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/images/v2/sourcingkit/sources",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "sourcingkit",
									},
									map[string]any{
										"lit": "sources",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v2",
									"sourcingkit",
									"sources",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
									},
									"query": []any{
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 25,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "offset",
											"orig": "offset",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 0,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"images_sourcingkit_source_single": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "result",
						"title": "Result",
						"type": "`$OBJECT`",
					},
				},
				"name": "images_sourcingkit_source_single",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "sourcingkit",
									},
									map[string]any{
										"lit": "sources",
									},
									map[string]any{
										"var": "source_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v2",
									"sourcingkit",
									"sources",
									"{source_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "source_id",
											"orig": "source_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5ca167e6-4e40-4ced-a209-ca1b9dd6a265",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"source_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.source",
						},
					},
				},
			},
			"migration": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "migration",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/images/v2/sourcingkit/migrations/{migration_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "sourcingkit",
									},
									map[string]any{
										"lit": "migrations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v2",
									"sourcingkit",
									"migrations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"migration_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "id",
											"orig": "migration_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5ca167e6-4e40-4ced-a209-ca1b9dd6a265",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"source": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "source",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/images/v2/sourcingkit/sources/{source_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v2",
									},
									map[string]any{
										"lit": "sourcingkit",
									},
									map[string]any{
										"lit": "sources",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v2",
									"sourcingkit",
									"sources",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"source_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "id",
											"orig": "source_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5ca167e6-4e40-4ced-a209-ca1b9dd6a265",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"v1n": map[string]any{
				"fields": []any{},
				"name": "v1n",
				"op": map[string]any{
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/accounts/{account_id}/images/v1/{image_id}",
								"segments": []any{
									map[string]any{
										"lit": "accounts",
									},
									map[string]any{
										"var": "account_id",
									},
									map[string]any{
										"lit": "images",
									},
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"var": "image_id",
									},
								},
								"parts": []any{
									"accounts",
									"{account_id}",
									"images",
									"v1",
									"{image_id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "account_id",
											"orig": "account_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "023e105f4ecef8ad9ca31a8372d0c353",
										},
										map[string]any{
											"name": "image_id",
											"orig": "image_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "107b9558-dd06-4bbd-5fef-9c2c16bb7900",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_id",
										"image_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
