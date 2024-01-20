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
// abstract class
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Object.defineProperty(Department.prototype, "Employees", {
        get: function () {
            return this.employees;
        },
        set: function (employees) {
            this.employees = employees;
        },
        enumerable: false,
        configurable: true
    });
    // describe() {
    //     console.log(`Department: (${this.id}): ${this.name}`);
    // }
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
// singleton
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    // step 2: make constructor private.
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        return _this;
    }
    Object.defineProperty(AccountingDepartment, "Instance", {
        // step 2: create static instance using new AccountingDepartment.
        get: function () {
            if (this.instance == null) {
                this.instance = new AccountingDepartment("101", ["Accounting"]);
            }
            return this.instance;
        },
        enumerable: false,
        configurable: true
    });
    // instantiate the abstract function.
    AccountingDepartment.prototype.describe = function () {
        console.log("Department: (".concat(this.id, "): ").concat(this.name, " - derived"));
    };
    AccountingDepartment.prototype.addEmployee = function (e) {
        this.Employees.push(e); // need getter for derived class
        // this.employees.push(e);
    };
    return AccountingDepartment;
}(Department));
// const accounting = new Department("101", "Accounting");
// const accounting = new AccountingDepartment("101", ["Accounting"]);
//step 3: get Instance.
var accounting = AccountingDepartment.Instance;
// same instance
var accounting2 = AccountingDepartment.Instance;
console.log(accounting);
accounting.addEmployee('Joe');
accounting2.addEmployee('James');
// demonstrate singleton pattern
accounting.describeEmployees();
accounting2.describeEmployees();
