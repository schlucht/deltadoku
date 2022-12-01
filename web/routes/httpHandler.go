package routes

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
)

type HttpHandler = func(writer http.ResponseWriter, request *http.Request, _ httprouter.Params)

func enableCors(w *http.ResponseWriter, contentType string) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Authorization")
	(*w).Header().Set("Content-Type", contentType)

}
