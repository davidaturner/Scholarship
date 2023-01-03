"use strict";
class PersonContact {
    constructor(firstName, phoneNumber) {
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
    }
    sendMessage() {
        console.log(`Name: ${this.firstName}, Phone Number: ${this.phoneNumber}`);
    }
}
var newPerson = new PersonContact("Henry", 1234567890);
newPerson.sendMessage();
