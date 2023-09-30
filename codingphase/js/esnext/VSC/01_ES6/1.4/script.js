// default value can be overrided

const cardealer = (name, totalCarsAvailable = 255) =>
{ return `${name} dealers has a total of ${totalCarsAvailable} cars available.`}

// console.log(cardealer("Buckwheat", 255));
console.log(cardealer("Buckwheat"));
console.log(cardealer("Buckwheat",211));