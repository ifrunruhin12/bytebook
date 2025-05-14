package main

import (
	"fmt"
	"myapp/config"
)

func main() {
	fmt.Println("App will run on port:", config.Port)
	fmt.Println("Connecting to database:", config.Database)
}
