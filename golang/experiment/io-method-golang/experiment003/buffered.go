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
		_ = n
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
