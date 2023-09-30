var myDetails = {
    name: "John",
    age: 35,
    position: "accountant",
    skills: {
        programming: ["Javascript", "PHP", "Python"],
        office: ["Microsoft Office", "Excel"]
    }
}

// three ways to use JSON stringify.

// use Javascript Object value.
console.log(JSON.stringify(myDetails));

// using optional replacer.
console.log(JSON.stringify(myDetails, ["name", "age"]));

// using optional replacer function.
function replaceMyDetailsWith(key, value) {
    if (key == "name" || key == "age") {
        return undefined;
    }
    return value;
}
console.log(JSON.stringify(myDetails, replaceMyDetailsWith));

// using optional space (number to ident by using whitespace)
console.log(JSON.stringify(myDetails, null, 3));