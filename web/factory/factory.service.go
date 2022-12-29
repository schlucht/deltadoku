package factory

import (
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/julienschmidt/httprouter"
	"github.com/schlucht/deltadoku/web/cors"
)

const path = "./api/data/factories.json"

func SetupRouter(router *httprouter.Router) {
	router.GET("/api/factory", cors.Cors(getFactory))
}

func getFactory(w http.ResponseWriter, r *http.Request, _ httprouter.Params) {
	data, err := ioutil.ReadFile(path)
	if err != nil {
		fmt.Print(err)
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(data))
}
