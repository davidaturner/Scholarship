var student = {

    name: "Joe",
    age: 29,
    car: {
        name: "GLE",
        year: 2017,
        price: 80000,
        style: "Sport"
    }
};

console.log(student);
student.car["transmission"] = "automatic";
console.log(student);
student.graduated = 2011;
student.age = 21;
console.log(student);

var students = [
{
    name: "Joe",
    age: 29,
    car: {
        name: "GLE",
        year: 2017,
        price: 80000,
        style: "Sport"
    },
},
{
    name: "Lonnie",
    age: 39,
    car: {
        name: "Honda Accord",
        year: 2017,
        price: 80000,
        style: "Sport"
    }
}
]

console.log(students[1]);
var lonnie = students[1];
lonnie.graduated = 2017;

console.log(lonnie);