# Chapter 4 — Understanding Ownership

Rust's most unique feature. Memory safety without garbage collection.

---

## The Three Rules of Ownership

1. Each value has an **owner**
2. There can only be **one owner** at a time
3. When the owner goes out of scope, the value is **dropped**

---

## Stack vs Heap

**Stack:** Fast, fixed-size data (integers, booleans, etc.)  
**Heap:** Slower, dynamic-size data (String, Vec, etc.)

```rust
let x = 5;              // stored on stack
let s = String::from("hello");  // stored on heap
```

---

## Move Semantics

```rust
let s1 = String::from("hello");
let s2 = s1;  // s1 is MOVED to s2

// println!("{s1}");  // ERROR! s1 no longer valid
println!("{s2}");     // OK
```

**Why?** Prevents double-free errors. Only `s2` owns the data now.

**Stack-only data copies:**
```rust
let x = 5;
let y = x;  // x is COPIED (not moved)

println!("{x}, {y}");  // Both valid!
```

---

## Clone (Deep Copy)

```rust
let s1 = String::from("hello");
let s2 = s1.clone();  // expensive deep copy

println!("{s1}, {s2}");  // Both valid
```

---

## Copy Trait

Types with `Copy` trait are copied instead of moved:
- All integers: `i32`, `u64`, etc.
- Booleans: `bool`
- Floats: `f64`, `f32`
- Characters: `char`
- Tuples (if all elements are `Copy`)

```rust
let x = 5;
let y = x;  // Copy happens automatically
```

---

## Ownership and Functions

```rust
fn main() {
    let s = String::from("hello");
    takes_ownership(s);  // s moved into function
    // println!("{s}");  // ERROR! s no longer valid

    let x = 5;
    makes_copy(x);  // x copied into function
    println!("{x}");  // OK! x still valid
}

fn takes_ownership(some_string: String) {
    println!("{some_string}");
}  // some_string dropped here

fn makes_copy(some_integer: i32) {
    println!("{some_integer}");
}
```

**Return values transfer ownership:**
```rust
fn gives_ownership() -> String {
    String::from("yours")  // returned value moves out
}

fn takes_and_gives_back(a_string: String) -> String {
    a_string  // returned back to caller
}
```

---

## References and Borrowing

References let you use a value without taking ownership.

```rust
fn main() {
    let s1 = String::from("hello");
    let len = calculate_length(&s1);  // borrow s1
    println!("'{s1}' has length {len}");  // s1 still valid!
}

fn calculate_length(s: &String) -> usize {
    s.len()
}  // s goes out of scope, but doesn't drop the data (not owner)
```

**Mutable references:**
```rust
fn main() {
    let mut s = String::from("hello");
    change(&mut s);
    println!("{s}");  // "hello, world"
}

fn change(some_string: &mut String) {
    some_string.push_str(", world");
}
```

### Reference Rules

1. You can have **either**:
   - One mutable reference, **OR**
   - Any number of immutable references
2. References must always be valid (no dangling references)

**This fails:**
```rust
let mut s = String::from("hello");
let r1 = &mut s;
let r2 = &mut s;  // ERROR! Can't have two mutable refs
```

**This works:**
```rust
let mut s = String::from("hello");
let r1 = &s;
let r2 = &s;  // OK! Multiple immutable refs allowed
println!("{r1}, {r2}");
```

**Scope matters:**
```rust
let mut s = String::from("hello");

let r1 = &s;
let r2 = &s;
println!("{r1}, {r2}");
// r1 and r2 no longer used after this

let r3 = &mut s;  // OK! No overlap with r1, r2
println!("{r3}");
```

---

## Slices

Slices reference a contiguous sequence without taking ownership.

**String slices:**
```rust
let s = String::from("hello world");

let hello = &s[0..5];   // "hello"
let world = &s[6..11];  // "world"

// Shorthand
let hello = &s[..5];    // from start
let world = &s[6..];    // to end
let whole = &s[..];     // entire string
```

**String literals are slices:**
```rust
let s = "Hello, world!";  // type: &str (immutable)
```

**Array slices:**
```rust
let a = [1, 2, 3, 4, 5];
let slice = &a[1..3];  // [2, 3]
```

**Practical example:**
```rust
fn first_word(s: &str) -> &str {
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }

    &s[..]
}

fn main() {
    let my_string = String::from("hello world");
    let word = first_word(&my_string);  // works with String
    
    let my_literal = "hello world";
    let word = first_word(my_literal);  // works with &str
}
```

---

## Common Ownership Errors

**Use after move:**
```rust
let s1 = String::from("hello");
let s2 = s1;
println!("{s1}");  // ERROR: value borrowed after move
```

**Dangling reference:**
```rust
fn dangle() -> &String {  // ERROR: returns reference to dropped value
    let s = String::from("hello");
    &s
}  // s dropped here, but we're returning a reference to it!
```

**Fix:** Return the String itself (transfer ownership):
```rust
fn no_dangle() -> String {
    let s = String::from("hello");
    s  // ownership moved out
}
```

---

## Key Takeaways

- Ownership prevents memory bugs at compile time
- Move semantics by default for heap data
- Use references (`&`) to borrow without taking ownership
- Mutable refs are exclusive, immutable refs can be shared
- Slices are references to part of a collection
- Compiler enforces all these rules - no runtime overhead!
