# 🧠 SQL Cheatsheet (In Progress...)

### 📌 What is a Database?
- A **database** is a collection of related information or data that can be stored, managed, and retrieved.

### 📌 SQL vs NoSQL
- **SQL**: Structured Query Language used to manage **Relational** Databases (RDBMS).
- **NoSQL**: Used for **Non-Relational** Databases (NRDBMS) like MongoDB, Redis, etc.

### 📌 Arch Linux Tip
- In Arch, **MariaDB** is a drop-in replacement for MySQL.

---

## 🏗 Table Creation & Management

### ✅ CREATE TABLE
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
```

### ✅ DESCRIBE
```sql
DESCRIBE users;
```

### ✅ ALTER TABLE

- Add column

```sql
ALTER TABLE users ADD age INT;
```

- Modify column

```sql
ALTER TABLE users MODIFY age DECIMAL(5,2);
```

- Drop column

```sql
ALTER TABLE users DROP COLUMN age;
```

### ✅ DROP TABLE

```sql
DROP TABLE users;
```

## 🔑 Keys in SQL

### 🔹 Primary Key

A column (or set of columns) that **uniquely identifies each row** in a table.

- Must be unique
- Cannot be NULL

```sql
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);
```

### 🔹 Foreign Key

A column that **references the primary key of another table** to establish a relationship between them.

- Maintains **referential integrity**
- Can be NULL (if optional relationship)

```sql
CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

### 🔹 Surrogate Key

An **artificial key** used as a unique identifier (usually `AUTO_INCREMENT` or `UUID`)

- Has no business meaning
- Used instead of natural keys to avoid complications

```sql
CREATE TABLE products (
  product_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);
```

### 🔹 Composite Key

A **primary key made of multiple columns**. Used when a single column can’t uniquely identify a row.

```sql
CREATE TABLE enrollment (
  student_id INT,
  course_id INT,
  PRIMARY KEY (student_id, course_id)
);
```

### 🔹 Candidate Key

Any column (or set of columns) that **could be a primary key** (i.e., unique and non-null).

- One becomes the primary key, others are alternate keys.


### Alternate Key

A **candidate key** that was not chosen as the primary key but can still uniquely identify rows.


## 📋 Data Types

| Type        | Description                         |
| ----------- | ----------------------------------- |
| `INT`       | Integer values                      |
| `DECIMAL`   | Fixed-point decimal (money, etc.)   |
| `VARCHAR`   | Variable-length text                |
| `BLOB`      | Binary large object (images, files) |
| `DATE`      | Stores year-month-day               |
| `TIMESTAMP` | Stores date & time                  |


## 🔍 Querying & Data Insertion

### ✅ SELECT
```sql
SELECT * FROM users;
```

### ✅ INSERT
```sql
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
```

## 🔒 Constraints

| Constraint       | Use Case                               |
| ---------------- | -------------------------------------- |
| `NOT NULL`       | Prevents null entries in a column      |
| `UNIQUE`         | Ensures unique value in a column       |
| `DEFAULT`        | Sets default value if none is provided |
| `AUTO_INCREMENT` | Automatically increments numeric value |

