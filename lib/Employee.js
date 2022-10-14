class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

        //getters
    getName(){
        return this.name
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

}

// const employee1 = new Employee("donna", 1, "donna@fakemail.com");
// console.log(employee1.getName()) //donna

module.exports = Employee;