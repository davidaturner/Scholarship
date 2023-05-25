interface Person {
    firstName: string;
    lastName: string;
    birthday: Date;
}

class Entry implements Person {
    firstName: string;
    lastName: string;
    birthday: Date;

    constructor(firstName: string, lastName: string, birthday: Date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }
}

const newPerson = new Entry("Albert", "Einstein", new Date());
// First Name: Albert, Last Name: Einstein, Birthday: Wed May 14 1879 00:00:00 GMT-0700 (MST)
console.log(`First Name: ${newPerson.firstName} Last Name: ${newPerson.lastName}  Birthday: ${newPerson.birthday}`);
console.log(newPerson.birthday);
console.log("" + newPerson.birthday);


const numbers:Array<string> = ['twelve', 'one-hundred', 'sixteen', 'forty-four', 
                            'seventy-three', 'three-million'];
// const numbers = ['twelve', 'one-hundred', 'sixteen', 'forty-four', 
// 'seventy-three', 'three-million'];

function sortArray<S>(array: S[]): S[] {
    return array.sort();
}

console.log(`Before: ${numbers}`);
// const after = numbers.sort();
console.log(`After: ${sortArray(numbers)}`);