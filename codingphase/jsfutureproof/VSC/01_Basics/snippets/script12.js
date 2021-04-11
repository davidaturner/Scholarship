// alert('Hello from JS')

// Select one p
var firstp = document.querySelector('p')
console.log(firstp.innerHTML)

firstp.style.background = 'purple'
firstp.style.color = 'white'

// Select second p
var allp = document.querySelectorAll('p')
for(i=0; i<allp.length; i++) {
    console.log(allp[i].innerHTML)    
}

allp[1].style.background = 'brown'
allp[1].style.color = 'white'

// Select last p
var lastp
for(i=0; i<allp.length; i++) {
    if (allp[i].className == 'lastp') {
        lastp = allp[i]
        console.log(lastp)
    }
}

lastp.style.background = 'red'
lastp.style.color = 'white'

// Create a button
var clickme = createButton('Click Me!', document.querySelector('p'))
var beerme = createButton('BeerMe!', document.querySelector('body'))

function createButton(label, parent) {
    // Create child that is a button
    var btn = document.createElement('button')
    // Create text for the child
    var btn_t = document.createTextNode(label)
    // Add text to the child
    btn.appendChild(btn_t)
    // Add button to division/body
    if (parent == undefined) {
        console.log("ERROR: Cannot locate parent.")
        return
    }
    parent.appendChild(btn)
    return btn
}

// Handle events
// 1. Html/JS solution (see index.html)
{/* <button onclick="helloWorld()">Push!</button> */}

// 2. JS only
clickme.onclick = function() {
    helloWorld()
}

// 3. JS addEventListener
beerme.addEventListener('click', function() {
    console.log("Hello from Listener!")
});

// helloWorld()
function helloWorld() {
    var demo = document.querySelector('.demo');
    console.log(demo)
    demo.innerHTML ="Hello World!";
}



