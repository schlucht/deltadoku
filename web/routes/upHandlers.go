package routes

import (
	"fmt"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

const UPName = "/api/up"
const UPFile = "/api/up/:files"

func GetUP(path string) HttpHandler {
	return func(writer http.ResponseWriter, request *http.Request, _ httprouter.Params) {
		enableCors(&writer, "text/plain;charset=utf-8")
		writer.WriteHeader(http.StatusOK)
		writer.Write([]byte(path + "\n"))
	}
}

func PostUP() HttpHandler {
	return func(writer http.ResponseWriter, request *http.Request, ps httprouter.Params) {
		fmt.Fprintf(writer, "Hello, %s!\n", ps.ByName("name"))
	}
}
