const helloworld = ["This is the end", "No, this is only the beginning"]
console.log(helloworld);
var hellostore = helloworld.map(value => value.split(' '));
console.log(hellostore);
console.log(hellostore.length);
hellostore = helloworld.flatMap(value => value.split(' '));
console.log(hellostore);
console.log(hellostore.length);

