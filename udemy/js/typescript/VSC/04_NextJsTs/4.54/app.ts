const hobbies = ['Cooking', 'Sports'];
// console.log(hobbies);

const general = ['Hiking'];
// console.log(general);
// general.push(hobbies[0], hobbies[1]);
general.push(...hobbies);
// console.log(general);

const person = {
    firstname :"Joe",
    age : 29
}

const [hobby1, hobby2] = hobbies;
const [general1, ...generalrest] = general;
console.log(hobby1, " ", hobby2);
console.log(general1, " ", generalrest);

const {firstname, age} = person;
console.log(firstname, " " + age);

const {firstname:alias, age:swarmy } = person;
console.log(alias, "  ", swarmy);




