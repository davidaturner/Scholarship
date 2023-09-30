// JSON value
// 1. number 
// 2. string 
// 3. boolean 
// 4. null 
// 5. array 
// 6. object

var days = {
    "weekdays" : ["Sunday", "Monday"],
    "holiday" : ["New Years' Day", "Valentine's Day"],
    "multiples5" : [5, 10, 15, 20],
    "bvalues": [true, false],
    "lattes" : null,
    "groupings" : [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
    "employees" : [
        {"name" : "Lisa Chick", "empid" : 1},
        {"name" : "Charlie Thomas", "empid" : 2},
        {"name" : "Por Franklin", "empid" : 10}
    ]
}

console.log(JSON.stringify(days.employees));
console.log(days.multiples5[2]);