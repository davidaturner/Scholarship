// 1. json data is written inside curly braces.
// 2. data is represented as key value pairs.
// 3. keys should be enclosed in double quotes.
// 4. key and value should be separated by a colon (:)
// 5. comma (,) is used to separate data.
// 6. square brackets hold arrays. 
// 7. curly brackets hold objects.

// JSON value
// 1. number 
// 2. string 
// 3. boolean 
// 4. null 
// 5. array 
// 6. object

var john = {
    "first" : "John",
    "last" : "Smith",
    "age": 23,
    "isMarried": false
}

console.log(JSON.stringify(john));

// validate JSON
// https://jsonlint.com/