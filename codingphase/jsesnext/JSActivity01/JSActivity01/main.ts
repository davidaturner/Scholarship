// filter, find, every, some
var users = [
    { name: 'Joe', age: 39 },
    { name: 'Danner', age: 53 },
    { name: "Bonn", age: 18 }
];
//console.log(users);

//var filtered = users.filter((user) => {
//    return user.age > 18;
//})
//console.log(filtered);

//var filterf = (user) => user.age > 40;
//console.log(users.filter(filterf));

//var filtered = users.filter((user) => {
//    return (user.name.toLowerCase().charAt(0) == 'b');
//});
//console.log(filtered[0].name);

// Promises
var products = [{
    id: 1,
    title: 'Sneakers',
    price: 300
}];

const getProducts = new Promise(resolve, reject) {

}