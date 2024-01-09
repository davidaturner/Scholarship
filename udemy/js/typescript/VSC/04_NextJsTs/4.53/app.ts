const hobbies = ['Cooking', 'Sports'];
console.log(hobbies);

const general = ['Hiking'];
console.log(general);
console.log(hobbies[0]);
// general.push(hobbies[0], hobbies[1]);
general.push(...hobbies);
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
const add = (...numbers:number[]) => {
    return numbers.reduce((result, val) => {
        return result + val;
    }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// NOTE: This is how push works!
// (method) Array<string>.push(...items: string[]):number
