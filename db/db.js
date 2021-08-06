onst util = require("util");
const connection = require("./connection");
var inquirer = require("inquirer");

function createDepartment() {
    var start = require("../index");
    console.log("Adding a new Department.....");
  
    inquirer
      .prompt([
        {
          name: "action",
          type: "input",
          message: "What is the Name of the Department",
        },
      ])
      .then(function (answers) {
        connection.query(`INSERT INTO department(name) VALUES( ? )`, [
          answers.action,
        ]);
      })
      .then(() => {
        start();
        // })
      });
  }
  
  // delete a department "working"
  function deleteDepartment() {
    var start = require("../index");
    console.log("Deleting Department.....");
    connection.query("SELECT * FROM department", (err, res) => {
      if (err) throw err;
      inquirer
        .prompt([
          {
            name: "department",
            type: "list",
            choices: function () {
              let choiceArray = res.map((choice) => choice.name);
              console.log(choiceArray);
              return choiceArray;
            },
            message: "Select a department to remove",
          },
        ])
        .then(function (answers) {
          connection.query(`DELETE FROM department WHERE ?`, {
            name: answers.department,
          });
        })
        .then(() => {
          start();
          // })
        });
    });
  }
  // view roles "working"
  function viewRoles() {
    var start = require("../index");
    console.log("Viewing roles.....");
    connection.query("SELECT * FROM role", (err, res) => {
      if (err) throw err;
  
      console.log(" ");
      console.table(res);
      start();
    });
  }
  
  // add a role, working
  function addNewRole() {
    var start = require("../index");
  
    console.log("Viewing current roles.....");
    connection.query("SELECT * FROM role", (err, res) => {
      if (err) throw err;
      console.table(res);
      inquirer
        .prompt([
          {
            name: "newTitle",
            type: "input",
            message: "Role Title:",
          },
          {
            name: "newSalary",
            type: "input",
            message: "Role Salary",
          },
          {
            name: "department",
            type: "list",
            choices: getRole(),
            message: "Select a department",
          },
        ])
  
        .then((answer) => {
          connection.query(
            `INSERT INTO role(title, salary, department_id) VALUES ("${answer.newTitle}", ${answer.newSalary}, ${answer.department})`
          );
        })
        .then(() => {
          console.log("role added...");
          start();
          // })
        });
    });
  }
  // delete a role 
  function deleteRole() {
    var start = require("../index");
  
    console.log("Deleting role.....");
    connection.query("SELECT * FROM role", (err, res) => {
      if (err) throw err;
      inquirer
        .prompt([
          {
            name: "role",
            type: "list",
            choices: function () {
              let choiceArray = res.map((choice) => choice.title);
              return choiceArray;
            },
            message: "Select a role to remove",
          },
        ])
        .then(function (answers) {
          connection.query(`DELETE FROM role WHERE ?`, {
            title: answers.role,
          });
        })
        .then(() => {
          start();
          // })
        });
    });
  }
  // add employees
  function addEmployee() {
    getRole();
    var start = require("../index");
    console.log("Adding a new employee role.....");
    inquirer
      .prompt([
        {
          name: "first_name",
          type: "input",
          message: "What is the employee's first name",
        },
        {
          name: "last_name",
          type: "input",
          message: "What is the employee's last name",
        },
        {
          name: "role_id",
          type: "input",
          // choices: getRole(),
          message:
            "Select the id that corresponds to the role of the new employee",
        },
        {
          name: "manager_id",
          type: "list",
          choices: getManagers(),
          message:
            "What is the Manger ID for this employee? \n You may have to scroll up or down to view available selections",
        },
      ])
      .then(function (answers) {
        connection.query(
          `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES("${answers.first_name}", "${answers.last_name}", ${answers.role_id},${answers.manager_id})`
        );
      })
      .then(() => {
        start();
        // })
      });
  }
  // Delete employee
  function deleteEmployee() {
    var start = require("../index");
    getEmployee();
    console.log("Deleting employee.....");
    connection.query("SELECT * FROM employee", (err, res) => {
      if (err) throw err;
      inquirer
        .prompt([
          {
            name: "deleteEmployee",
            type: "input",
            message: "Select the employee by id to remove",
          },
        ])
        .then(function (answers) {
          connection.query(
            `DELETE FROM employee WHERE employee_id  = ${answers.deleteEmployee}`
          );
        })
        .then(() => {
          start();
          // })
        });
    });
  }
  // view department, working
  function viewDepartment() {
    var start = require("../index");
    console.log("Viewing Department....");
    connection.query("SELECT * FROM department", (err, res) => {
      if (err) throw err;

      console.log("");
      console.table(res);
      start();
    });
  }
  
  function upDateEmployeeRole() {
    console.log("Updating Employee Role.....");
    var start = require("../index");
    connection.query(`SELECT * FROM employee`, (err, res) => {
      if (err) throw err;
      console.log("");
      console.table(res);
    });
    inquirer
      .prompt([
        {
          name: "employee",
          type: "input",
          message: "Enter the employee id to be updated",
        },
        {
          name: "role",
          type: "input",
          message: "Enter a new Role Id for the employee",
        },
      ])
      .then((answers) => {
        connection.query(
          `UPDATE employee  SET role_id = ${answers.role} WHERE id = ${answers.employee}`,
          (err, res) => {
            if (err) throw err;
  
            console.log(
              `\n Employee ID# ${answers.employee} role has been updated ${answers.role}`
            );
          }
        );
      })
      .then(() => {
        start();
      });
  }
  // Updating employee management
  function upDateEmployeeByManager() {
    var start = require("../index");
  
    console.log("Updating Employee By Manager.....");
  }
  // view all employees as a manager
  function viewEmployeeByManager() {
    var start = require("../index");
    connection.query(`SELECT * FROM employee`, (err, res) => {
      if (err) throw err;
      console.table(res());
      inquirer.prompt([
        {
          name: "viewManger",
          type: "list",
          choice: [],
        },
      ]).then;
    });
  }
  // view the budget through salery
  
  function viewBudgetByDepartment() {
    var start = require("../index");
    console.log("Viewing budget for ....");
  }
  var managersArray = [];
  
  function getManagers() {
    connection.query(
      `SELECT  employee.last_name, employee.first_name, manager_id  FROM employee WHERE (manager_id = 100 OR manager_id = 300 or manager_id = 500) `,
      (err, res) => {
        if (err) throw err;
  
        for (var i = 0; i < res.length; i++) {
          var employString = res[i].manager_id;
          managersArray.push(employString);
        }
        console.log("");
        console.table(res);
      }
    );
    console.log(managersArray);
    return managersArray;
  }
  var roleArray = [];
  function getRole() {
    connection.query(`SELECT * FROM role`, (err, res) => {
      if (err) throw err;
  
      for (var i = 0; i < res.length; i++) {
        roleArray.push(res[i].department_id);
      }
      console.log(" ");
      console.table(res);
    });
  
    return roleArray;
  
    //roleArray;
  }
  var employeeArray = [];
  function getEmployee() {
    var start = require("../index");
    connection.query(`SELECT * FROM employee`, (err, res) => {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        employeeArray.push(res[i].id);
      }
      console.log(" ");
      console.table(res);
    });
  
    start();
    return employeeArray;
  }
  
  module.exports = new DB(connection);