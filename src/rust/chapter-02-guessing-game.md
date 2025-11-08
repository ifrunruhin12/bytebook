# Chapter 2 — Programming a Guessing Game

Hands-on tutorial building a number guessing game. Covers variables, input, external crates, and match expressions.

---

## The Complete Game

```rust
use std::io;
use std::cmp::Ordering;
use rand::Rng;

fn main() {
    println!("Guess the number!");

    let secret_number = rand::thread_rng().gen_range(1..=100);

    loop {
        println!("Please input your guess.");

        let mut guess = String::new();

        io::stdin()
            .read_line(&mut guess)
            .expect("Failed to read line");

        let guess: u32 = match guess.trim().parse() {
            Ok(num) => num,
            Err(_) => continue,
        };

        println!("You guessed: {}", guess);

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            }
        }
    }
}
```

---

## Key Concepts

### Variables and Mutability

```rust
let mut guess = String::new();  // mutable variable
let secret_number = 42;         // immutable by default
```

- Variables are immutable by default
- Use `mut` to make them mutable

### Using External Crates

Add to `Cargo.toml`:
```toml
[dependencies]
rand = "0.8.5"
```

Import in code:
```rust
use rand::Rng;
```

### Reading User Input

```rust
io::stdin()
    .read_line(&mut guess)
    .expect("Failed to read line");
```

- `&mut guess` passes a mutable reference
- `expect()` handles potential errors

### Type Conversion

```rust
let guess: u32 = guess.trim().parse()
    .expect("Please type a number!");
```

- `trim()` removes whitespace
- `parse()` converts string to number
- Type annotation `: u32` tells Rust what type to parse into

### Match Expressions

```rust
match guess.cmp(&secret_number) {
    Ordering::Less => println!("Too small!"),
    Ordering::Greater => println!("Too big!"),
    Ordering::Equal => {
        println!("You win!");
        break;
    }
}
```

- `match` is like switch but more powerful
- Must handle all possible cases
- Can execute multiple statements in arms using `{}`

### Error Handling with Match

```rust
let guess: u32 = match guess.trim().parse() {
    Ok(num) => num,
    Err(_) => continue,
};
```

- `parse()` returns `Result<T, E>` (Ok or Err)
- Match on the result to handle both cases
- `continue` skips to next loop iteration on error

---

## Takeaways

- Rust has no built-in randomness (use `rand` crate)
- `loop` creates infinite loops (use `break` to exit)
- References (`&`) let you access data without taking ownership
- `Result` type forces you to handle errors explicitly
- Match expressions are exhaustive (must cover all cases)
