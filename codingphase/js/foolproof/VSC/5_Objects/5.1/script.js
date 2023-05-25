// objects
var student = {

    id : 83,
    firstName : "Joe",
    lastName : "Santos Garcia",
    getFullName : function() {
        return this.firstName + " " + this.lastName;
    },
    grade: function(theGrade) {
        console.log("His grade is " + theGrade);
    },
    classesTaken: ["Math", "English", "Gym", "Cooking"]
}

console.log(student);
console.log(student.lastName);
student.grade(99); // return value - undefined
console.log(student.classesTaken[1]);
student.classesTaken.push("Home Ec");
console.log(student.classesTaken)
