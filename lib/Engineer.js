const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name,id,email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }

}

const engineer1 = new Engineer("donna", 1, "donna@fakemail.com", "ddangeles");
console.log(engineer1);


module.exports = Engineer;