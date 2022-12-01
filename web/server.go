package web

import (
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"github.com/schlucht/deltadoku/web/routes"
)

const PORT = ":8080"

func LoadServer() {
	router := httprouter.New()

	router.GET(routes.RootName, routes.GetRoot("./api/data/units.json"))
	router.GET(routes.UPName, routes.GetUP("units.json"))

	server := http.Server{Addr: PORT, Handler: router}
	err := server.ListenAndServe()
	log.Fatal(err)
}
