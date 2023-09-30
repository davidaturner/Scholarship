// getOwnProperties
var product = {
    name: 'Yeezy',
    price: 360,
    // d: 10,
    set discount(x) {
        this.d = x;
    },
    get discount() {
        return this.d;
    }
}

var product2 = Object.defineProperties(
    {},
    Object.getOwnPropertyDescriptors(product)
);
console.log(product2);