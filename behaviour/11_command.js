//example is redux, save state after some action

class MyMath {
    constructor(initValue = 0) {
        this.num = initValue;
    }

    square() {
        return this.num ** 2;
    }

    cube() {
        return this.num ** 3;
    }
}

class Command {
    constructor(subject) {
        this.subject = subject;
        this.commandsExecured = [];
    }

    execute(command) {
        this.commandsExecured.push(command);
        return this.subject[command]();
    }
}

const x = new Command(new MyMath(2))

console.log(x.execute('square'));
console.log(x.execute('cube'));

console.log(x.commandsExecured);
