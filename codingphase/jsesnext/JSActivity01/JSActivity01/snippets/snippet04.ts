// Default values
const dealership = (owner, numOfCars) => `${owner} has ${numOfCars} cars at all times.`;
console.log(dealership('Barbie', '3000'));

const dealer = (owner, numOfCars = 2000) => `${owner} has ${numOfCars} cars at all times.`;
console.log(dealer('Carmen'));
console.log(dealer('Carmen', 5000));

