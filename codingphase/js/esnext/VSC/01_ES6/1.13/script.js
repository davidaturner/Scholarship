// every / some
var users = [
    { name: "Joe", age: 29},
    { name: "Joe", age: 28},
    { name: "Joe", age: 18}
]

var allAndEvery = users.every((user) => {
    return user.age >= 18;   // are all age values >= 18?
    // return user.name == "Joe"   // are all name values == "Joe"
    // return user.age == 18;   // are all age values == 18?
})
console.log(allAndEvery);

var oneOrMore = users.some((user) => {
    return user.age >= 21;
    // return user.age < 12;
})
console.log(oneOrMore);



