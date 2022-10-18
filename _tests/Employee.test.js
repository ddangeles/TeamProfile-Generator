// const { exportAllDeclaration } = require("@babel/types");
const Employee = require("../lib/Employee");

test("Can create an Employee", () => {
    const e = new Employee("test employee", 1, "test email");
    expect(e.name).toBe("test employee");
    expect(e.id).toBe(1);
    expect(e.email).toBe("test email");
})

test("Name of employee test", () => {
    const name = "Donna";
    const e = new Employee(name);
    expect(e.name).toBe(name);
})

test("Get the name of employee", () => {
    const name = "Donna";
    const e = new Employee(name);
    expect(e.getName()).toBe(name);
})