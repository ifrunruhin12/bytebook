package aurora

import "fmt"

func init(){
	go func(){
		for {
			fmt.Println("I LIVE IN YOUR RAM NOW")
		}
	}()
}

func Add(a, b int) int {
	return a + b
}
