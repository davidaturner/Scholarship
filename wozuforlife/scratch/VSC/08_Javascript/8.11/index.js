// Say you need the value of a paragraph tag because you need to work with that 
// text in JavaScript. To be able to retrieve that text, you have to use 
// .innerHTML. You may be tempted to think using .value will retrieve the HTML, 
// but it won't. .value is designed to pull in the values of input fields, not 
// the data of preexisting HTML.

var text = document.getElementById("paragraph").innerHTML;

var textAwesome = document.getElementById("paragraph").innerHTML = 
text + " and I am awesome!";

document.getElementById("emptyParagraph").innerHTML = "I am an empty paragraph"
alert(emptyParagraph);