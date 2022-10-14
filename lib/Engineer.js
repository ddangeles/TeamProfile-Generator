const Employee = require("./Employee")

class Employee extends Employee {
    constructor(name, id, email, github){
        super(name,id,email);
        this.github = github;
    }

    
}

module.exports = Engineer;