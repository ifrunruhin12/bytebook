# Pointer experiment 001

## CODENAME: PTR_EXP001

So when I was studying pointer, I leanred that it just points at the memory address of that particulat data.
So, I thought okay so pointers in Go pass the stuff by their reference and can boost efficiency compared to `pass by value`
especially in terms of big data structures.

Now, Why not see it practically by coding? hehe :3 

### Let the experiment begin

1. I will create a big slice (pretend it's a chonk of data)
2. Will make two function 
    - One that takes it by value (makes a full copy)
    - One that takes it by reference (just a pointer)
3. Then we will find out time of both 

The code:
```go
package main

import (
	"fmt"
	"time"
)

// function that takes a slice by value (copy)
func processByValue(data []int) {
	// Just pretend we're doing some work
	for i := range data {
		data[i] += 1
	}
}

// function that takes a slice by reference (pointer)
func processByReference(data *[]int) {
	for i := range *data {
		(*data)[i] += 1
	}
}

func main() {
	// Create a big slice (like 10 million ints)
	size := 10_000_000
	data := make([]int, size)

	// Process by value
	start := time.Now()
	processByValue(data)
	duration := time.Since(start)
	fmt.Println("Time taken by value:", duration)

	// Reset data
	for i := range data {
		data[i] = 0
	}

	// Process by reference
	start = time.Now()
	processByReference(&data)
	duration = time.Since(start)
	fmt.Println("Time taken by reference:", duration)
}
```
## Result:

After running this 
it gives me output
```
:!go run main.go                                                  
Time taken by value passing 10.973601ms                           
Time taken by reference: 8.608471ms
```
Not that much difference. Only 2 secs

Then I ran it again but this time increase one 0 after 100000000
```shell
:!go run main.go                                                  
Time taken by value passing 105.022027ms                          
Time taken by reference: 74.597666ms
```
Now the difference is much more noticable
