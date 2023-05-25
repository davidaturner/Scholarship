function myFunction(param1, param2) {
  return param1 + param2;
}

console.log(myFunction(2, 4));

const addFunction1 = (param1, param2) => {
  return param1 + param2;
};

console.log(addFunction1(2, 4));

const addFunction2 = (param1, param2) => param1 + param2;

console.log(addFunction2(2, 4));

const stringFunction = string => string + '!';

console.log(stringFunction('My name is Hermione'));

const hello1 = () => console.log('Hello World!');
hello1();

function hello2() {
  console.log('Hello World!');
}
hello2();

// default values for params
const defParam = (a, b = 20) => a * b;

console.log(defParam(10));

// const defParam = (a, b = 20) => a * b;

console.log(defParam(3, 10));
