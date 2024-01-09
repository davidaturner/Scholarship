const hobbies = ['Cooking', 'Sports'];
console.log(hobbies);

const general = ['Hiking'];
console.log(general);
console.log(hobbies[0]);
general.push(hobbies[0], hobbies[1]);
console.log(general);

// spread examples
const general2 = ['Hiking'];
general2.push(...hobbies);
console.log(general2);

const joesantos = {
    name: "Joe Santos",
    age: 32
}

const bevrichter = {
    name: "Beverley Richter",
    age: 44
}

const staff = [joesantos, bevrichter];
console.log(staff);
staff.push(staff[1]);
console.log(staff);

const active = {...staff};
console.log(active);
