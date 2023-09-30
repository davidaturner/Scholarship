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

class stuffedCrustPizza extends Pizza {
    stuff() {
        console.log("stuffing...");
    }
}

class butteredCrustPizza extends Pizza {
    butter() {
        console.log("butter...");
    }
}

// Problem -- D.R.Y
class stuffedButteredCrustPizza extends Pizza {
    stuff() {
        console.log("stuffing...");
    }
    butter() {
        console.log("butter...");
    }
}