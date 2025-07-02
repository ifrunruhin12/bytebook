# SQL Jounrey from 0 to 1

So, I started learning sql and databases for my job prep. But in truth, job prep is just a trigger, I wanted to and would have learn databases anyway as I am working on projects where I have to collect and keep user data and keep them secure. So, far I have learned only the basics. I already knew about CRUD but here I will apply it and once I get confident in some of it I will make a detailed path of how everyone should proceed. 

## Section and project structure update

```yaml
bytebook/
├── golang/
│   └── ...
├── sql/
│   ├── 00-sql-cheatsheet.md
│   ├── 01-select-queries.sql
│   ├── 02-joins-explained.md
│   ├── 03-sqlbolt-solutions/
│   │   ├── sqlbolt-01-select.png
│   │   ├── sqlbolt-02-join.png
│   │   └── ...
│   ├── 04-leetcode-solutions/
│   │   ├── easy/
│   │   │   ├── 175-combine-two-tables.sql
│   │   │   └── ...
│   │   └── medium/
│   │       └── ...
│   ├── flashcards.md
│   └── README.md
```

### The thing that I think will be super helpful to learn 

1. I will be creating a cheatsheet kind of thing for quick overview of sql commands and stuff and call it the `SQL cheesheet`.

2. I will also be creating a flashcards collection(kind of like screenshot of the code but it can be done in .md file too)

3. Will solve and practice sql related problems from leetcode and sqlbolt and use screenshot strategy on that so that it looks cool. 

## 🖼 Screenshot Strategy
For each screenshot:

1. Take a **clear pic of the solution** from SQLBolt or LeetCode

2. Rename descriptively: `sqlbolt-03-select-where.png`

3. Add captions in a `.md` file:
```md
### SQLBolt #3 — SELECT WHERE
![SQLBolt-3](./sqlbolt-03-select-where.png)
Used WHERE to filter based on age. Simple but foundational.
```

## 🗃 Flashcards Strategy
Make a `flashcards.md` that uses a format compatible with Anki or can be quickly skimmed:
```md
### What does LEFT JOIN do?
Returns all records from the left table, and the matched records from the right table. NULLs if no match.

### Difference between WHERE and HAVING?
WHERE filters rows before grouping. HAVING filters groups after GROUP BY.

### Syntax for subquery?
SELECT * FROM (SELECT id FROM users WHERE active = 1) AS active_users;
```