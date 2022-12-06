package models

type TypeString int

const (
	Text TypeString = iota
	Number
	Boolean
)

type Parameter struct {
	Name  string `json:"name"`
	Value string `json:"value"`
	Type  TypeString
}
