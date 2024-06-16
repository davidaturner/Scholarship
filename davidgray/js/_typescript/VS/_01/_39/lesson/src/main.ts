let myName : string = "David";
let meaningofLife : number;
let isLoading : boolean;
let album : any;

// in terminal - tsc -w
myName = 'John';
meaningofLife = 42;
isLoading = true;
album = 5150;

const sum = (a: number, b: number) => {
    return a + b;
}

console.log(sum(12, 6));

let alphanumeric : string | number | null;

let isActive : boolean | number;

alphanumeric = 222;
console.log(alphanumeric);
alphanumeric = '222';
console.log(alphanumeric);

let re:RegExp = /\w+/g;