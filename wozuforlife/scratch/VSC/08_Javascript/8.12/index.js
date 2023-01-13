function myFunction(event) { 
  var x = event.target;
  document.getElementById("demo").innerHTML = "Triggered by a " + x.tagName + " element";
}