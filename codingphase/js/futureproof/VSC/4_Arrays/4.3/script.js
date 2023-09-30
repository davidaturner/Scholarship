// declare an array of five music artists.
var artists = ["John", "Paul", "George", "Ringo", "George Martin"];

// console.log the array
console.log(artists);

function print() {

    for(let i=0; i<artists.length; i++) {
        console.log(artists[i]);
    }
}
print(artists);

// console.log the fourth element in the array.
console.log(artists[3]);

// push another artist in the array (for a total of six). console.log the result.
artists.push("Billy");
console.log(artists);

// remove the fourth element in the array. console.log the result.
var popped = artists.splice(3, 1);
console.log(popped);
console.log(artists);

// console.log the array in reverse.
artists.reverse();
console.log(artists);
