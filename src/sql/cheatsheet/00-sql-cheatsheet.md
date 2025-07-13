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


## 📝 UPDATE & DELETE in SQL (MySQL)

### 🔄 `UPDATE` – Modify Existing Records

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

#### ✅ Example:

```sql
-- Update a student's name where ID is 1
UPDATE students
SET name = 'Tanvir Ahmed'
WHERE id = 1;
```

> ⚠️ Always use `WHERE` with `UPDATE` to avoid updating all rows!

---

### ❌ `DELETE` – Remove Records from a Table

```sql
DELETE FROM table_name
WHERE condition;
```

#### ✅ Example:

```sql
-- Delete a student where ID is 3
DELETE FROM students
WHERE id = 3;
```

> ⚠️ `DELETE` without a `WHERE` clause removes all rows! Use carefully.

---

### 🧪 Pro Tips

- 🔒 Always `SELECT` the rows first before doing an `UPDATE` or `DELETE`:
  ```sql
  SELECT * FROM students WHERE id = 1;
  ```
- 🧯 Use transactions if you're unsure:
  ```sql
  START TRANSACTION;
  UPDATE students SET name = 'Test' WHERE id = 1;
  ROLLBACK; -- or COMMIT;
  ```

### 🔍 Basic Queries
- Retrieve all columns: `SELECT * FROM table_name;`
- Retrieve specific columns: `SELECT name, age FROM users;`
- Filtering: `SELECT * FROM users WHERE age > 18;`
- Sorting: `SELECT * FROM users ORDER BY name ASC;`
- Limiting: `SELECT * FROM users LIMIT 5;`

### 🧱 Creating a Simple Schema
```sql
CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    age INT,
    email VARCHAR(100) UNIQUE
);
```

### 🧮 Functions & Aggregates
- `COUNT(*)` – total rows
- `AVG(column)` – average
- `SUM(column)` – total sum
- `MAX(column)` / `MIN(column)` – max/min values
- `NOW()` – current datetime
```sql
SELECT COUNT(*) FROM users;
SELECT AVG(age) FROM students;
```

### 🔗 JOINS
- **INNER JOIN**: Only matching rows
```sql
SELECT * FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;
```
- **LEFT JOIN**: All from left + matched from right
- **RIGHT JOIN**: All from right + matched from left

### 🥚 Nested Queries
```sql
SELECT name FROM students
WHERE id IN (
    SELECT student_id FROM enrollments WHERE course_id = 1
);
```

### 🧬 UNION
- Combine result sets (must have same number of columns)
```sql
SELECT name FROM teachers
UNION
SELECT name FROM students;
```

### 🌟 Wildcards
- `%` = any number of characters
- `_` = a single character
```sql
SELECT * FROM users WHERE name LIKE 'A%';
SELECT * FROM products WHERE code LIKE '_23%';
```

### 🔐 ON DELETE SET NULL / CASCADE
```sql
CREATE TABLE orders (
    id INT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE SET NULL
);

-- or
ON DELETE CASCADE
-- deletes all related orders when user is deleted
```