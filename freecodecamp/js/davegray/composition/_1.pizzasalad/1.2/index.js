class pizza {
    constructor(size, crust, sauce) {
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.toppings = [];
    }
    prepare() {
        console.log("preparing...")
    }
    bake() {
        console.log("baking...");
    }
    ready() {
        console.log("ready!")
    }
}

// DRY - don't repeat yourself
class Salad {
    constructor(size, dressing) {
        this.size = size;
        this.dressing = dressing;
    }
    prepare() {
        console.log("preparing...")
    }
    toss() {
        console.log("tossing");
    }
    ready() {
        console.log("ready!")
    }
}

// Solution 1: create parent class
class Dish {
    constructor(size) {
        this.size = size;
    }
    prepare() {
        console.log("preparing...")
    }
    ready() {
        console.log("ready!")
    }
}