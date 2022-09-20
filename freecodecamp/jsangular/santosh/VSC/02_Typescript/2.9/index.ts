import * as Employee from './employee';
// import {User, SalariedEmployee} from './employee';

class AcmeSalariedEmployee implements Employee.SalariedEmployee {
    name: string;
    age? : number;
    id: number;
    empid: number;
    email: string;
    salary: number;

    constructor(name: string, age: number, id: number, 
                empid: number, email:string, salary:number) {
                    this.name = name;
                    this.age = age;
                    this.id = id;
                    this.empid = empid;
                    this.email = email;
                    this.salary = salary;
                }

    login() : Employee.User {
            return { name: this.name, age: this.age, id: this.id
        }
    }
}

let john = new AcmeSalariedEmployee("John", 29, 1, 1001, "jsmite@acme.com", 60000);
let james = new AcmeSalariedEmployee("James", 29, 1, 1001, "jspaeder@acme.com", 60000);
let grant = new AcmeSalariedEmployee("Grant", 29, 1, 1001, "gmotion@acme.com", 60000);
let amy = new AcmeSalariedEmployee("Amy", 29, 1, 1001, "apond@acme.com", 60000);

let users : Employee.User[] = [john.login(), james.login(), grant.login(), amy.login()];
// console.log(users)
// deconstruction
let [user0, user1, ...restOfUsers] : Employee.User[] = users;
console.log(user0);
console.log(user1);
console.log(restOfUsers);
// let [user0, user1, user2, user3] : Employee.User[] = users;
// console.log(user1);

