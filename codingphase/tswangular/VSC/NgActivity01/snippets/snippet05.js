"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContactCard = /** @class */ (function () {
    function ContactCard(firstName, phoneNumber) {
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
    }
    ContactCard.prototype.sendmessage = function () {
        console.log("Name: " + this.firstName + ", Phone Number: " + this.phoneNumber);
    };
    return ContactCard;
}());
var newperson = new ContactCard("Henry", "1234567890");
newperson.sendmessage();
// 2 point play after touchdown!
var greeting = function (person) {
    return console.log("Greeting! " + person.firstName + " of phone - " + person.phoneNumber);
};
greeting(newperson);
