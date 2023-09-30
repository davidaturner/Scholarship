// Another difference between JS JSOL and JSON.
// JS allows functions.

var employee = {
    "fullname" : {
        "firstname" : "Joe",
        "lastname" : "Santos"
    },
    getFullName : function() {
        return this.fullname.firstname + " " + this.fullname.lastname;
    },
    "address" : {
        "street" : "murtland st",
        "city" : "pittsburgh",
        "state" : "pennsylvania",
        "zip" : 15222
    },
    "phone" : {
        "resident": 4125552332,
        "mobile" : 4125551117
    },
    "isMarried": true,
    "dateofdeath": null
}

console.log(employee.address);
console.log(employee.phone.resident);
console.log(employee.getFullName());
console.log(JSON.stringify(employee));