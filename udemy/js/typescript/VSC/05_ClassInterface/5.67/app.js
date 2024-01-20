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
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Object.defineProperty(Department.prototype, "Employees", {
        // getter and setters
        get: function () {
            return this.employees;
        },
        set: function (employees) {
            this.employees = employees;
        },
        enumerable: false,
        configurable: true
    });
    Department.prototype.describe = function () {
        console.log("Department: (${this.id}): ${this.name}");
    };
    Department.prototype.addEmployee = function (e) {
        this.employees.push(e); // no need to use getter here
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
        this.Employees.push(e); // need getter for derived class
        // this.employees.push(e);
    };
    return AccountingDepartment;
}(Department));
// const accounting = new Department("101", "Accounting");
var accounting = new AccountingDepartment("101", ["Max"]);
console.log(accounting);
accounting.addEmployee('Joe');
accounting.addEmployee('James');
console.log(accounting.Employees);
// accounting.describeEmployees();
