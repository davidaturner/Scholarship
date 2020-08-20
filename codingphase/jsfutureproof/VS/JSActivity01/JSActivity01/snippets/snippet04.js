// Operators
var one = 1;
var two = 2;
var four = 4;
var eight = 8;
var sixteen = 16;
var thirtytwo = 32;
var hundred = 100;


var a = one + two;
console.log(a);

var b = two - one;
console.log(b);

var c = four * eight;
console.log(c);

var d = four / eight;
console.log(d);

var e = eight / four;
console.log(e);

var f = hundred % eight;
console.log(f);

a += b;
console.log(a);

b -= c;
console.log(b);

c *= d;
console.log(c);

d /= e;
console.log(d);

c %= 2;
console.log(c);

var joestantos = "Joe" + " " + "Stantos";
console.log(joestantos);

var whata = "what a ";
var veryniceday = "very nice day";
whata += veryniceday;
console.log(whata);

console.log("Equalities");
console.log(2 == 2);
console.log(two == 2);
console.log('2' == 2);
console.log('2' != 2);
console.log(2 === 2);
console.log(two === two);
console.log(two === 2);
console.log(two === "2");
console.log(two !== "2");

console.log("Comparisons");
console.log(two > four);
console.log(two < four);
console.log(two >= four);
console.log(two <= four);

if (one === one && two === one) {
    console.log("All good!");
} else {
    console.log("Bad compare detected"+one+two);
}
if (one == one || two == one) {
    console.log("Good compare detected");
} else {
    console.log("All bad!");
}
console.log((two == two) && (four == two));
console.log((two == two) || (four == two));
console.log(!(two == two));

console.log("Teritary");
var Joe = "Joe";
console.log((Joe == "Joe")? "Yeah, Joe" : "No, it's Jack");

