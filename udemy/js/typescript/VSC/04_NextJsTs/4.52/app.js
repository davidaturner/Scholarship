var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var hobbies = ['Cooking', 'Sports'];
console.log(hobbies);
var general = ['Hiking'];
console.log(general);
console.log(hobbies[0]);
general.push(hobbies[0], hobbies[1]);
console.log(general);
// spread examples
var general2 = ['Hiking'];
general2.push.apply(general2, hobbies);
console.log(general2);
var joesantos = {
    name: "Joe Santos",
    age: 32
};
var bevrichter = {
    name: "Beverley Richter",
    age: 44
};
var staff = [joesantos, bevrichter];
console.log(staff);
staff.push(staff[1]);
console.log(staff);
var active = __assign({}, staff);
console.log(active);
