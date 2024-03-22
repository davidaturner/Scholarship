
// If string use string.length.
// If Array use Array.length.
// Can't use a number since number type has no length.
interface Lengthy {
    length: number;
}

// create function that checks a string or Array length
// then show the appropriate description.
function countAndDescribe<T extends Lengthy>(element: T) : [T, string] {
    let descriptionText : string = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    } else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Cooking", "Cleaning"]));
console.log(countAndDescribe([]));

class Scripter implements Lengthy {
    public title: string = "A Hard Day's Night";
    public script: string[] = [];
    public length: number = 0;
    constructor(s: string[]) {
        this.script = s;
        this.length = s.length;
    }
}

// let test = new Scripter(["This is just", "A test"]);
console.log(countAndDescribe(new Scripter(["This is just", "A test"])));

function getTitle<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return "Value: " + obj[key];
}
console.log(getTitle(
    new Scripter(["Well hello, Dolly!", "Looking swell, Dolly!"]),
    "title"));