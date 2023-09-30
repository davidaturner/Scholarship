const numbers = [1, 2, 3, 4, 5, 6];
// var select = 22;
var select = 3;

// using find
//  var found = numbers.find((num) => {
//     return num == select;
//  });

var found = numbers.includes(select);
 if (found) {
    console.log(`yes. we have found ${select}!`);
 } else {
    console.log(`no. we cannot find the select in numbers.`);
 }