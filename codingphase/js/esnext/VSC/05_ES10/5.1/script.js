// Array.flat
const names = [["Jimmy", "Bobby"], ["Leah", "Stacy"], "Stubbie"];
console.log(names.flat());
const numberstore = [[1, 2, 3, 4, 5]];

var newnames = names.concat(numberstore);
console.log(newnames);
console.log(newnames.flat());

newnames = names.concat([numberstore]);
console.log(newnames);
console.log(newnames.flat());

console.log(newnames.flat(2));

console.log(newnames.flat(Infinity));

