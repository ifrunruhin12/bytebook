package main

import (
	"fmt"
	"time"
)

func processByValue(data []int) {
	//pretend we are doinf stuff
	for i := range data {
		data[i] += 1
	}
}

func processByReference(data *[]int) {
	for i := range *data {
		(*data)[i] += 1
	}
}

func main() {
	size := 10_000_0000
	data := make([]int, size)

	//Process by Value
	start := time.Now()
	processByValue(data)
	duration := time.Since(start)
	fmt.Println("Time taken by value passing", duration)

	//Reset data
	for i := range data {
		data[i] = 0
	}

	//Process by reference
	start2 := time.Now()
	processByReference(&data)
	duration = time.Since(start2)
	fmt.Println("Time taken by reference:", duration)
}

