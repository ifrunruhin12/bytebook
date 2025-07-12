-- Find the list of employee and branch name

SELECT first_name AS names_info
FROM employee
UNION
SELECT branch_name
FROM  branch;

-- Find a list of all clients and branch suppliers name
SELECT client_name, client.branch_id
FROM client
UNION
SELECT supplier_name, branch_supplier.branch_id
FROM branch_supplier;

-- Find a list of all money spent or earned by the company
SELECT salary
FROM employee
UNION
SELECT total_sales
FROM works_with;
