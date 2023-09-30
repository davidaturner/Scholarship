const body = document.body
const helloworld = document.createElement('h1')
// helloworld.innerText("<strong>Hello, World</strong>")

// helloworld.innerHTML = "<strong>Hello, World</strong>"
// body.append(helloworld)
// of course, using innerHTML invites Security Risk.

// the better more secure way is to use innerText
// and multiple appends
const strong = document.createElement('strong')
strong.innerText = 'Hello, World'
helloworld.append(strong)
body.append(helloworld)
