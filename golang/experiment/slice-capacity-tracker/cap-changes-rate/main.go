package main

import "fmt"

func main() {
	s := make([]int, 0, 1)
	lastCap := cap(s)

	fmt.Printf("Index\tCap\tPercentage of how it grows\n")
	for i := 0; i < 3000; i++ {
		s = append(s, i)

		if cap(s) != lastCap {
			fmt.Printf("%d\t%d\t(+%.2f%%)\n", i, cap(s), float64(cap(s)-lastCap)/float64(lastCap)*100)
			lastCap = cap(s)
		}
	}
}

