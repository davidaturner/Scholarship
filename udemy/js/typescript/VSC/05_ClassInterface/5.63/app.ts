class Department {
    name: string;
    private employees: string[] = [];
    constructor(n:string) {
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(e: string) {
        this.employees.push(e);
    }
    numberOfEmployees() {
        return this.employees.length;
    }
    describeEmployees() {
        console.log("Employees: ",this.employees, "Total: ", this.numberOfEmployees());
    }
}

const accounting = new Department("Accounting");
console.log(accounting);

accounting.addEmployee('Joe');
accounting.addEmployee('James');

accounting.describeEmployees();