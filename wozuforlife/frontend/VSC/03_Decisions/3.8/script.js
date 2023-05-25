const hello = hellowho => "Hello, " + hellowho + "!";
console.log(hello("World"));

//activity
// Set the value of the movieRating variable to "PG-13" or "PG" depending on the 
// value of the age variable. The value of movieRating should be "PG-13" if age 
// is greater than 12 and "PG" otherwise.

// Use the ternary operator to set the value of movieRating based upon age.

// Example: let movieRating = [INSERT TERNARY OPERATION HERE]
const movieRating = age => (age >=12)?"PG-13":"PG";
console.log(movieRating(11));
console.log(movieRating(12));