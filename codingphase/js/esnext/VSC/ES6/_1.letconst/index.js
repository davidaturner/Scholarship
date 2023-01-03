let firstName = "Joe";
firstName = "Joel";
console.log(firstName);

const thomas = "Thomas";
// thomas = "thomas"; will cause a run time error. assignment to constant variable.

// yet, const is not completely immutable.
const names = ["Joe", "John", "Sam"];
names.push("Steffie");
console.log(names);
