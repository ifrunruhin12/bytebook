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
