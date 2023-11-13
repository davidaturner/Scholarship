// unknown vs any. use typeof to determine unknown before you use.
// any works anytime. less type safe.
let userInput : unknown;

userInput = 5;
userInput = "Joe Santos";

if (typeof userInput === 'string') {
  console.log(userInput);
}

// never. alternate to try catch. 
function errorUsingVoid(msg: string, code: number) : void {
  throw { message:msg, errorCode: code };
}

function errorUsingNever(msg: string, code: number) : never {
  throw { message:msg, errorCode: code };
}

errorUsingVoid('An error occurred!', 500);
errorUsingNever('An error occurred!', 500);
