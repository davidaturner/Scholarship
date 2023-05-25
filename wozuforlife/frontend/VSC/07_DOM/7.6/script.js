// var div1 = document.getElementById("div1")
//                 .addEventListener('click', removeAChild());
function removeAChild() {
    var parentNode = document.getElementById("div1");
    console.log(parentNode.innerHTML);
    var childNode = document.getElementById("p1");
    parentNode.removeChild(childNode);
    console.log(parentNode.innerHTML);
}

 var addAChild = () => {
    let newElem = document.createElement("div");
    newElem.innerHTML = "This is a new Element created by appendChild()";
    let container = document.getElementById("container");
    container.appendChild(newElem);
    console.log(container.innerHTML);
}
        
var myFunction = () => {
    var list = document.getElementById("myList");
    list.removeChild(list.childNodes[0]);
    console.log(list.innerHTML);
}