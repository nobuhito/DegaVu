package main

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"strings"

	"github.com/gorilla/mux"
)

func init() {
	r := mux.NewRouter()
	r.HandleFunc("/apps/", getVueApps)
	http.Handle("/", r)
}

func getVueApps(w http.ResponseWriter, r *http.Request) {

	files, err := ioutil.ReadDir("app")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	filenames := []string{}
	for _, file := range files {
		if file.IsDir() || file.Name() == "app.vue" {
			continue
		}
		filenames = append(filenames, strings.Replace(file.Name(), ".vue", "", 1))
	}
	filenames = append(filenames, "app")

	jsn, err := json.Marshal(filenames)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(jsn)
}
