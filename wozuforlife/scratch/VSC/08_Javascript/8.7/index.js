// Global scope
function numberCalculation(number1, number2) {
  var multiplyNumbers = number1 * number2;
  if (multiplyNumbers < 2000) {
    alert("I wish it was a bigger number");
  }
  else {
    alert("That's more like it!");
  }
}

numberCalculation(45, 78);
numberCalculation(15, 20);