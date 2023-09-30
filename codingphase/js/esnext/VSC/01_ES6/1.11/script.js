// filter
const fokklift = "Fokk Lift";

var users = [
    {name: "Joe Santos", age: 29},
    {name: "Carpal Tunney", age: 33},
    {name: fokklift, age: 29},
    {name: "Elena Tevin", age: 57}
];

const fun1 = (usrarr) => {
    var filtered = [usrarr.length];
    usrarr.forEach(usr => {
        console.log(usr.name)
        if (usr.name == fokklist) {
            return usr.name;
        }
    })
}

console.log(fun1(users))


