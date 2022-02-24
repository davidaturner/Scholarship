export {};

class SomethingFun {
    message: string;

    constructor(message:string) {
        this.message = message;
    }

    getMessage() {
        return this.message;
    }

    setMessage(message : string) {
        this.message = message;
    }

    print() {
        console.log("Let's do " + this.message + " fun!");
    }
}

let someone = new SomethingFun("someone");
someone.print();

let something = new SomethingFun("something");
console.log("Let's do " + something.getMessage() + " fun!");



