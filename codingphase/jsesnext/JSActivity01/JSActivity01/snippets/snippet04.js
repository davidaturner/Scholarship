// Default values
var dealership = function (owner, numOfCars) { return owner + " has " + numOfCars + " cars at all times."; };
console.log(dealership('Barbie', '3000'));
var dealer = function (owner, numOfCars) {
    if (numOfCars === void 0) { numOfCars = 2000; }
    return owner + " has " + numOfCars + " cars at all times.";
};
console.log(dealer('Carmen'));
console.log(dealer('Carmen', 5000));
//# sourceMappingURL=snippet04.js.map