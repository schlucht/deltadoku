package fhx

import (
	"fmt"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"github.com/schlucht/deltadoku/web/cors"
)

func SetupRouter(router *httprouter.Router) {
	router.POST("/api/fhx/:fhxText", cors.Cors(postReadFhx))
}

func postReadFhx(w http.ResponseWriter, r *http.Request, fhx httprouter.Params) {

	data := fhx.ByName("fhxText")

	fmt.Printf("%v\n", data)

	// w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "text/plain")
	w.WriteHeader(http.StatusAccepted)
	w.Write([]byte(data))

}
