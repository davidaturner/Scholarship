let heading = "<h1>Hello, World!</h1>";
let container = document.getElementById('container');
container.innerHTML = heading;
console.log(container.innerHTML);
container.innerHTML = "";

// alternative way to add heading
heading = document.createElement('h1'); // create the heading element
heading.innerHTML = "Hello World!" // add text to the element
container.appendChild(heading);  // insert the heading into the container
console.log(container.innerHTML);

// user input example
heading = document.createElement('h1'); // create the heading
heading.innerHTML = document.getElementById('message').value; // add the input value as text
document.getElementById('output').appendChild(heading); // append the heading to the div element
let output = document.getElementById('output');
console.log(output.innerText);