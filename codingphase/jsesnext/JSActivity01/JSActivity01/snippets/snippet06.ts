// Spread
var clients = ["Walmart", "KMart", "Walgreen"];
var friends = ["Joe", "Michael", "Thomas", "Lauren"];
var listOfNames = [];

listOfNames = [...clients, ...friends];
console.log(clients);
console.log(friends);
console.log(listOfNames);

listOfNames = [clients, friends];
console.log(listOfNames);

listOfNames = [...clients, friends];
console.log(listOfNames);

