//chaning object modification jquery

class MySum {
    constructor(initValue = 42) {
        this.sum = initValue;
    }

    add(value) {
        this.sum += value;
        return this;
    }
}

const sum1 = new MySum();
console.log(sum1.add(10).add(5).add(3).sum);

