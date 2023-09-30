// console.log('JS');
var carClass = function(brand, company) {
    this.brand = brand;
    this.company = company;
    // good practice to decouple functions from function constructors.
    // this.greetings = function() {
    //     console.log("This is a bad practice!");
    //     // console.log("This is a " + this.company + " " + this.brand + "!");
    // }    
}

// add function here instead.
carClass.prototype.greetings = function() {
    console.log("This is a " + this.company + " " + this.brand + "!");
}  

var bmw = new carClass('M3', 'BMW');
console.log(bmw.company);
bmw.greetings();

// override prototype.
carClass.prototype.greetings = function() {
    console.log("This is creepy!");
}  

// override for one instance only.
var camry = new carClass('Camry', 'Toyota');
console.log(camry.company);
camry.greetings = function() {
    console.log("Say what?!");
};
camry.greetings();


