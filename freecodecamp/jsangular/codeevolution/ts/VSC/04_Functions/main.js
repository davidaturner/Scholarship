"use strict";
const helloworld = "Hello, World!";
console.log(helloworld);
// function addOrIncremnt(a:number, b:number) {
//     return a + b;
// }
// optional b
function addOrIncremnt(a, b) {
    if (b !== undefined) {
        return a + b;
    }
    else
        return ++a;
}
// default b
// function addOrIncremnt(a:number, b:number =  1) :number {
//     return a + b;
// }
console.log(addOrIncremnt(5, 10));
console.log(addOrIncremnt(5)); //b = optional
const fullname = (person) => {
    return person.firstname + " " + person.lastname;
};
const iambatman = {
    firstname: 'Bruce',
    lastname: 'Wayne'
};
console.log(fullname(iambatman));
