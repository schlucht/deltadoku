package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
)

// config is as type for the configuration parameters
type config struct {
	port int
}

// appliction is the type for all data we want to share with the
// various parts of our applictaion. We will share this information in most
// cases by using this type as the reciver for funcitons.
type application struct {
	config   config
	infoLog  *log.Logger
	errorLog *log.Logger
}

func main() {
	var cfg config
	cfg.port = 1234
	infoLog := log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime)
	errorLog := log.New(os.Stdout, "INFO\t", log.Ldate|log.Ltime|log.Lshortfile)

	app := &application{
		config:   cfg,
		infoLog:  infoLog,
		errorLog: errorLog,
	}
	err := app.serve()
	if err != nil {
		log.Fatalln(err)
	}
}

// serve starts the web server and return an error when not work
func (app *application) serve() error {
	app.infoLog.Println("Api listing on Port", app.config.port)
	srv := &http.Server{
		Addr:    fmt.Sprintf(":%d", app.config.port),
		Handler: app.routes(),
	}
	return srv.ListenAndServe()
}
