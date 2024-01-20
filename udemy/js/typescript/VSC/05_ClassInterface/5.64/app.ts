class Department {
    private employees: string[] = [];
    // readonly
    constructor(private readonly id : string, public name :string) {
    }
    describe() {
        console.log("Department: (${this.id}): ${this.name}");
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

const accounting = new Department("101", "Accounting");
console.log(accounting);

accounting.addEmployee('Joe');
accounting.addEmployee('James');

accounting.describeEmployees();