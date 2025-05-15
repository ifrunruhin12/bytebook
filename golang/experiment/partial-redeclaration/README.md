# Partial Declaration

### Here's an example

```go
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
```
so here, a got shadowed. In GO, it's not as variable shadowing!

But look at this one!

### Example 2
```go
package main

import "fmt"

func getnum() (int, int) {
    return 10, 11
}

func main() {
    a := 7 //Declaring a
    fmt.Println(a)
    a = 6 //Reassigning a, so the value of a is 6 now
    b := 8 //declaring a variable 'b'
    c, b := getnum()
    fmt.Println(b)
    fmt.Println(c)
}
```
so here in `c, b := getnum()`, do you think that b got shadowed here? nope, variable can't be shadowed in the same local scope.
So what happend? this is called partial declaration. Cause, a new variable c git declared but b actually got reassigned. 
Simple as that. 
