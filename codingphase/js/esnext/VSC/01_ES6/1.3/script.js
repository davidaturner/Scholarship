var firstname = "Joe";
var lastname = "Santos";

console.log(firstname + " " + lastname);
console.log(`${firstname} ${lastname}`);

const fullname = (fname, lname) =>
{
    return `${fname} ${lname}`;
}
console.log(fullname('Ravi', 'Shankar'));

const store = (name, address, city, state, zip) =>
{ return `${name} is located at ${address} in ${city}, ${state}, Zip ${zip}`};

console.log(store("Pucci", "2339 Main St", "Pittsburgh", "PA", 15227));