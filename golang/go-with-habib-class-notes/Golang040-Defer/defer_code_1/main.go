//Defer you don't understand

package main

import "fmt"

func calculate() (result int) {
	result = 0
	fmt.Println("first", result)

	show := func() {
		result = result + 10
		fmt.Println("defer", result)
	}

	defer show()

	result = 5
	fmt.Println("second", result)
	return
}

func calc() int {
	result := 0
	fmt.Println("first", result)

	show := func() {
		result = result + 10
		fmt.Println("defer", result)
	}

	defer show()

	result = 5
	fmt.Println("second", result)
	return result
}

func main() {
	a := calculate()
	fmt.Println(a)

	b := calc()
	fmt.Println(b)
}
