// Loops exercise.

// console name three times in a loop.
for (let i = 0; i < 3; i++) {
    console.log('Joe');
}

// create an array of brands. add four brands. use a loop to console.
var brands = ["honda", "benz", "chevrolet", "audi"];
let j = 0;
for (i of brands) {
    console.log(i);
}

// create an array of objects. console the following: "(brandname)'s (product) cost (price)."
var cars = [
    {
        brandname: "honda",
        product: "civic",
        price: 17000
    },
    {
        brandname: "benz",
        product: "bonkers",
        price: 32000
    },
    {
        brandname: "chevrolet",
        product: "cavalier",
        price: 17000
    },
    {
        brandname: "audi",
        product: "quattro",
        price: 24000
    }
];
let brand = 0;
for (brand of cars) {
    console.log(`${brand.brandname}'s ${brand.product} costs $${brand.price} dollars.`);
}