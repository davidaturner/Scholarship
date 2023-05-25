let person1 = {
  firstName: 'John',
  lastName: 'Smith',
  getFullName: function() {
    console.log(person1.firstName + ' ' + person1.lastName);
  }
}
person1.getFullName();

let person2 = {
  firstName: 'John',
  lastName: 'Smith',
  getFullName: function() {
    console.log(this.firstName + ' ' + this.lastName);
  }
}
person2.getFullName();

let carMiles = {
  odometer: 5000,
  traveled: 250,
  getUpdatedOdometer: function() {
    console.log(this.odometer + this.traveled);
  }
};

carMiles.getUpdatedOdometer();

