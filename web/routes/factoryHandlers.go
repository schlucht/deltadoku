package routes

import (
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

const FactoryName = "/api/factory"

func GetFactory(path string) HttpHandler {

	return func(writer http.ResponseWriter, request *http.Request, _ httprouter.Params) {
		data, err := ioutil.ReadFile(path)
		if err != nil {
			fmt.Print(err)
		}
		fmt.Println("Daten neu gelesen")

		enableCors(&writer, "application/json")

		writer.WriteHeader(http.StatusOK)

		writer.Write([]byte(data))
	}
}
