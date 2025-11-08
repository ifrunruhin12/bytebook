# Chapter 3 — Common Programming Concepts

Fundamental Rust concepts: variables, data types, functions, and control flow.

---

## Variables and Mutability

```rust
let x = 5;           // immutable
let mut y = 10;      // mutable
y = 15;              // OK

const MAX_POINTS: u32 = 100_000;  // constant (always immutable)
```

**Shadowing:**
```rust
let x = 5;
let x = x + 1;       // shadows previous x
let x = x * 2;       // shadows again
```

Shadowing lets you reuse names and change types:
```rust
let spaces = "   ";
let spaces = spaces.len();  // different type, same name
```

---

## Data Types

### Scalar Types

**Integers:**
```rust
let a: i32 = -42;    // signed 32-bit
let b: u64 = 100;    // unsigned 64-bit
```

Types: `i8`, `i16`, `i32`, `i64`, `i128`, `isize` (signed)  
Types: `u8`, `u16`, `u32`, `u64`, `u128`, `usize` (unsigned)

**Floats:**
```rust
let x = 2.0;         // f64 (default)
let y: f32 = 3.0;    // f32
```

**Booleans:**
```rust
let t = true;
let f: bool = false;
```

**Characters:**
```rust
let c = 'z';
let emoji = '😻';    // Unicode scalar value
```

### Compound Types

**Tuples:**
```rust
let tup: (i32, f64, u8) = (500, 6.4, 1);
let (x, y, z) = tup;           // destructuring
let five_hundred = tup.0;      // index access
```

**Arrays:**
```rust
let a = [1, 2, 3, 4, 5];
let months = ["Jan", "Feb", "Mar"];
let a: [i32; 5] = [1, 2, 3, 4, 5];  // type annotation
let a = [3; 5];                      // [3, 3, 3, 3, 3]

let first = a[0];
```

---

## Functions

```rust
fn main() {
    another_function(5, 'h');
}

fn another_function(x: i32, unit_label: char) {
    println!("Value: {x}{unit_label}");
}
```

**Return values:**
```rust
fn five() -> i32 {
    5  // no semicolon = expression (returns value)
}

fn plus_one(x: i32) -> i32 {
    x + 1  // expression
}
```

**Statements vs Expressions:**
- Statements don't return values: `let y = 6;`
- Expressions return values: `5 + 6`, `{ let x = 3; x + 1 }`

```rust
let y = {
    let x = 3;
    x + 1  // no semicolon = expression
};  // y = 4
```

---

## Control Flow

### if/else

```rust
let number = 6;

if number % 4 == 0 {
    println!("divisible by 4");
} else if number % 3 == 0 {
    println!("divisible by 3");
} else {
    println!("not divisible by 4 or 3");
}
```

**if in let:**
```rust
let condition = true;
let number = if condition { 5 } else { 6 };
```

### Loops

**loop (infinite):**
```rust
loop {
    println!("again!");
    break;  // exit loop
}
```

**Return from loop:**
```rust
let result = loop {
    counter += 1;
    if counter == 10 {
        break counter * 2;
    }
};
```

**while:**
```rust
let mut number = 3;
while number != 0 {
    println!("{number}!");
    number -= 1;
}
```

**for:**
```rust
let a = [10, 20, 30, 40, 50];
for element in a {
    println!("{element}");
}

for number in (1..4).rev() {  // 3, 2, 1
    println!("{number}!");
}
```

---

## Quick Reference

- Variables immutable by default, use `mut` for mutability
- Constants use `const` and must have type annotation
- Shadowing allows reusing variable names
- Rust is statically typed (compiler infers types)
- Tuples have fixed size, mixed types
- Arrays have fixed size, same type
- Functions must declare parameter types
- Last expression in function is return value (no semicolon)
- `if` is an expression (can return values)
- `for` loops are safest for iteration
