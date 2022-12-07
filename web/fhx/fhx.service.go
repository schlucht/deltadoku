package fhx

import (
	"fmt"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"github.com/schlucht/deltadoku/web/cors"
)

func SetupRouter(router *httprouter.Router) {
	router.GET("/api/fhx/:fhxText", cors.Cors(getReadFhx))
}

func getReadFhx(w http.ResponseWriter, r *http.Request, fhx httprouter.Params) {

	data := fhx.ByName("fhxText")
	fmt.Println(data)

	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "application/json")

	w.Write([]byte(data))

}
