export {};

interface IPerson {
  firstName: string;
  lastName?: string;
}

interface IContact {
  phoneNumber: string;
  email?: string;
}

interface IPersonContact extends IPerson, IContact {}

class ContactCard implements IPersonContact {
  firstName: string;
  lastName?: string;
  phoneNumber: string;
  email?: string;
  sendMessage: any;

  constructor(firstName: string, phoneNumber: string) {
    this.firstName = firstName;
    this.phoneNumber = phoneNumber;
  }

  sendmessage() {
    console.log(`Name: ${this.firstName}, Phone Number: ${this.phoneNumber}`);
  }
}

var newperson = new ContactCard("Henry", "1234567890");
newperson.sendmessage();

// 2 point play after touchdown!
var greeting = (person: IPersonContact) =>
  console.log(`Greeting! ${person.firstName} of phone - ${person.phoneNumber}`);
greeting(newperson);
