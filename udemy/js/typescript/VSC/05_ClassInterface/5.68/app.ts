// abstract class
abstract class Department {

    private employees: string[] = [];
    constructor(public id : string, public name :string) {
    }
    // getter and setters
    get Employees() {
        return this.employees;
    }
    set Employees(employees: string[]) {
        this.employees = employees;
    }

    abstract describe() : void; // don't forget the return type.

    // describe() {
    //     console.log(`Department: (${this.id}): ${this.name}`);
    // }
    addEmployee(e: string) {
        this.employees.push(e); // no need to use getter here
    }
    numberOfEmployees() {
        return this.employees.length;
    }
    describeEmployees() {
        console.log("Employees: ",this.employees, "Total: ", this.numberOfEmployees());
    }
}

// inheritance
class AccountingDepartment extends Department {
    reports : string[];
    constructor(id:string, reports:string[]) {
        super(id,"Accounting");
        this.reports = reports;
    }

    // instantiate the abstract function.
    describe() {
        console.log(`Department: (${this.id}): ${this.name} - derived`);
    }

    addEmployee(e: string) {
        this.Employees.push(e);     // need getter for derived class
        // this.employees.push(e);
    }
}
// const accounting = new Department("101", "Accounting");
const accounting = new AccountingDepartment("101", ["Max"]);
console.log(accounting);

accounting.addEmployee('Joe');
accounting.addEmployee('James');

// console.log(accounting.Employees)
accounting.describe();