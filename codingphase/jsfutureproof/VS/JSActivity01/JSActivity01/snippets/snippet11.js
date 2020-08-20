// Functions
var student = function (name, age, gpa) {
    return {
        name: name,
        age: age,
        gpa: gpa
    };
};

var joe = student('Joe', 32, 4.0);
console.log(joe);

var impstudent = function (name, age, gpa) {
    var name = name.toLowerCase();
    var age = age;
    var gpa = gpa.toFixed(1);

    return {
        name: name,
        age: age,
        gpa: gpa
    };
};

var impjoe = impstudent('Joe', 32, 4.0);
console.log(impjoe);