var joesmite = {
    "firstname" : "John",
    "lastname": "Smite"
}

var json_string = JSON.stringify(joesmite);

console.log(json_string);
console.log(typeof(json_string));

var js_object = JSON.parse(json_string);

console.log(js_object);
console.log(typeof(js_object));