function nameInfo() {
    var firstName = document.getElementById('firstName').value;
    var middleName = document.getElementById('middleName').value;
    var lastName = document.getElementById('lastName').value;
    var fullName = document.getElementById('fullName').innerHTML 
            = firstName + " " + middleName + " " + lastName;
}
// function MyFunction() {
//     alert("Hi There!");
// }
// function myFunction(event) { 
//   var x = event.target;
//   document.getElementById("demo").innerHTML = "Triggered by a " + x.tagName + " element";
// }