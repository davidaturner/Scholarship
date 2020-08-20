console.log("Hello from JS!");

// simple function constructor
var person = function () {
    this.firstname = "Joe";
    this.lastname = "Santos";
};

var test1 = new person();

console.log(test1);

// better
var personX = function (firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
};

var test2 = new personX('Joe', 'Santos');
console.log(test2);

// function constructor
var carClass = function (name, company, doors, prices) {
    this.name = name;
    this.company = company;
    this.doors = doors;
    this.prices = prices;
    this.greeting = function () {
        console.log("Hi! Welcome to Joe Santos Car Emporium. Would you like to drive a " + name +
            "? It is brand new from " + company + ". A " + doors + "-door for the price of " + prices + ".");
    };
};

var bmw = new carClass("M3", "BMW", 2, "$35,000");
var honda = new carClass("Civic", "Honda", 4, "$75,000");
var benz = new carClass("eClass", "Benz", 4, "$65,000");
var audi = new carClass("Quattro", "Audi", 2, "$42,000");

bmw.greeting();
audi.greeting();

var improvedcarClass = function (name, company, doors, prices) {
    this.name = name;
    this.company = company;
    this.doors = doors;
    this.prices = prices;
};

// removed from base class to save space.
improvedcarClass.prototype.greeting = function () {
    console.log("Hi! Welcome to Joe Santos Car Emporium. Would you like to drive a " + this.name +
        "? It is brand new from " + this.company + ". A " + this.doors + "-door for the price of " + this.prices + ".");
};

var ibmw = new improvedcarClass("M3", "BMW", 2, "$35,000");
var ihonda = new improvedcarClass("Civic", "Honda", 4, "$75,000");
var ibenz = new improvedcarClass("eClass", "Benz", 4, "$65,000");
var iaudi = new improvedcarClass("Quattro", "Audi", 2, "$42,000");

ibmw.greeting();
iaudi.greeting();
