const friends = ["John", "Franklin"];
const clients = ["Mamie", "Samie", "Cammy"];

const fulllisting = [...friends, ...clients]; // flattens into one array.
// const fulllisting = [friends, clients]; // attach two arrays.
console.log(fulllisting);