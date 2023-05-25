class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + ".");
  }
}

let andrew = new Person("Andrew", 30);
let mike = new Person("Mike", 24);
let frank = new Person("Frank", 29);
andrew.greeting();
mike.greeting();
frank.greeting();