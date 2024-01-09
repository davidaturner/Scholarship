var hobbies = ['Cooking', 'Sports'];
console.log(hobbies);
var general = ['Hiking'];
console.log(general);
console.log(hobbies[0]);
// general.push(hobbies[0], hobbies[1]);
general.push.apply(general, hobbies);
console.log(general);
// rest parameters
// accepting an ultimate number of arguments.
// const add = (...numbers:number[]) => {
//     let result = 0;
//     for(var i=0; i<numbers.length; i++) {
//         result += numbers[i];
//     }
//     return result;
// }
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (result, val) {
        return result + val;
    }, 0);
};
var addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
// NOTE: This is how push works!
// (method) Array<string>.push(...items: string[]):number
