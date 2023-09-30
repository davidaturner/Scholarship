import { User } from './user';
export class Worker extends User {
    constructor(username:string, age:number, city:string, state:string) {
        super(username, age, city, state);
    }
    takesorders() {
        console.log(this.username + " takes the orders.");
        console.log(this.sayhello());
    }
}