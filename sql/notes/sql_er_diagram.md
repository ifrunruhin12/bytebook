# 📘 Advanced SQL & Database Design Concepts

## 🧩 DELIMITER in SQL

By default, SQL statements end with a semicolon `;`. But when writing complex statements like **stored procedures** or **triggers**, we temporarily change the delimiter to avoid premature termination.

### 🔧 Usage:
```sql
DELIMITER $$

CREATE PROCEDURE example_proc()
BEGIN
    -- Multiple SQL statements
    SELECT "Hello";
    SELECT "World";
END $$

DELIMITER ;
```

> `DELIMITER $$` tells the MySQL interpreter to treat `$$` as the end of the command block instead of `;`. This is useful for functions, procedures, and triggers.

---

## ⚡ Triggers

Triggers are special stored procedures that **automatically run** in response to specific events on a table.

### 🧠 Types of Triggers:
- `BEFORE INSERT`
- `AFTER INSERT`
- `BEFORE UPDATE`
- `AFTER UPDATE`
- `BEFORE DELETE`
- `AFTER DELETE`

### ✅ Syntax:
```sql
DELIMITER $$

CREATE TRIGGER before_insert_user
BEFORE INSERT ON users
FOR EACH ROW
BEGIN
    SET NEW.created_at = NOW();
END $$

DELIMITER ;
```

> `NEW` and `OLD` are special keywords to access values during trigger execution.

---

## 🧬 ER Diagrams (Entity-Relationship Diagrams)

ER diagrams visually represent how **entities** (tables) relate to one another in a database.

### 🧱 Key Concepts:

#### 🧾 Entities:
- Represent **real-world objects** (e.g., Student, Course).
- Become tables in the database.

#### 🔑 Attributes:
- Properties of an entity (e.g., name, age, ID).
- Types:
  - **Simple Attribute**: Cannot be divided (e.g., age).
  - **Composite Attribute**: Can be divided (e.g., name → first, last).
  - **Derived Attribute**: Computed (e.g., age from DOB).
  - **Multivalued Attribute**: Has multiple values (e.g., phone numbers).

#### 🔗 Relationships:
- Connects two or more entities.
- Cardinality types:
  - One-to-One
  - One-to-Many
  - Many-to-Many

#### 🧩 Keys:
- **Primary Key**: Uniquely identifies a record.
- **Foreign Key**: Creates a link between tables.

#### 🔄 Participation:
- **Total Participation**: Every entity must participate in a relationship.
- **Partial Participation**: Optional participation.

---

## 🔖 Example ER Scenario:

**Entities**: Student, Course, Enrollment  
**Relations**:
- A `Student` can enroll in multiple `Courses`.
- A `Course` can have many `Students`.

This forms a **many-to-many** relationship, usually resolved with an intermediate **Enrollment** table.

---

> ER diagrams help with planning, normalization, and identifying relationships before creating the schema.

