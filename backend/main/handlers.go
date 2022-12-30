package main

import (
	"net/http"
)

func (app *application) Login(w http.ResponseWriter, r *http.Request) {
	type credentials struct {
		UserName string `json:"email"`
		Password string `json:"password"`
	}
	var creds credentials

	err := app.readJSON(w, r, &creds)
	if err != nil {
		app.errorLog.Println(err)
		app.errorJSON(w, err)
	}

	app.infoLog.Println(creds.UserName, creds.Password)

	err = app.acceptJSON(w, "Signed in")
	if err != nil {
		app.errorLog.Println(err)
	}
}
