var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    // private employees: string[] = [];
    function Department(id, name) {
        this.id = id;
        this.name = name;
        // protected
        this.employees = [];
    }
    Department.prototype.describe = function () {
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
// inheritance
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment.prototype.addEmployee = function (e) {
        this.employees.push(e);
        console.log("derived");
    };
    return AccountingDepartment;
}(Department));
// const accounting = new Department("101", "Accounting");
var accounting = new AccountingDepartment("101", ["Max"]);
console.log(accounting);
accounting.addEmployee('Joe');
accounting.addEmployee('James');
accounting.describeEmployees();
