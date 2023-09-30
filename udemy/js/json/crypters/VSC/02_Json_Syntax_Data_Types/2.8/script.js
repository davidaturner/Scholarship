// JSON value
// 1. number 
// 2. string 
// 3. boolean 
// 4. null 
// 5. array 
// 6. object

var employee = {
    "fullname" : {
        "firstname" : "Joe",
        "lastname" : "Santos"
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
    }
}

console.log(employee.address);
console.log(employee.phone.resident);