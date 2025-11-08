# Chapter 1 — Getting Started

Quick notes on setting up Rust and running your first programs.

---

## Installation

Install Rust using `rustup` (the official installer):

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Check installation:
```bash
rustc --version
cargo --version
```

---

## Hello World (without Cargo)

Basic Rust program structure:

```rust
fn main() {
    println!("I am fever coding");
}
```

Compile and run:
```bash
rustc main.rs
./main
```

**Key points:**
- `fn main()` is the entry point
- `println!` is a macro (note the `!`)
- Rust uses semicolons to end statements

---

## Hello World with Cargo

Cargo is Rust's build system and package manager. Much better than manual compilation.

Create new project:
```bash
cargo new hello_cargo
cd hello_cargo
```

This generates:
```
hello_cargo/
├── Cargo.toml    # Project metadata and dependencies
└── src/
    └── main.rs   # Your code
```

**Cargo.toml** example:
```toml
[package]
name = "hello_cargo"
version = "0.1.0"
edition = "2024"

[dependencies]
```

Build and run:
```bash
cargo build      # Compiles to target/debug/
cargo run        # Builds + runs in one command
cargo check      # Fast compile check without executable
```

---

## Key Takeaways

- **rustc**: The Rust compiler (use directly for single files)
- **cargo new**: Creates new project with proper structure
- **cargo build**: Compiles your project
- **cargo run**: Build + execute in one step
- **cargo check**: Quick syntax/type checking without full compilation

Use Cargo for everything beyond simple one-file experiments.
