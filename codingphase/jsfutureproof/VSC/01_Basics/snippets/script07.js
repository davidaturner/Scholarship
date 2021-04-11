// alert('Hello from JS')

// Array
var users = ["Matt", "Cam", "Barbara", "Bryant", "Joseph"]
console.log(users)
console.log(users[2])

var fruits = ["Apple", "Figs", "Berries", "Bananas"]
fruits.push("Pears")
console.log(fruits)
console.log(fruits[1])

var fruit = fruits.pop()
console.log(fruit)
console.log(fruits)

fruit = fruits.splice(1,2)
console.log(fruit)
console.log(fruits)
fruits.push(fruit)
console.log(fruits)
console.log(fruits.length)
fruits.pop()
fruits.push(fruit[0])
console.log(fruits)

fruits.push("Currants")
console.log(fruits.reverse())
fruits.sort()
console.log(fruits)
