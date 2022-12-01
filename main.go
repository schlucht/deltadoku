package main

import (
	"fmt"

	"github.com/schlucht/deltadoku/web"
)

func main() {
	fmt.Println("Server läuft...")
	web.LoadServer()
}
