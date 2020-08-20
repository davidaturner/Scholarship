//Loops
//For 

var cars = ["honda", "ford", "benz"];
var i = 0;
for (i in cars) {
    console.log(cars[i]);
}

var carinfo = [
    {
        name: "accord",
        make: "honda"
    },
    {
        name: "f150",
        make: "ford"
    },
    {
        name: "spocket",
        make: "benz"
    }
];
i = 0;
for (i in carinfo) {
    console.log(carinfo[i].make);
};
console.log(i);

i = 0;
for (i of carinfo) {
    console.log(i);
}

i = 0;
for (i of carinfo) {
    console.log(i.make);
}