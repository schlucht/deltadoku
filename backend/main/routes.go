package main

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
)

func (app *application) routes() http.Handler {
	mux := chi.NewRouter()
	mux.Use(middleware.Recoverer)
	mux.Use(cors.Handler(cors.Options{
		// AllowedOrigins:   []string{"https://*", "http://*", "https://8080-schlucht-deltadoku-m1nniqkn8mj.ws-eu78.gitpod.io"},
		AllowedOrigins:   []string{"https://*", "http://*", "http://localhost:8080/"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: true,
		MaxAge:           300,
	}))

	mux.Get("/users/login/", app.Login)
	mux.Post("/users/login/", app.Login)
	mux.Get("/factory/allFactories", app.GetFactories)

	return mux
}
