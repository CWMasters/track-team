INSERT INTO department (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');
    
INSERT INTO roles (title, salary, department)
VALUES
    ('Salesperson', 80000, 'Sales'),
    ('Lead Engineer', 150000, 'Engineering'),
    ('Software Engineer', 120000, 'Engineering'),
    ('Account Manager', 160000, 'Finance'),
    ('Accountant', 125000, 'Finance'),
    ('Legal Team Lead', 250000, 'Legal'),
    ('Lawyer', 190000, 'Legal');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Mike', 'Chan', 2,),
    ('Ashley', 'Rodriguez', 3),
    ('Kevin', 'Tupik', 4, 3),
    ('Kunal', 'Singh', 5),
    ('Malia', 'Brown', 6, 5),
    ('Sarah', 'Lourd', 7),
    ('Tom', 'Allen', 8, 7);