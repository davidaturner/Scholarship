// object exercises
// declare an variable of a object consisting of the properties name, age, occupation.
var graduate = {

    name: "Joe Santos Garcia",
    age : 29,
    occupation: "web developer"
}
// console.log the result.
console.log(graduate);
// add to the object variable a string birthDate using ["key"]. console.log the result.
graduate["birthDate"] = "19/03/1994";
console.log(graduate);
// add an array of education to the object variable using .key. console.log the result.
graduate.education = [
    {
        name: "Wilkinsburg High School",
        yearsInSchool: 2,
        graduationDate: "11/04/2011"
    },
    {
        name: "Carlow College",
        yearsInSchool: 4,
        graduationDate: "11/04/2015"
    }
];

console.log(graduate);
console.log(graduate.education[1].name);
