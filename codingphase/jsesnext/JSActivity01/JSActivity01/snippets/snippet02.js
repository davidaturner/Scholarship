// es5 form function
//function userName(name) {
//    return name;
//}
// es6 arrow equivalent
// var userName = (name) => { return name };
//
// arrow simplified
var userName = function (name) { return name; };
// same test either way!
var myJoe = userName('Joe');
console.log(myJoe);
var fullName = function (firstname, lastname) { return firstname + " " + lastname; };
var myStephen = fullName('Stephen', 'Strange');
console.log(myStephen);
//# sourceMappingURL=snippet02.js.map