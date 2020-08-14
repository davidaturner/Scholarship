// Deconstruction
var myCars = ["honda", "bmw"];
var userInfo = {
    firstname: 'Joe',
    lastname: 'Santos',
    age: 29,
    cars: myCars
}

console.log(userInfo.firstname);

// var { firstname, lastname, age } = userInfo;
var { firstname, lastname, age, cars } = userInfo;
console.log(firstname + " " + lastname);
console.log(cars);
/*
var userf = function userInfof(data) {
    var firstname = data.firstname;
    var lastname = data.lastname;
    var age = data.age;

    console.log(`My name is ${firstname} ${lastname}, ${age}.`)
}
userInfof(userInfo);

var userInfof = function userf(firstname, lastname, age) {
    console.log(`My name is ${firstname} ${lastname}, ${age}.`)
}
userIntof(firstname, lastname, age);
*/
var userIntof = ({ firstname, lastname, age, cars }) => {
    console.log(`My name is ${firstname} ${lastname}, ${age}.`);
};
userIntof(userInfo);
/*
var myCar = cars[0];
var myWifesCar = cars[1];
*/
var [myCar, myWifesCar] = cars;

console.log(myCar);
console.log(myWifesCar);



