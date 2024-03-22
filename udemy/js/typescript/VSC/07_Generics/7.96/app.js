"use strict";
function merge(a, b) {
    return Object.assign(a, b);
}
// function merge(a: object, b: object) {
//     return Object.assign(a, b);
// }
const merger = merge({ name: 'John' }, { age: 39 });
// { name : 'John, age: 39 }
console.log(merger);
