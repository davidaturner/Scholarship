// Both JavaScript arrays and objects may contain multiple values. So what's the 
// difference?

// Arrays are typically used to store a collection of the same type of items. For 
// instance, earlier you saw an example of an array colors that contained multiple 
// color values (as strings). If you had several school classes you were taking, they 
// could all be stored in an array. Arrays are ordered lists, and each item of an 
// array has a numerical position (referred to as an index): The first item has an index 
// of 0, the second item in the array has an index of 1, and so on. You will learn more 
// about this soon.

// Objects, on the other hand, are typically used to store multiple values for a single 
// item. In the example above, you saw many properties for the vehicle object — each 
// property has a value specific to that vehicle. If you needed to store multiple vehicle 
// objects, each with their own set of properties, you would use an array.

// It is helpful to think of Objects as Arrays with each value having a named index 
// instead of an numerical index. If we tried to declare the same vehicle above as an 
// array it might look something like this:
var vehicle = ["Toyota", "Tacoma", 3980, "Red", 4, true];
console.log(vehicle);

var vehicle = {
    make: "Toyota",
    model: "Tacoma",
    weightInPounds: 3980,
    color: "Red",
    numberOfDoors: 4,
    fourWheelDrive: true
}
console.log(vehicle);