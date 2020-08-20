//Data Type
// Numbers
var numbers = (2 * 4 * 5) / 2;
console.log(numbers);

// String
var joesantos = 'Joe Santos';
console.log(joesantos);

// boolean
var studentpassed = true;
console.log(studentpassed);

// array
var arr = ['Joe', 32, 64, ['Joe', 32]];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[3][0]);
console.log(arr[3][1]);

// object
var joe = {
    name: 'Joe',
    age: 32,
    married: true,
    kids: 4,
    greeting: function () {
        return `Hi! I'm ${this.name}`;
    },
    helloworld: function (name) {
        console.log(`Hey ${name}`);
    },
    print: function () {
        console.log(this.greeting());
    }
};
console.log(joe);
console.log(joe.name);
console.log(joe.married);
console.log(joe.kids);
console.log(joe.greeting());
joe.print();
joe.helloworld('James');

//null
var dolly = null;
console.log(dolly);

// undefined
var molly;
console.log(molly);
