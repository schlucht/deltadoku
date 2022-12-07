package web

import (
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"github.com/schlucht/deltadoku/web/cors"
	"github.com/schlucht/deltadoku/web/factory"
	"github.com/schlucht/deltadoku/web/fhx"
)

const PORT = ":1234"

func LoadServer() {
	router := httprouter.New()
	cors.SetupCors(router)
	factory.SetupRouter(router)
	fhx.SetupRouter(router)

	log.Println("Server starting. Listening on " + PORT)

	// start server on https port
	server := http.Server{
		Addr:    PORT,
		Handler: router,
	}
	err := server.ListenAndServe()
	if err != nil {
		log.Fatal(err)
	}
}
