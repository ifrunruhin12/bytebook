package main

import (
	"fmt"
	"math/rand"
	"time"
)

func pookie() {
	rand.Seed(time.Now().UnixNano())
	
	t := 100000
	fmt.Println(t)
	
	for i := 0; i < t; i++ {
		n := 10 // fixed small size per test case (you can increase if you want)
		fmt.Println(n)
		for j := 0; j < n; j++ {
			// random number between 1 and 100000
			fmt.Printf("%d ", rand.Intn(100000)+1)
		}
		fmt.Println()
	}
}
