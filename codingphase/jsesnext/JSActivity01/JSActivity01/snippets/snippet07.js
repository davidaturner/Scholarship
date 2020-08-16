// Deconstruction
var myCars = ["honda", "bmw"];
var userInfo = {
    firstname: 'Joe',
    lastname: 'Santos',
    age: 29,
    cars: myCars
};
console.log(userInfo.firstname);
// var { firstname, lastname, age } = userInfo;
var firstname = userInfo.firstname, lastname = userInfo.lastname, age = userInfo.age, cars = userInfo.cars;
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
var userIntof = function (_a) {
    var firstname = _a.firstname, lastname = _a.lastname, age = _a.age, cars = _a.cars;
    console.log("My name is " + firstname + " " + lastname + ", " + age + ".");
};
userIntof(userInfo);
/*
var myCar = cars[0];
var myWifesCar = cars[1];
*/
var myCar = cars[0], myWifesCar = cars[1];
console.log(myCar);
console.log(myWifesCar);
//# sourceMappingURL=snippet07.js.map