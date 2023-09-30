var username = function(name) {
    console.log("My name is " + name + ".");
}

// auto-hoisted
function usernamev1(name) {
    username(name);
}

// arrow function
var usernamev2 = (name) => {
    username(name);
}

function lastname(lastname) {
    return "My last name is " + lastname + ".";
}

var add = (a, b) => { return a + b };

username(22);
usernamev1("Chase");
usernamev2("Jennifer");

console.log(lastname("Joseph"));
console.log(add(2, 3));

var grade = function(name, classTaken, grade) {
    var name = name.toUpperCase();
    return {
        name: name,
        classTaken : classTaken,
        grade : grade
    }
}

console.log(grade("Jobim", "Algebra", 85));

var jobim = grade("Jobim", "Algebra", 85);
console.log(jobim);
