//comunication between objects

class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {
        this.room.send(message, this, to);
    }

    receive(message, from) {
        console.log(`${from.name}=>${this.name}: ${message} `)
    }
}
class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }

    send(message, from, to) {
        if (to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach(key => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from)
                }
            })
        }
    }
}

const ivan = new User('Ivan')
const nazar = new User('Nazar')
const olya = new User('Olya')

const room = new ChatRoom();

room.register(ivan)
room.register(nazar)
room.register(olya)

ivan.send('Hello', olya)
nazar.send('Hello hello', ivan)
olya.send('Hello all')