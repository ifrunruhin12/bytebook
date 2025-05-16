# Blank Identifier aka `_`

## What is it and What does it do? 

It is mostly used for ignoring a return value from a function (for whatever reason)
It can be used in a for loop too when either value or index isn't necessary
Like you know Looping when you don't really need the loop variable.
For example:
```go
for _, val := range []string{"apple", "banana", "cherry"} {
    fmt.Println(val)
}
```
(Here, you don't care about the index.)

It can also be used for importing packages only for their side effects
Like saying "Hey Go compiler, just run it's init() code but don't give me any of it's exports."


## Some more usecase of blank identifier
1. Ignoring errors on purpose (People do this all the time)
2. Force the compiler to chill by making the unused imports and variables `_`
3. Ignoring unused loop vars
4. Only care about some return, like suppose, I have a function where it returns 3 integer value but I need only one for some operation.
    so, I will just use the one in that case. 
    ```go
    _, _, c := getThreeValues()
    ```
5. Declaring and keeping it for later uses
```go
result := doSomething()
_ = result
//TODO: Use result later
```
6. Blank Receiver Method (Super advance stuff) 

Will study about this one furthur
one example:
```go
func (_ MyStruct) DoSomething() {
    fmt.Println("I don't need the object itself.")
}
```
Okay so now let's do some experiment

## Experiment with blank identifier

Sometimes people can abuse it and it causes hilarious bug

1. Loop variable leaks beacuse of `_` abuse
2. Blank import to secretly bring hell
3. Blank reciever methods causing existential crisis

### Experiment 02

This is the folder structure:

```bash
experiment002
---aurora
------hell.go
---go.mod
---main.go
```
This is the main.go

```go
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
```

and this hell.go inside the aurora package
```go
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
```
