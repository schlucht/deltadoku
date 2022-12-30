package models

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
)

type jsonFile struct {
	name string
	path string
	data interface{}
}

func (m *jsonFile) readFile() error {

	m.path = fmt.Sprintf("../database/%s.json", m.name)
	content, err := ioutil.ReadFile(m.path)
	if err != nil {
		return err
	}
	err = json.Unmarshal(content, &m.data)
	if err != nil {
		return err
	}
	return nil
}
