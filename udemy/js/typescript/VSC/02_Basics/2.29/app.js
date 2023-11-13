// unknown vs any. use typeof to determine unknown before you use.
// any works anytime. less type safe.
var userInput;
userInput = 5;
userInput = "Joe Santos";
if (typeof userInput === 'string') {
    console.log(userInput);
}
// never. look at console.log to see the difference.
function errorUsingVoid(msg, code) {
    throw { message: msg, errorCode: code };
}
function errorUsingNever(msg, code) {
    throw { message: msg, errorCode: code };
}
errorUsingVoid('An error occurred!', 500);
errorUsingNever('An error occurred!', 500);
