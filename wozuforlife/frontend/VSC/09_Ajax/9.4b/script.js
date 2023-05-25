const example = document.getElementById("example")
                .addEventListener('click', loadDoc);
// const example = document.getElementById("example")
//                 .addEventListener('click', function() {
//             var xhttp = new XMLHttpRequest();
//             xhttp.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//                 document.getElementById("example").innerHTML =
//                 this.responseText;
//             }};
//             xhttp.open("GET", "info.txt", true);
//             xhttp.send();
// });

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        document.getElementById("example").innerHTML =
        this.responseText;
        }
    };
    xhttp.open("GET", "info.txt", true);
    // xhttp.open("GET", "xmlhttp_info.txt", true);
    xhttp.send();
}