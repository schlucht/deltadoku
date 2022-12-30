package helpers

import (
	"log"
	"os/exec"
)

func NewUUid() string {
	newId, err := exec.Command("uuidgen").Output()
	if err != nil {
		log.Fatal(err)
	}
	return string(newId)
}

