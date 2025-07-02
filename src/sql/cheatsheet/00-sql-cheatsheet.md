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

