var Department = /** @class */ (function () {
    // constructor(n:string) {
    function Department(name) {
        this.name = name;
        // alternate constructor. without 'property'.
        // name: string;
        this.employees = [];
        // this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department: " + this.name);
    };
    Department.prototype.addEmployee = function (e) {
        this.employees.push(e);
    };
    Department.prototype.numberOfEmployees = function () {
        return this.employees.length;
    };
    Department.prototype.describeEmployees = function () {
        console.log("Employees: ", this.employees, "Total: ", this.numberOfEmployees());
    };
    return Department;
}());
var accounting = new Department("Accounting");
console.log(accounting);
accounting.addEmployee('Joe');
accounting.addEmployee('James');
accounting.describeEmployees();
