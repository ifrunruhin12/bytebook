package main

import "fmt"

func slice_cap(n int) int {
	s := make([]int, n)
	s = append(s, 1)
	return cap(s)
}

func main() {
	fmt.Println("This is how the capacity of a slice increases when you try to add a new element to slice with the same length and capacity")
	
	fmt.Printf("Cap before\tCap after adding an element\tPercentage of growth\n")
	for i:=1;i<=100;i++{
		res := slice_cap(i)
		fmt.Printf("%d\t%d\t(+%.2f%%)\n", i, res, float64(res-i)/float64(i)*100)
	}
}

