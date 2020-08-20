// Object
var student = {
    id: 83,
    firstname: 'Joe',
    lastname: 'Santos',
    qpa: 4.0,
    grade: function () {
        return `${this.firstname} has a ${this.qpa.toFixed(1)}.`;
    },
    classes: ["Physics", "English", "Electronics", "Engineering"]
};

console.log(student);
console.log("=========================");
console.log(student.lastname);
console.log("=========================");
console.log(student.grade());
console.log("=========================");
console.log(student.classes);
console.log("=========================");
student.classes.push("Drama");
console.log(student.classes);
console.log("=========================");
console.log(student.id);

//
student['dormitory'] = "Carson Meyers";
student['dormaddress'] = "1442 Meyers Ln";

var classremoved = student['classes'].pop();
console.log(classremoved);
console.log("=========================");
console.log(student);

var candidates = [
    {
        id: 83,
        firstname: 'Joe',
        lastname: 'Santos',
        qpa: 4.0
    },
    {
        id: 84,
        firstname: 'Frank',
        lastname: 'Boffel',
        qpa: 3.8
    },
    {
        id: 83,
        firstname: 'Michaela',
        lastname: 'Luten Sally',
        qpa: 4.0
    }
];

for (var i = 0; i < candidates.length; i++) {
    candidates[i]['grading'] = function () {
        return `${this.firstname} is a ${this.qpa.toFixed(1)} candidate.`;
    };
}

console.log(candidates);
console.log(candidates[0].grading());
console.log(candidates[1].grading());
console.log(candidates[2].grading());

var michaela = 2;
console.log(candidates[michaela].id);
console.log(candidates[michaela].firstname + " " + candidates[michaela].lastname);