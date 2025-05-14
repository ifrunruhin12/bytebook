package main

import (
	"fmt"
)

//future quiz
func arrquiz() bool{
  var arr2 [4]int
  arr2_cpy := arr2
  arr2_cpy[0] = 25
  return arr2_cpy[0] == arr2[0]
}

//future quiz
/*
func slcquiz() bool{
	var slc []int
	slc_cpy := slc
	slc_cpy[0] = 1
	return slc_cpy[0] == slc[0]
}
*/

func slcquiz() bool{
	slc := make([]int, 4)
	slc_cpy := slc
	slc_cpy[0] = 1
	return slc_cpy[0] == slc[0]
}

func main() {
	s := `I am "Ruhin" and I like Go` //Different way to write a string, handy if I wanna give a double quote inside
	r := 'A'
	f := 3.14159
	a := 3e10
	c := 3 + 4i
	fmt.Printf("%T\n", c)
	fmt.Println(s, r, f, a)

	//var u uint = 7
	//fmt.Printf("%T\n", u)
	var pi float32 = 22. / 7
	fmt.Println(pi)

	n := byte(' ') //byte conversion. Same as python ord() function
	fmt.Println(n)

	//alien array
	arr1 := [...]int{3, 1, 5, 10, 100} //This isn't a slice, it's an array initialized with a fix size of five
	//let's check the type to make sure
	fmt.Printf("%T\n", arr1)
	fmt.Println(arr1)

	fmt.Println(arrquiz())
	//fmt.Println(slcquiz())
	fmt.Println(slcquiz())

	//... is known as trailing ellipsis
}
