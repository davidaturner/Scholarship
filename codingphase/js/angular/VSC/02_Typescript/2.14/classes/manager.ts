import { User } from './user';
export class Manager extends User {
    constructor(username:string, age:number, city:string, state:string) {
        super(username, age, city, state);
    }
    giveorders() {
        console.log(this.username + " gives the orders.");
    }
}