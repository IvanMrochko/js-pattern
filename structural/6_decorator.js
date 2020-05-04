//add new functionality to exists class
class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port;
    }

    get url() {
        return `https://${this.ip}:${this.port}`;
    }
}

const aws = (server) => {
    server.isAWS = true;
    server.awsInfo = () => {
        return server.url;
    }
    return server;
}

const azure = (server) => {
    server.isAzure = true;
    server.port += 500;
    return server;
}
const s1 = aws(new Server('12.12.11.11', '8080'));
const s2 = azure(new Server('2.2.1.1', '8080'));

console.log(s1.isAWS)
console.log(s1.awsInfo())

console.log(s2.isAzure)
console.log(s2.url)