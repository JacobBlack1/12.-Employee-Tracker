DROP DATABASE IF EXISTS 12.Employee-Trackerdb;
CREATE database 12.Employee-Trackerdb;

USE 12.Employee-Trackerdb;
 
CREATE TABLE department (
    dept_id INT NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(30),
    PRIMARY KEY (dept_id)
);
 
CREATE TABLE company_role (
    role_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DEC(7,2) NOT NULL,
    dept_id INT,
    PRIMARY KEY (role_id),
    FOREIGN KEY (dept_id) REFERENCES department(dept_id)
);
 
CREATE TABLE employees (
