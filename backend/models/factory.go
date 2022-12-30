package models

import "log"

type Factory struct {
	FactoryId   string `json:"factory-id"`
	FactoryName string `json:"factory-name"`
}

func (m *Factory) AllFactories() []*Factory {
	files := &jsonFile{
		name: "factories",
	}
	err := files.readFile()
	if err != nil {
		log.Fatal(err)
	}
	return nil
}
