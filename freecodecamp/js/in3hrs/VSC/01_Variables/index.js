// data
// undefined - error
// console.log(a);

// null
let a = null;
console.log(a);

// boolean
console.log(false);
let b = true;
console.log(b);

// string
console.log('Hello, World!');
let c = 'Carpet';
console.log(c);

// symbol
let sym = Symbol.for('hello');
let sym1 = Symbol.for('id');
console.log( Symbol.keyFor(sym) ); // hello
console.log( Symbol.keyFor(sym1) ); // id

// number
console.log(22);
let e = 5;
console.log(e);
e = 7;
console.log(e);
var e1 = 2;
console.log(e + e1);

// object
console.log({
    hello: 'Hello, ',
    world: 'World!'
});
const f = {
    first: "Joe",
    last: "Santos",
    fullname : function() { return this.first + " " + this.last }
}

console.log(f.first);
var p = f.fullname();
console.log(p);


