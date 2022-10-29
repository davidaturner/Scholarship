// Arrays have mixed values, including functions.
console.log("Hello, World!")
var things = [1, "2", 3]
console.log(things)
console.log(things[1])
var morethings = [1, "2", 3, function(){
    console.log("Hello, World!")
}]
var helloworld = morethings[3]
helloworld()
morethings[3]()