var Department = /** @class */ (function () {
    // readonly
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        // console.log("Department: ${this.id}: " + this.name);
        console.log("Department: (${this.id}): ${this.name}");
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
var accounting = new Department("101", "Accounting");
console.log(accounting);
accounting.addEmployee('Joe');
accounting.addEmployee('James');
accounting.describeEmployees();
