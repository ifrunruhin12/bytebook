# 🧠 SQL Flashcards — CLI Edition
> Use these to review quickly in a terminal-like format. Keep adding as you level up!

---

```
🗂️  Question:
What is a database?

📦  Answer:
A collection of related information that can be stored, queried, and managed.
```

---

```
🗂️  Question:
What is SQL?

📦  Answer:
A language used to manage and query relational databases (RDBMS).
```

---

```
🗂️  Question:
What is NoSQL?

📦  Answer:
A category of non-relational databases used for unstructured or semi-structured data.
```

---

```
🗂️  Question:
What is the MySQL equivalent on Arch Linux?

📦  Answer:
MariaDB is a drop-in replacement for MySQL on Arch Linux.
```

---

```
🗂️  Question:
What is an RDBMS?

📦  Answer:
Relational Database Management System — stores data in tables with relationships.
```

---

```
🗂️  Question:
What is an NRDBMS?

📦  Answer:
Non-relational Database Management System — stores data as documents, key-values, or graphs.
```

---

```
🗂️  Question:
How do you create a new table?

📦  Answer:
Use the CREATE TABLE statement with column names, types, and constraints.
Example:
CREATE TABLE users (id INT, name VARCHAR(100));
```

---

```
🗂️  Question:
How do you see the structure of a table?

📦  Answer:
Use: DESCRIBE table_name;
```

---

```
🗂️  Question:
How do you add a column to an existing table?

📦  Answer:
ALTER TABLE table_name ADD column_name datatype;
```

---

```
🗂️  Question:
How do you modify a column's datatype?

📦  Answer:
ALTER TABLE table_name MODIFY column_name new_datatype;
```

---

```
🗂️  Question:
How do you delete a column from a table?

📦  Answer:
ALTER TABLE table_name DROP COLUMN column_name;
```

---

```
🗂️  Question:
How do you delete a table?

📦  Answer:
DROP TABLE table_name;
```

---

```
🗂️  Question:
How do you view all data from a table?

📦  Answer:
SELECT * FROM table_name;
```

---

```
🗂️  Question:
How do you insert data into a table?

📦  Answer:
INSERT INTO table_name (col1, col2) VALUES (val1, val2);
```

---

```
🗂️  Question:
What does NOT NULL do?

📦  Answer:
Ensures a column cannot have NULL values.
```

---

```
🗂️  Question:
What does UNIQUE do?

📦  Answer:
Ensures all values in a column are unique.
```

---

```
🗂️  Question:
What does DEFAULT do?

📦  Answer:
Sets a default value for a column if no value is provided on insert.
```

---

```
🗂️  Question:
What does AUTO_INCREMENT do?

📦  Answer:
Automatically increases the value of a numeric column (usually a primary key) on each new insert.
```

---

```
🗂️  Question:
What is a Primary Key?

📦  Answer:
A column (or combination) that uniquely identifies each row in a table. Cannot be NULL or duplicated.
```
---

```
🗂️  Question:
What is a Foreign Key?

📦  Answer:
A column that refers to the Primary Key in another table to maintain relational integrity.
```
---

```
🗂️  Question:
What is a Surrogate Key?

📦  Answer:
An artificially generated key (like AUTO_INCREMENT or UUID) used to uniquely identify a record without business meaning.
```
---

```
🗂️  Question:
What is a Composite Key?

📦  Answer:
A Primary Key made up of multiple columns together to uniquely identify a row.
```
---

```
🗂️  Question:
What is a Candidate Key?

📦  Answer:
A column (or group) that could serve as a Primary Key — it's unique and non-null.
```
---

```
🗂️  Question:
What is an Alternate Key?

📦  Answer:
A Candidate Key that was not chosen as the Primary Key but is still unique and can identify rows.
```
---

```
🗂️  Question:
What SQL statement is used to modify existing records in a table?

📦  Answer:
UPDATE
```

---

```
🗂️  Question:
What clause must you include with UPDATE to avoid changing all rows?

📦  Answer:
WHERE clause
```

---

```
🗂️  Question:
What happens if you run UPDATE students SET name = 'Tanvir'; without WHERE?

📦  Answer:
It updates the name field for all rows in the students table.
```

---

```
🗂️  Question:
What's the basic syntax of the UPDATE statement?

📦  Answer:
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

---

```
🗂️  Question:
How do you remove records from a table in SQL?

📦  Answer:
Using the DELETE statement
```

---

```
🗂️  Question:
Write a SQL query to delete a student whose id is 5.

📦  Answer:
DELETE FROM students
WHERE id = 5;
```

---

```
🗂️  Question:
What happens if you run DELETE FROM students; without a WHERE clause?

📦  Answer:
It deletes all rows from the students table.
```

---

```
🗂️  Question:
Which SQL keyword starts a transaction to safely test updates or deletes?

📦  Answer:
START TRANSACTION
```

---

```
🗂️  Question:
What SQL command undoes changes made during a transaction?

📦  Answer:
ROLLBACK
```

---

```
🗂️  Question:
What’s the safest practice before running UPDATE or DELETE?

📦  Answer:
Run a SELECT with the same WHERE clause to preview affected rows.
```

---

```
🗂️  Question:
What does the wildcard % do in SQL?

📦  Answer:
Matches zero or more characters in a LIKE pattern.
Example: 'A%' matches anything starting with A.
```

---

```
🗂️  Question:
What’s the purpose of UNION in SQL?

📦  Answer:
Combines result sets from two SELECT queries into one, removing duplicates.
```

---

```
🗂️  Question:
How does an INNER JOIN work?

📦  Answer:
Returns only the rows where there is a match in both joined tables.
```

---

```
🗂️  Question:
What’s the difference between LEFT JOIN and RIGHT JOIN?

📦  Answer:
LEFT JOIN returns all rows from the left table and matched rows from the right.
RIGHT JOIN does the opposite.
```

---

```
🗂️  Question:
What does ON DELETE SET NULL do?

📦  Answer:
When a referenced row is deleted, it sets the foreign key column to NULL.
```

---

```
🗂️  Question:
What does ON DELETE CASCADE do?

📦  Answer:
Automatically deletes rows in child table when the referenced row in parent table is deleted.
```

---

```
🗂️  Question:
What’s a nested query (subquery)?

📦  Answer:
A query within another query, often used to filter or compute dynamic conditions.
```

---

```
🗂️  Question:
What does COUNT(*) do in SQL?

📦  Answer:
Returns the total number of rows in a table.
```

---

```
🗂️  Question:
How do you sort query results?

📦  Answer:
Using ORDER BY clause: ORDER BY column ASC/DESC;
```

---

```
🗂️  Question:
How do you limit the number of rows in a result?

📦  Answer:
Using the LIMIT clause. Example: SELECT * FROM users LIMIT 10;
```

---



👾 Keep these in mind when designing tables or answering DBMS interview questions.