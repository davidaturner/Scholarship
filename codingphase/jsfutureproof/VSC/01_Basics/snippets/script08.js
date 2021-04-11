// alert('Hello from JS')

// Object
var barkleyjones = {
    id : 83,
    firstname: "Barkley",
    lastname: "Jones",
    greeting: function() {
        return ('my name is ' + this.firstname + " " + this.lastname)
    },
    declaregrade: function(theclass, grade) {
        console.log('my grade in ' + theclass + " is " + grade)
    },
    classes: ["Gym", "English", "Cooking", "Politics"]
}

console.log(barkleyjones.firstname)
console.log(barkleyjones.greeting())
barkleyjones.declaregrade('Cooking', '86')
console.log(barkleyjones.classes[0])
barkleyjones.classes.push("Calculus")
console.log(barkleyjones.classes)

barkleyjones.hasCar = {
    make: "Chevrolet",
    model: "Camaro",
    year: "2011",
    price: "10000",    
}
console.log(barkleyjones)

barkleyjones["graduationdate"] = "04/11/2019"
console.log(barkleyjones)
console.log(barkleyjones.greeting())

var produce = [
    {
        item: "apple",
        source: "dada farms"
    },
    {
        item: "pear",
        source: "corporal tunnel farms"
    },
    {
        item: "currant",
        source: "aster martin produce"
    },
]

console.log(produce[1].item)
console.log(produce)
produce[2]["status"] = "suspended"
console.log(produce)
