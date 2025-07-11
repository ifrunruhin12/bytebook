-- Find all employees
SELECT * FROM employee;

-- Find all clients
SELECT * FROM client;

-- Find all employees ordered by salary
SELECT * FROM employee
ORDER BY salary DESC;

-- Find all employees order by sex than name
SELECT * FROM employee
ORDER BY sex, first_name, last_name;

-- Find the first 5 employees in the table
SELECT * FROM employee
LIMIT 5;

-- Find first name and last name of all employees
SELECT first_name, last_name
FROM employee;

-- Find the forename and surname of all employees
SELECT first_name AS forename, last_name AS surname
FROM employee;

-- Find out all the different genders
SELECT DISTINCT sex
FROM employee;
