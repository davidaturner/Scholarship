// print name 3 times
var i = 0;
while(i < 3) {
    console.log('John Santos');
    i++;
}

// create an array named brands containing 4 brands (strings); print all brands
var brands = ['Nestles', 'Hersey', 'Godiva', 'Sees'];
for(i of brands) {
    console.log(i);
}

// create an array of objects that have brand name, product and price. 
// print all objects in the following format "$(brand)'s $(product) cost $(cost)".
var chocolates = [
    {
        brand: 'Nestles',
        product: 'Chocolate A',
        cost: 1.25
    },
    {
        brand: 'Hersheys',
        product: 'Chocolate A',
        cost: 1.25
    },
    {
        brand: 'Godiva',
        product: 'Chocolate A',
        cost: 1.25
    },
    {
        brand: 'Sees',
        product: 'Chocolate A',
        cost: 1.25
    }
];

for(i of chocolates) {
    console.log(`${i.brand}'s ${i.product} cost ${i.cost}`);
}