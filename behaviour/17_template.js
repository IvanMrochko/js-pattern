//delegate structure and realization in sub classes

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    responsibilities() { }

    work() {
        return `${this.name} doing ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} has Salary: ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return `Creating apps`;
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return `Testing apps`;
    }
}
const dev = new Developer('Ivan', 100000);
console.log(dev.getPaid());
console.log(dev.work());

