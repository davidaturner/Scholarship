class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

let myCar = new Vehicle("Nissan", "Rogue", 2017);
console.log(myCar);