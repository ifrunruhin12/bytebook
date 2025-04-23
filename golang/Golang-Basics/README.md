# Golang Basics 🚀

Welcome to the Go world! This doc will help you get started with installing Go and understanding the basics of the language's structure.

---

## 🔧 Installing Go

### 🐗 Linux (Debian/Ubuntu)

```bash
sudo apt update
sudo apt install golang-go
```

### 🧱 Arch-based Linux (like Manjaro, EndeavourOS, etc.)

```bash
sudo pacman -S go
```

### 🍏 macOS (using Homebrew)

```bash
brew install go
```

### 🪟 Windows

1. Download the installer from: [https://go.dev/dl](https://go.dev/dl)
2. Run the installer and follow the prompts.
3. Restart your terminal and verify with:

```bash
go version
```

---

## 🔁 Environment Setup

Make sure `GOPATH` and `GOROOT` are correctly configured.

For most setups, adding this to your `.bashrc` or `.zshrc` helps:

```bash
export PATH=$PATH:/usr/local/go/bin
```

For Arch-based systems installed via pacman, this is usually set correctly by default.

---

## 📁 Hello, World! Example

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello, Go!")
}
```

---

## 🔍 Explaining the Syntax

### `package main`
This tells Go that this is an executable program (not a shared library). When a Go program is compiled, it looks for `package main` and executes the `main()` function.

### `import`
Used to bring in standard or external packages. For example:

```go
import "fmt" // "fmt" provides formatted I/O
```

You can import multiple packages like this:

```go
import (
	"fmt"
	"math"
)
```

### `func main()`
This is the entry point of the program. Go will automatically look for the `main` function and execute it.

---

## 📌 Other Common Basics

### Variables

```go
var x int = 5
y := 10 // short declaration
```

### Constants

```go
const pi = 3.14
```

### Functions

```go
func add(a int, b int) int {
	return a + b
}
```

### If / Else

```go
if x > y {
	fmt.Println("x is bigger")
} else {
	fmt.Println("y is bigger")
}
```

### Switch

```go
switch x {
case 1:
	fmt.Println("One")
case 2:
	fmt.Println("Two")
default:
	fmt.Println("Other")
}
```

---

## ▶️ Running & Compiling Go Code

### Run a Go file directly:

```bash
go run filename.go
```

### Compile a Go file into a binary:

```bash
go build filename.go
```

This will create an executable binary with the same name as the file (without the `.go` extension).

---

## ✅ Verifying Installation

```bash
go version
```

To check your Go environment:

```bash
go env
```

---

## 🧠 Pro Tip

- Go files end with `.go`
- File name doesn’t need to match the function name
- There’s no semicolon required at the end of lines (unless you're writing multiple statements on one line)

---

Stay curious, and Go build cool stuff! 😎


