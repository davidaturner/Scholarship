// Array
// declare 5 musical artists
var musicalartists = ["Prince", "Bowie", "McCartney", "Green", "MacVie, C."];

// console the variable
console.log(musicalartists);

// console the fourth artist in the array
console.log(musicalartists[3]);

// add another artist and console
musicalartists.push("Jones, N.");
console.log(musicalartists);

// remove the fourth artist in the array and console
var removed = musicalartists.splice(3, 1);
console.log(removed);
console.log(musicalartists);

// console the list in reverse
musicalartists.reverse();
console.log(musicalartists);