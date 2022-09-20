class Employee {
    #id : number;       //private id : number;
    protected name : string; 

    constructor(id: number, name: string) {
        this.#id = id;
        this.name = name;
    }

    get Id() : number {
        return this.#id;
    }
    get Name() : string {
        return this.name;
    }
    toString() : string {
        return `${this.#id}: ${this.name}`
    }

    static hello( thing: string): string {
        return `Hello, ${thing}!`
    }

}

let colby = new Employee(1, "Colby Bill");
console.log(colby.Id);
console.log(colby.Name);
// console.log(colby.#id)      // not accessible outside of the class. private.
// console.log(colby.#name)    // not accessible outside of the class. private.

class Manager extends Employee {
    protected employees : Employee[];

    constructor(id: number, name: string, employees: Employee[]) {
        super(id, name);
        this.employees = employees;
    }

    toString() : string { 
        let str: string = super.toString() + " Employees -";
        for(let employee of this.employees) {
            str += " " + employee.toString();
        }
        // for(let employee in this.employees) {
        //     str += " " + this.employees[employee].toString();
        // }
        return str;
    }
    get Employees() : Employee[] {
        return this.employees;
    }
}

let martha = new Employee(10, "Martha Midear");
let sonya = new Employee(11, "Sonya Blade");
let carl = new Employee(12, "Carl Mathers");

let jacksEmployees = [martha, sonya, carl];
let jack = new Manager(21, "Jack Olantern", jacksEmployees);
console.log(jack.Id);
console.log(jack.Name);
jack.Employees.forEach(e => console.log(e.toString()));

console.log(jack.toString()); // overloaded

// static function
console.log(Employee.hello("World"));