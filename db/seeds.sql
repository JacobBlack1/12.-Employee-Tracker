INSERT INTO department (name)
VALUES ("Marketing");

INSERT INTO department (name)
VALUES ("Human Resourses");

INSERT INTO department (name)
VALUES ("Operations");

INSERT INTO department (name)
VALUES ("Finance");

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Purchase");

INSERT INTO roles (title, salary, department_id)
VALUES ("Marketing Manager", 100000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Marketing Coordinator", 75000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Accountant", 80000, 4);

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Manager", 150000, 5);

INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Assistant", 100000, 5);

INSERT INTO roles (title, salary, department_id)
VALUES ("Purchasing Manager", 135000, 6);

INSERT INTO roles (title, salary, department_id)
VALUES ("Operations analyst", 75000, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ("Corporate Recruiter", 50000, 2);


INSERT INTO employee(first_name, last_name, roles_id)
VALUES ("John", "Howard", 1);

INSERT INTO employee(first_name, last_name, roles_id)
VALUES ("Richard", "Reeves", 1);

INSERT INTO employee(first_name, last_name, roles_id)
VALUES ("Noland", "cape", 4);

INSERT INTO employee(first_name, last_name, roles_id)
VALUES ("Prince", "Tylers", 5);

INSERT INTO employee(first_name, last_name, roles_id)
VALUES ("Donald", "King", 5);

INSERT INTO employee(first_name, last_name, roles_id)
VALUES ("Reed", "Renner", 6);

INSERT INTO employee(first_name, last_name, roles_id)
VALUES ("Reese", "Powers", 3);

INSERT INTO employee(first_name, last_name, roles_id)
VALUES ("Winter", "Splinters",2);