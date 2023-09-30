var employee = {
    fname : "Joe",
    lname : "Santos",
    age : 29,
    employedby : "Acme!",
    empid : 255
}

// rest operator
var {fname, lname, age, ...employed} = employee;
console.log(`My name is ${fname} ${lname}, ${age}.`);
console.log(employed);

var employeerole = {
    roleid: 25,
    role: "Consultant",
    paystructure: "Hourly"
}

const isRemote = true;

// spread operator
var joesantos = {
    ...employee, ...employeerole, isRemote
}

console.log(joesantos)



