# Input and Output Method in Golang

## Why it's necessary?
We often work with data no matter which sector we are working on Computer Science. Specially as a competitive programmer, you often have to work with different kind of input and output type.
Today, we will have a look into those.

## 🧠 TL;DR of I/O in Go:

Go’s standard input/output is **safe and readable**, but **slow** for competitive programming or heavy I/O use. Hence, people use **Fast I/O** with `bufio`

### 🔸 1. Standard Input/Output
Go’s basic I/O uses:

- `fmt.Scan`, `fmt.Scanf`, `fmt.Scanln`

- `fmt.Print`, `fmt.Printf`, `fmt.Println`

Example:
```go
var n int
fmt.Scan(&n)
fmt.Println(n)
```
**Pros**: Simple and easy.

**Cons**: Slow due to lots of syscalls and formatting.

### 🔸 2. Buffered I/O using `bufio`

`bufio.NewReader` and `bufio.NewWriter` buffer input/output, reducing syscall overhead = ⚡️faster I/O.

```go
reader := bufio.NewReader(os.Stdin)
writer := bufio.NewWriter(os.Stdout)
```

```go
package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	in := bufio.NewReader(os.Stdin)
	out := bufio.NewWriter(os.Stdout)
	defer out.Flush() // ensures everything is printed at the end

	line, _ := in.ReadString('\n')       // read a full line from stdin
	line = strings.TrimSpace(line)       // remove trailing newline/whitespace
	a, _ := strconv.Atoi(line)           // convert string to int
	fmt.Fprintln(out, a)                 // write to buffered output
}
```

`ReadString('\n')` reads until newline. `writer.Flush()` is needed to print output.

### 🔸 3. `os` Package
For even lower-level access:
- `os.Stdin.Read()`
- `os.Stdout.Write()`

Rarely used unless you’re doing file I/O or raw bytes

```go
file, _ := os.Create("output.txt")
fmt.Fprint(file, "This is how you write to a file, by the way")
file.Close()
```
Using `os.Create` and `os.Open` to write and read from file:

Let’s say you're writing some lines to a file and then reading them back.
#### Writing to a File (Buffered Output)
```go
package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	// Create file
	file, err := os.Create("example.txt")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	// Create a buffered writer
	writer := bufio.NewWriter(file)

	// Write some lines
	for i := 1; i <= 5; i++ {
		fmt.Fprintf(writer, "This is line %d\n", i)
	}

	// Flush everything to file
	writer.Flush()
}
```
This will create a file called `example.txt` with 5 lines. The data is stored in a buffer first and only written to disk when `Flush()` is called, which is more efficient.

#### Reading from the File (Buffered Input)
```go
package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	// Open file
	file, err := os.Open("example.txt")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	// Create a buffered reader
	reader := bufio.NewReader(file)

	for {
		line, err := reader.ReadString('\n')
		if err != nil {
			break // EOF reached
		}
		fmt.Print(line)
	}
}
```
### Real-World Analogy:
Think of buffered I/O like taking notes in a notepad during a lecture. You don’t run to the printer after every word. You fill up the page (buffer), then print (flush). That’s why it’s efficient.

## Now what exactly is buffered I/O and a buffer


### What is a buffer?
 **A buffer is a chunk of memory** — specifically, it's temporary storage used to hold data before it's read or written.

Think of it like:

> "I’ll store this data in RAM for now... and when I’ve got enough, I’ll send it all in one go."

#### Quick Visual:
```css
[User Input] ---> [ BUFFER (in memory) ] ---> [ Actual Program or File or OS ]
```
Or for output:
```css
[Program Output] ---> [ BUFFER (in memory) ] ---> [ Screen / File / OS ]
```
#### Real World Again:
Imagine a notepad (buffer) in a restaurant:

- You write down all orders first.

- Once the notepad is full, or you're ready, you go to the kitchen and shout them all out at once.

The notepad = **the buffer**

The kitchen = **the OS or final destination**

#### A buffer is memory, used to:

- 🛑 Reduce expensive operations (like I/O syscalls)

- 🚀 Boost performance by batching reads/writes

### Buffered vs Unbuffered I/O — The Core Idea
#### 🔸 Unbuffered I/O:
Every time you read or write, it IMMEDIATELY talks to the OS.

Like:
- "Yo OS, give me 1 byte"
- "Now give me another..."
- "Now print this one line..."

That’s slow, because system calls are expensive. Too many = 🐌

#### 🔸 Buffered I/O:
You don't ask the OS every single time.
Instead, you collect a bunch of input/output in memory (a buffer), and once it's full or you're done, then you send it all at once

💥 Think of it like:

- "Lemme fill this bucket with water (data)..."

- "Once it's full, I’ll throw it at the OS!"

#### 🧃 Real World Analogy 
Imagine you're working at a cafeteria:

**🍽 Unbuffered I/O:**
- A customer orders 1 french fry.

- You go to the kitchen, grab 1 fry, walk back, and give it.

- Then they want another... repeat.

- You're making 100 trips for 100 fries 😵

**🧃 Buffered I/O:**
- You wait until they ask for a full plate of fries (say 50).

- You go once, get a plate, deliver it in one trip.

- Boom. Less time, less effort. 💯

This is how buffering works.

#### Why use Fast I/O?
In CP or large datasets:

- `fmt.Scan()` can TLE.

- `bufio.Reader/Writer` is ~3x–10x faster.

- Helps when you're reading/writing millions of numbers or strings.

### Programming Example

🐢 Unbuffered Output:
```go
fmt.Println("Hello")  // Makes a syscall to write
fmt.Println("World")  // Another syscall
```
Every line = syscall = 🐌 slow when done a LOT.

⚡ Buffered Output:
```go
out := bufio.NewWriter(os.Stdout)
fmt.Fprintln(out, "Hello")  // Goes into memory
fmt.Fprintln(out, "World")  // Still in memory
out.Flush()                 // Sends both at once 🚀
```

### Few key notes:
- 🧠 Buffer = memory (slice of bytes), usually on the heap

- 📦 `bufio.Writer` lives in heap, accessed via variable out

- ⏱ Buffered output is delayed → flushed via Flush() (can be automatic with defer)

- ⚙️ Allocation happens at runtime, not during compilation

### Question that can be asked!
> "Isn't heap slower than stack? Then why is buffered I/O faster?"

#### Answer:
- ✅ Stack is faster than heap.
- ❌ But stack can't hold large/dynamic buffers.
- 🔥 Buffered I/O is fast not because of where the buffer is, but because it minimizes syscalls by batching output.
- 💡 One syscall is always better than many, even if the buffer lives on the heap.

### 🤖 Analogy:
- 🐢 Unbuffered I/O = 1 pigeon per letter = slow

- 🚀 Buffered I/O = write all letters, put them in a bag, and send 1 pigeon with the whole bag

**The cost isn't the writing... it's the pigeon trips (syscalls).**

## Experiment001

### BAD VERSION (missing output due to early return)
```go
package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	out := bufio.NewWriter(os.Stdout)

	fmt.Fprintln(out, "Starting program...")

	var condition = true
	if condition {
		fmt.Fprintln(out, "Early exit happened!")
		return // ⚠️ Exits before Flush()!
	}

	fmt.Fprintln(out, "Program finished normally.")
	out.Flush()
}
```
#### What happens?
- `"Starting program..."` and `"Early exit happened!"` get written to the buffer.

- But we never call `Flush()`, because return happens before it.

- So... you see nothing. Total ghosted output.

### GOOD VERSION using defer out.Flush()
```go
package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	out := bufio.NewWriter(os.Stdout)
	defer out.Flush() // 👈 now this always runs at the end, no matter where return happens

	fmt.Fprintln(out, "Starting program...")

	var condition = true
	if condition {
		fmt.Fprintln(out, "Early exit happened!")
		return // 🛡️ still prints everything because defer handles it
	}

	fmt.Fprintln(out, "Program finished normally.")
}
```
Now everything you printed gets flushed properly, even if your function returns early

### 🧠 TL;DR
- You must use defer out.Flush() when:

    - Your function has multiple return paths.

    - You want to avoid forgetting to flush manually.

- It's basically an "auto-save" for your output.

## Experiment002
```go
package main

import (
	"bufio"
	"fmt"
	"os"
	"time"
)

func main() {
	out := bufio.NewWriter(os.Stdout)

	fmt.Fprintln(out, "Starting tests...")
	out.Flush() // 👈 First flush so this shows immediately

	for i := 1; i <= 5; i++ {
		time.Sleep(500 * time.Millisecond) // simulate work
		fmt.Fprintf(out, "Testcase %d passed ✅\n", i)
		out.Flush() // 👈 Flush after every update to give real-time output
	}

	fmt.Fprintln(out, "All tests completed 🎉")
	out.Flush() // 👈 Final flush just in case
}
```
### 💡 Why multiple `Flush()`s?

Because if you don't flush after each message, everything gets buffered and shows up only at the end, defeating the point of real-time feedback.

### 🔥 Use case examples:
- Online judges showing output before TLE

- CLIs with progress logs

- Live coding tools or debuggers

- Streaming JSON or logs over network

## Experiment003

> The point of this experiment is to see how much time difference is there between buffered I/O and unbuffered I/O

### ✅ Buffered I/O Version (with timing)
```go
package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
	"time"
)

var (
	in  = bufio.NewReader(os.Stdin)
	out = bufio.NewWriter(os.Stdout)
)

func readLine() string {
	line, _ := in.ReadString('\n')
	return strings.TrimSpace(line)
}

func readInt() int {
	n, _ := strconv.Atoi(readLine())
	return n
}

func readInts() []int {
	line := readLine()
	parts := strings.Fields(line)
	nums := make([]int, len(parts))
	for i, s := range parts {
		nums[i], _ = strconv.Atoi(s)
	}
	return nums
}

func isPrime(n int) bool {
	if n < 2 {
		return false
	}
	for i := 2; i*i <= n; i++ {
		if n%i == 0 {
			return false
		}
	}
	return true
}

func main() {
	start := time.Now()
	defer out.Flush()

	t := readInt()
	for i := 0; i < t; i++ {
		n := readInt()
		arr := readInts()
		found := false
		for _, v := range arr {
			if isPrime(v) {
				found = true
				break
			}
		}
		fmt.Fprintln(out, found)
	}
	elapsed := time.Since(start)
	fmt.Fprintln(os.Stderr, "Buffered IO Time:", elapsed)
}
```
### 🐢 Unbuffered I/O Version (with timing)

```go
package main

import (
	"fmt"
	"os"
	"time"
)

func isPrime(n int) bool {
	if n < 2 {
		return false
	}
	for i := 2; i*i <= n; i++ {
		if n%i == 0 {
			return false
		}
	}
	return true
}

func main() {
	start := time.Now()

	var t int
	fmt.Scan(&t)

	for i := 0; i < t; i++ {
		var n int
		fmt.Scan(&n)
		found := false
		for j := 0; j < n; j++ {
			var x int
			fmt.Scan(&x)
			if isPrime(x) {
				found = true
			}
		}
		fmt.Println(found)
	}

	elapsed := time.Since(start)
	fmt.Fprintln(os.Stderr, "Unbuffered IO Time:", elapsed)
}
```
### How to Test:
Run both programs with the same input. Example input file (`input.txt`):
```txt
5
4
1 4 6 8
3
9 11 10
5
1 2 3 4 5
2
10 15
3
6 7 8
```
Then run:
```bash
go run buffered.go < input.txt
go run unbuffered.go < input.txt
```


## Now, fastIO template (with full breakdown)

```go
package main

import (
	"bufio"           // For fast buffered input/output
	"fmt"             // For formatted printing (we only use fmt for testing/debug)
	"os"              // To get access to stdin, stdout
	"strconv"         // To convert strings to ints
	"strings"         // To split strings into slices (fields)
)

//Globals

var (
	in  = bufio.NewReader(os.Stdin)   // Fast input reader
	out = bufio.NewWriter(os.Stdout)  // Fast output writer
)

/*
bufio.NewReader: Buffers stdin so you don’t block on every byte.

bufio.NewWriter: Buffers stdout, much faster. Needs out.Flush() at the end.
*/

func readLine() string {
	line, _ := in.ReadString('\n')               // Reads until newline
	return strings.TrimSpace(line)               // Removes \n and spaces
}

/*
Returns one full line as string.

TrimSpace avoids issues with trailing \n or spaces.
*/

func readInt() int {
	n, _ := strconv.Atoi(readLine())            // Converts line to int
	return n
}

/*
    Calls readLine() → "123"

    Converts to 123

    Ignores errors (_) — fine for CP, but not ideal in prod code.
*/
func readInts() []int {
	line := readLine()                           // Reads a line like: "1 2 3"
	parts := strings.Fields(line)                // Splits into ["1", "2", "3"]
	nums := make([]int, len(parts))
	for i, s := range parts {
		nums[i], _ = strconv.Atoi(s)             // Convert each to int
	}
	return nums
}
//Used for reading multiple ints in one line, space-separated.

func readStrings() []string {
	return strings.Fields(readLine())            // Like readInts, but keeps strings
}

/*
- Splits a line into words by space.

- Perfect for string array input.
*/

func main() {
    defer out.Flush() //Ensures everything buffered in out is printed at the end.


    //code goes here
}
```
