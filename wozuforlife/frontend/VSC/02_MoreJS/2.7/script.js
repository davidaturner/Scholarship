// Given the user object, add a method named fullName that concatenates the 
// firstName and lastName with a space in between. Remember to use this and be 
// sure to return the concatenated result.
let user = {
    firstName : "John",
    lastName : "Costly",
    fullName : function () {
        return this.firstName + " " + this.lastName
    }
}
console.log(user.fullName())
// In the product object that is provided, the cost and deliveryFee are in US 
// dollars. Add a method named newPayments to the product object that sums the 
// cost and deliveryFee and returns the result in cents (multiply by 100). Remember 
// to use this and to return the result.
let product = {
    cost : 1.23,
    deliveryFee : 0.07,
    newPayments : function() {
        return (this.cost + this.deliveryFee) * 100;
    }
}
console.log(product.newPayments())