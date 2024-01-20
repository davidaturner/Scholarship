var person1;
person1 = {
    name: 'Max',
    age: 19,
    greet: function (phase) {
        console.log(phase + " " + this.name + "!");
    }
};
person1.greet("Hi! My name is");
