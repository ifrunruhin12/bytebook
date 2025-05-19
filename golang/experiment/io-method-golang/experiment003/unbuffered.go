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
