package routes

import (
	"net/http"

	"github.com/julienschmidt/httprouter"
)

const UPName = "/api/up"

func GetUP(path string) HttpHandler {
	return func(writer http.ResponseWriter, request *http.Request, _ httprouter.Params) {
		enableCors(&writer, "text/plain;charset=utf-8")
		writer.WriteHeader(http.StatusOK)
		writer.Write([]byte(path + "\n"))
	}
}
