// const fullname = (person: {firstname:string, lastname: string}): string => {
//     return person.firstname + " " + person.lastname;
// }
var fullname = function (person) {
    // return person.firstname + " " + person.lastname;
    if (person.lastname !== undefined) {
        return person.firstname + " " + person.lastname;
    }
    else {
        return person.firstname;
    }
};
var iambatman = {
    firstname: 'Bruce',
    lastname: 'Wayne'
};
console.log(fullname(iambatman));
var supes = {
    firstname: 'Clark'
};
console.log(fullname(supes));
