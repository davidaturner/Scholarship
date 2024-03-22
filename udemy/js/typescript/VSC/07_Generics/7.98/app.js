// create function that checks a string or Array length
// then show the appropriate description.
function countAndDescribe(element) {
    var descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Cooking", "Cleaning"]));
console.log(countAndDescribe([]));
var Scripter = /** @class */ (function () {
    function Scripter(s) {
        this.title = "A Hard Day's Night";
        this.script = [];
        this.length = 0;
        this.script = s;
        this.length = s.length;
    }
    return Scripter;
}());
// let test = new Scripter(["This is just", "A test"]);
console.log(countAndDescribe(new Scripter(["This is just", "A test"])));
function getTitle(obj, key) {
    return "Value: " + obj[key];
}
console.log(getTitle(new Scripter(["Well hello, Dolly!", "Looking swell, Dolly!"]), "title"));
