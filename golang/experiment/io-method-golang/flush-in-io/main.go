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
