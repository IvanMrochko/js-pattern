//ability step by step move to some info

class MyIterator {
    constructor(data) {
        this.index = 0;
        this.data = data;
    }

    [Symbol.iterator]() {
        return {
            next: () => {
                if (this.index < this.data.length) {
                    return {
                        value: this.data[this.index++],
                        done: false
                    }
                } else {
                    this.index = 0;
                    return {
                        done: true,
                        value: undefined
                    }
                }
            }
        }
    }
}

const iterator = new MyIterator(['this', 'is my', 'iterator'])

for (const val of iterator) {
    console.log('value:', val)
}