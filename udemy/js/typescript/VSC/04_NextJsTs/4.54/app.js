var hobbies = ['Cooking', 'Sports'];
// console.log(hobbies);
var general = ['Hiking'];
// console.log(general);
// general.push(hobbies[0], hobbies[1]);
general.push.apply(general, hobbies);
// console.log(general);
var person = {
    firstname: "Joe",
    age: 29
};
var hobby1 = hobbies[0], hobby2 = hobbies[1];
var general1 = general[0], generalrest = general.slice(1);
console.log(hobby1, " ", hobby2);
console.log(general1, " ", generalrest);
var firstname = person.firstname, age = person.age;
console.log(firstname, " " + age);
var alias = person.firstname, swarmy = person.age;
console.log(alias, "  ", swarmy);
