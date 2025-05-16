# Init function Use-case 1

## Setting Up Global Configuration (like reading from `.env`)

Let's say I have a Go web app, and you want to load environment variables once, automatically. 
Before actual logic starts running.

```go
package config

import (
    "log"
    "os"
)

var (
    Port     string
    Database string
)

func init() {
    Port = os.Getenv("APP_PORT")
    if Port == "" {
        Port = "8080" // default fallback
    }

    Database = os.Getenv("DB_CONN")
    if Database == "" {
        log.Fatal("DB_CONN not set in environment variables")
    }
}
```
Now in `main.go`
```go
package main

import (
    "fmt"
    "yourapp/config"
)

func main() {
    fmt.Println("App will run on port:", config.Port)
    fmt.Println("Connecting to database:", config.Database)
}
```
But of course I don't have a web app so when I run it in my terminal, it says
```shell
:!go run main.go                                                  
2025/05/14 14:04:00 DB_CONN not set in environment variables      
exit status 1                                                     
                                                                  
shell returned 1                                                  
                                                                  
Press ENTER or type command to continue 
```
## 🧠 Why use init() here?

- It runs automatically when the package is imported.
- You don’t call it yourself—it’s great for setting up global stuff once.
- Keeps your main() clean and focused on actual execution flow.
