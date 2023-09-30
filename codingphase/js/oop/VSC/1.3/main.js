// console.log('JS');
var person = function(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

var firstperson = new person('Joe', 'Santos');
console.log(firstperson);
console.log(firstperson.lastname);

var carClass = function(brand, company) {
    this.brand = brand;
    this.company = company;
    this.greetings = function() {
        console.log("This is a " + this.company + " " + this.brand + "!");
    }    
}

var m3 = new carClass('M3', 'BMW');
console.log(m3);
console.log(m3.company);
m3.greetings();

var camry = new carClass('Camry', 'Toyota');
console.log(camry);
console.log(camry.company);
camry.greetings();

