// get product and price
// print price

// var products = [];
var products = [{
    id: 1,
    name: "Sneakers",
    price: 300
}]

const haveProducts = () => { return products.length > 0 };

const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (haveProducts()) {
            resolve(products);
        } else {
            reject('No products returned.');
        }
    }, 2000);
})

getProducts
// promise 1
.then((products) => {
    console.log(products);
    return products[0]; // return product for next promise.
})
// promise 2
.then((product) => {
    console.log(product.price);
    return product.price;
})
// .then((price) => {
//     return price;
// })
.catch((error) => {
    console.log(error);
})

