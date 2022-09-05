const body = document.body

// createElement. NOTE: creates an element. you must still attach it to DOM.
const h1 = document.createElement('h1')
// textContent is useful if you need to see more than just text (in console.log)
// shows tags as invisible elements.
// h1.textContent = "<span>Hello, World!</span>"
// innerText is displayed in console.log as if html.
// i.e might be affected by display property, such as display: none
h1.innerText = "Hello, WWorld!"
body.append(h1)
