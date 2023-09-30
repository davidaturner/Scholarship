// find
var users = [
    { name: "Joe Santos", age: 29},
    { name: "Joe Santos", age: 28}
]

var joe = users.find((user) => {
    return user.name == "Joe Santos" && user.age == 28;
    // return user.name == "Joe Santos";
})
console.log(joe);



