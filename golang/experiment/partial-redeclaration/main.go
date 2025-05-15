package main

import "fmt"

func main(){
	a := 20
	fmt.Println(a) //20
	b, a := print1() //a was reassigned => and b was declared, this is partial declaration

	fmt.Println(a) // 5
	fmt.Println(b) //4
}

func print1()(int, int){
	return 4, 5
}

/*
package main

import "fmt"

func main() {
    a := 7
    fmt.Println(a) // 7
    {
        a := 6 //Here, a is shadowed
        fmt.Println(a) // 6
    }
    fmt.Println(a) // 7
}
*/
