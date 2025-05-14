package config

import (
	"log"
	"os"
)

var (
	Port string
	Database string
)

func init() {
	Port = os.Getenv("APP_PORT")
	if Port == "" {
		Port = "8080"
	}

	Database = os.Getenv("DB_CONN")
	if Database == "" {
		log.Fatal("DB_CONN not set in environment variables")
	}
}
