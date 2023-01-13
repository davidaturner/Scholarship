function getValues() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    console.log("First Name: " + firstName);
    console.log("Last Name: " + lastName);
    console.log("Email: " + email);
    alert(firstName + " " + lastName + " " + email);
}

function clicker() {
  // parseInt .value
  var age = parseInt(document.getElementById('age').value);
  alert(age);
}

