
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
