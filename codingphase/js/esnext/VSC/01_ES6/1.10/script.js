// map
var users = [
    {name: "Joe Santos", age: 29},
    {name: "Carpal Tunney", age: 33},
    {name: "Fokk Lift", age: 43},
    {name: "Elena Tevin", age: 57}
];

users.map(user => {console.log(user.name);})

// var justnames = users.map(user => {console.log(user.name);});
var justnames = users.map(user => {return user.name}); // push into an array.
console.log(justnames);
