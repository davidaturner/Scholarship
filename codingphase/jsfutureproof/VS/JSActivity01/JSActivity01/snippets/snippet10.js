// Object exercises.
// declare student with props name, age occupation, console
var student = {
    name: 'Joe',
    age: 32,
    occupation: 'Digital Agency Owner'
};
console.log(student);

// add birthdate as a prop
student['birthdate'] = "12/07/85";
console.log(student);

// add education information as an array of objects having name of schools, years attended, and grad date.
student['education'] = [];
student.education[0] = {
    name: "Atlanta High School",
    yearsattended: 2,
    graduateddt: "05/11/2003"
};
student.education[1] = {
    name: "Carnegie Mellon University",
    yearsattended: 6,
    graduateddt: "05/11/2010"
};
student.education[2] = {
    name: "IMBC",
    yearsattended: 2,
    graduateddt: "08/11/2013"
};
console.log(student);

// print one of the school names.
student['print'] = function (i) {
    console.log(`${student.education[i].name}`);
};
student.print(1);