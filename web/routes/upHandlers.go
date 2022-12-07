package routes

import (
	"fmt"
	"net/http"
	"strings"
	"time"

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
		f := strings.Split(ps.ByName("files"), "=")
		time.Sleep(2 * time.Second)
		fmt.Printf("%s\n", f[1])
		// fmt.Fprintf(writer, "Hello, %s!\n", f[1])
	}
}
