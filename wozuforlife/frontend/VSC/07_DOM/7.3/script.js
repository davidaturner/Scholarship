// Below the variable "myButton" is accessing the button element above by its "id"
var myButton = document.getElementById("submitButton");
myButton.addEventListener("click", function(){
  console.log("Click!!");
})

document.querySelector("#formbutton").addEventListener("click", function() {
    // console.log("Form!")
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    console.log(firstName + " " + lastName);
    console.log(email);
})


// Below the variable fruit is accessing all tags of "li"
var fruit = document.getElementsByTagName("li");
console.log(fruit[0].innerHTML);
console.log(fruit[1].innerHTML);
console.log(fruit[2].innerHTML);

var text = document.getElementsByClassName("paragraph");
console.log(text);

var textinner = document.getElementById("paragraph").innerHTML;
console.log(textinner);
// var text2 = document.getElementById("paragraph").innerHTML;

document.getElementById("paragraph").innerHTML = textinner + " and I am awesome!";
textinner = document.getElementById("paragraph").innerHTML;
console.log(textinner);

