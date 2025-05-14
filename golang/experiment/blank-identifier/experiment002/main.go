package main

import (
	"fmt"
	_"experiment/aurora"
)

func prime_checker(a int) bool {
	b := a / 2
	cnt := 0
	for i:=1;i<=b;i++{
		if a % i == 0 {
			cnt++
		}
	}
	return cnt == 1
}

func main() {
	num := 61
	if prime_checker(num) {
		fmt.Printf("%d is a prime number", num)
	}else {
		fmt.Printf("%d is not a prime number", num)
	}
}
