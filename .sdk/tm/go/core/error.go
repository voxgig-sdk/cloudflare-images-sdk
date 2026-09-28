package core

type CloudflareImagesError struct {
	IsCloudflareImagesError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCloudflareImagesError(code string, msg string, ctx *Context) *CloudflareImagesError {
	return &CloudflareImagesError{
		IsCloudflareImagesError: true,
		Sdk:              "CloudflareImages",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CloudflareImagesError) Error() string {
	return e.Msg
}
