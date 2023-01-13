function Click() {
  // getElementById
  var myButton = document.getElementById("submitButton");
  alert(myButton.innerText);
}

function Listing() {
  // getElementsByTagName
  var fruit = document.getElementsByTagName("li");
  alert(fruit[0].innerText + " " + fruit[1].innerText  + " " + fruit[2].innerText);
}

function Paragraph() {
  // getElementsByClassName
  var text = document.getElementsByClassName("paragraph");
  alert(text[0].innerText);
}

