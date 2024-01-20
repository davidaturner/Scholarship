// abstract class
abstract class Department {

    private employees: string[] = [];
    constructor(public id : string, public name :string) {
    }

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
// singleton
class AccountingDepartment extends Department {
    reports : string[];
    // step 1: create private static property.
    private static instance: AccountingDepartment;

    // step 2: make constructor private.
    private constructor(id:string, reports:string[]) {
        super(id,"Accounting");
        this.reports = reports;
    }
    // step 2: create static instance using new AccountingDepartment.
    static get Instance() {
        if (this.instance == null) {
            this.instance = new AccountingDepartment("101", ["Accounting"]);
        }
        return this.instance;
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
// const accounting = new AccountingDepartment("101", ["Accounting"]);

//step 3: get Instance.
const accounting = AccountingDepartment.Instance;
// same instance
const accounting2 = AccountingDepartment.Instance;
console.log(accounting);

accounting.addEmployee('Joe');
accounting2.addEmployee('James');

// demonstrate singleton pattern
accounting.describeEmployees();
accounting2.describeEmployees();