package models

import (
	"encoding/json"
	"log"
)

type Factory struct {
	FactoryId   string `json:"factoryId"`
	FactoryName string `json:"factoryName"`
}

func (m *Factory) AllFactories() string {

	data, err := readFile("factories")
	var f []Factory
	json.Unmarshal(data, &f)
	if err != nil {
		log.Fatal(err)
	}
	return string(data)
}
