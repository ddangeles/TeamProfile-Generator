const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// const teamMembers = [];
// const idArray = [];
console.log("Welcome to the team generator")

const teamMembers = []

function appMenu (){
    inquirer.prompt([
    {
       type: 'input',
       name: "managerName",
       message: "What is the team manager's name?" 
    },
    {
        type: 'input',
        name: "managerId",
        message: "What is the team manager's ID?" 
     },
     {
        type: 'input',
        name: "managerEmail",
        message: "What is the team manager's email?" 
     },
     {
        type: 'input',
        name: "managerOfficeNumber",
        message: "What is the team manager's office number?" 
     }
]).then((answers)=>{
const manager = new Manager(
    answers.managerName,
    answers.managerId,
    answers.managerEmail,
    answers.managerOfficeNumber
)
console.log(manager);
teamMembers.push(manager);
createTeam()
});
}

function createTeam() {
    inquirer.prompt([{
        type: "list",
        name: "teamChoice",
        message: "Which type of team member?", 
        choices: [
            "Engineer",
            "Intern"
        ]
    }]).then((userChoice) => {
        console.log(userChoice);
        if(userChoice.teamChoice ==="Engineer"){
            // function filling in all attributes for engineer^
        } else if(userChoice.teamChoice === "Intern"){
             // function filling in all attributes for intern^
        }
    })
}
appMenu();