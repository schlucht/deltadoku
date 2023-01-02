package main

import (
	"fmt"
	"net/http"

	"github.com/schlucht/deltavdocku/models"
	_ "github.com/schlucht/deltavdocku/models"
)

func (app *application) GetFactories(w http.ResponseWriter, r *http.Request) {

	var factory = models.Factory{}
	data := factory.AllFactories()
	fmt.Println(data)
	err := app.acceptJSON(w, data)
	if err != nil {
		app.errorLog.Println(err)
	}
}
