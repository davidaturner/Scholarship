"use strict";
var _a;
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add("3", "44"));
console.log(add(300, 25));
// optional chaining
const fetched = {
    id: 1001,
    name: 'Max',
    job: { title: null, description: "Of his company!" }
};
// console.log(fetched.job.title)
console.log(fetched);
console.log((_a = fetched === null || fetched === void 0 ? void 0 : fetched.job) === null || _a === void 0 ? void 0 : _a.title);
