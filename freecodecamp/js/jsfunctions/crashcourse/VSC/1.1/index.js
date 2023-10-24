// ways to declare a function.
function printMe() {
    console.log("Hello, it's me")
}
printMe();
function printName(name) {
    console.log(`Hello, it's ${name}`)
}
printName('Tapas');
const printMeAgain = function() {
    console.log("Hello. Me again");
}
// printNameAgain('Toto'); // causes runtime error
// note const variables are not hoisted.
printMeAgain();
const printNameAgain = function(name) {
    console.log(`Hello again. It's ${name}`);
}
printMeAgain('Tapas');
