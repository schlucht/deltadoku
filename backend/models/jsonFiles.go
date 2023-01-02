package models

import (
	"fmt"
	"io/ioutil"
)

func readFile(path string) ([]byte, error) {
	p := fmt.Sprintf("./database/%s.json", path)
	content, err := ioutil.ReadFile(p)
	if err != nil {
		return nil, err
	}
	if err != nil {
		return nil, err
	}
	return content, nil
}
