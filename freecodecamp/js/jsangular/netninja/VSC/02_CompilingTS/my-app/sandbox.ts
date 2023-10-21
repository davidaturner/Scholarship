// once you compile - tsc sandbox.ts, close the ts to avoid errors.
const character = 'mario';

console.log(character);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => {
    console.log(input)
});