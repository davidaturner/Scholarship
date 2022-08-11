/*
    What is json?
    JavaScript Object Notation

    A format used to:
        Store data.
        Exchange data.

    1. Human Readable
    2. Language independent. Is not dependent on JS.
    3. Has support in all popular programming languages.
    4. Organized, easy to access

    Online JSON checker:
    https://jsonlint.com

    Free JSON API online:
    https://jsonplaceholder.typicode.com/
*/

// Checked. Valid JSON.
var myjson = {
    "persons": {
        "1" : {"firstname":"John", "lastname":"Smith", "interests":["reading", "games"]},
        "2" : {"firstname":"Kevin", "lastname":"Turner", "interests":null},
        "3" : {"firstname":"Anna", "lastname":"White", "interests":["music"]}
    }
}

var root = document.getElementById("root")
// root.innerText = JSON.stringify(myjson);

fetch('https://jsonplaceholder.typicode.com/todos/1')
// fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(response => response.json())
  .then(json => {
    root.innerText = JSON.stringify(json)
    // console.log(json)
  })


