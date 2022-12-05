const Manager = require("../team/Manager");
const Engineer = require("../team/Engineer");
const Intern = require("../team/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("../assets/generateHTML");
// empty array for team members
const team = [];

// begin program
function init(){
// starting menu options
function teamQuestions() {
  inquirer
    .prompt([
      {
        type: "list",
        message:
          "Welcome to Team Profile Generator. \n What type of employee would you like to submit to your team?",
        name: "employeeType",
        choices: [
          "Manager",
          "Engineer",
          "Intern",
          "None, My Team is complete.",
        ],
      },
    ])
    .then(function (input) {
      switch (input.employeeType) {
        case "Manager":
          managerQuestions();
          break;
        case "Engineer":
          engineerQuestions();
          break;
        case "Intern":
          internQuestions();
          break;
        case "None, My Team is complete.":
          teamComplete();
          break;
      }
    });
}
// manager questions 
function managerQuestions() {
  inquirer.prompt([
    {
      type: "input",
      message: "Please enter your team manager's name:",
      name: "managerName",
    },
    {
      type: "input",
      message: "Please enter the team manager's employee ID:",
      name: "managerId",
    },
    {
      type: "input",
      message: "Please enter the team manager's email address:",
      name: "managerEmail",
      validate: function (email) {
        var pass = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (pass) {
          return true;
        }
        return "Please enter a valid email.";
      },
    },
    {
      type: "input",
      message: "Please enter the team manager's office number:",
      name: "managerOffice",
    },
  ]).then(data => {
    const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOffice);
    team.push(manager);
    teamQuestions();
  });
};
// engineer questions 
function engineerQuestions() {
  inquirer.prompt([
    {
      type: "input",
      message: "Please enter your engineer's name:",
      name: "engineerName",
    },
    {
      type: "input",
      message: "Please enter the engineer's employee ID:",
      name: "engineerId",
    },
    {
      type: "input",
      message: "Please enter the engineer's email address:",
      name: "engineerEmail",
      validate: function (email) {
        var pass = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (pass) {
          return true;
        }
        return "Please enter a valid email.";
      },
    },
    {
      type: "input",
      message: "Please enter the engineer's GitHub username:",
      name: "engineerGithub",
    },
  ]).then(data => {
    const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
    team.push(engineer);
    teamQuestions();
  });
};
// intern questions 
function internQuestions() {
  inquirer.prompt([
    {
      type: "input",
      message: "Please enter your intern's name:",
      name: "internName",
    },
    {
      type: "input",
      message: "Please enter the intern's employee ID:",
      name: "internId",
    },
    {
      type: "input",
      message: "Please enter the intern's email address:",
      name: "internEmail",
      validate: function (email) {
        var pass = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (pass) {
          return true;
        }
        return "Please enter a valid email.";
      },
    },
    {
      type: "input",
      message: "Please enter the intern's school:",
      name: "internSchool",
    },
  ]).then(data => {
    const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
    team.push(intern);
    teamQuestions();
  });
};

// write to file function 
function teamComplete(){
  fs.writeFile("results.html", generateHTML(team), (err) =>
        err
          ? console.error(err)
          : console.log("Your Team HTML file has been created!")
      );
  
};
// trigger menu options
teamQuestions();
};

// init program
init();
