const inquirer = require("inquirer");
const mysql = require("mysql2");
const db = require("./config/connection");

db.connect(err => {
    if (err) throw err;
    console.log('Connected to Employee Database');
    introPrompt();
});

const introPrompt = () => {
  inquirer
    .prompt({
      type: "list",
      name: "start",
      message: "Please make a selection",
      choices: [
        "view departments",
        "view roles",
        "view employees",
        "add department",
        "add role",
        "add  employee",
        "update  employee role",
        "quit",
      ],
    })
    .then((answers) => {
      switch (answers.start) {
        case "view departments":
          viewDepartments();
          break;
        case "view roles":
          viewRoles();
          break;
        case "view employees":
          viewEmployees();
          break;
        case "add department":
          addDepartment();
          break;
        case "add role":
          addRole();
          break;
        case "add employee":
          addEmployee();
          break;
        case "update employee role":
          updateRole();
          break;
        case "quit":
          console.log("Thank you! Good bye!");
          process.exit(0);
      }
    });
};


db.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM departments", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });
  


introPrompt();

