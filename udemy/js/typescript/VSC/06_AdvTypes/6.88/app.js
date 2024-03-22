"use strict";
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const added = add("3", "44");
console.log(added.length);
console.log(add("3", "44"));
console.log(add(300, 25));
