interface Person {
    firstName: string;
    lastName?: string | undefined;
}

interface Contact {
    phoneNumber: number;
    email?: string;
}

class PersonContact implements Person, Contact {
    firstName: string;
    phoneNumber: number;

    constructor(firstName: string, phoneNumber: number) {
        this.firstName = firstName;
        this.phoneNumber = phoneNumber;
    }

    sendMessage() : void {
        console.log(`Name: ${this.firstName}, Phone Number: ${this.phoneNumber}`);
    }
}

var newPerson = new PersonContact("Henry", 1234567890);
newPerson.sendMessage();