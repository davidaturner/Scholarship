// Object functions
const user = {
    name: "Joe",
    age: 29,
    isMarried: true
}

// values
// console.log(Object.values(user));

// entries
console.log(Object.entries(user));
for(let [key, value] of Object.entries(user)) {
    console.log(`key: ${key} - value: ${value}`);
}

// a table of entries
// console.table(Object.values(user));