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
