// const fullname = (person: {firstname:string, lastname: string}): string => {
//     return person.firstname + " " + person.lastname;
// }

interface Person {
    firstname: string;
    lastname?: string;
}

const fullname = (person: Person): string => {
    // return person.firstname + " " + person.lastname;
    if (person.lastname !== undefined) {
        return person.firstname + " " + person.lastname;
    } else {
        return person.firstname;
    }
}
const iambatman = {
    firstname: 'Bruce',
    lastname: 'Wayne'
};

console.log(fullname(iambatman));

const supes = {
    firstname: 'Clark'
}

// use for optional props: orms.
console.log(fullname(supes));