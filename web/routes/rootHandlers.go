package routes

import (
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

const RootName = "/api"

func GetRoot(path string) HttpHandler {

	return func(writer http.ResponseWriter, request *http.Request, _ httprouter.Params) {
		data, err := ioutil.ReadFile(path)
		if err != nil {
			fmt.Fprint(writer, err)
		}

		enableCors(&writer, "application/json")

		writer.WriteHeader(http.StatusOK)

		writer.Write([]byte(data))
	}
}
