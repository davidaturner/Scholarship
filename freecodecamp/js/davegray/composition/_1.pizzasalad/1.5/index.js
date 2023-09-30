    const prepare = () => {
        return {
            prepare: () =>  console.log("preparing...")
        }
    }

    const bake = () => {
        return {
            bake: () => console.log("baking...")
        }
    }

    const toss = () => {
        return {
            toss: () => console.log("tossing...")
        }
    }

    const ready = () => {
        return {
            // returns the prepare function.
            ready: () => console.log("ready!")
        }
    }

    const stuff = () => {
        return {
            stuff: () => console.log("stuff...")
        }
    }

    const butter = () => {
        return {
            butter: () =>  console.log("butter...")
        }
    }

    const createPizza = (size, crust, sauce) => {
        const pizza = {
            size: size,
            crust: crust,
            sauce: sauce,
            toppings : []
        }

        return {
            ...pizza,
            ...prepare(),
            ...bake(),
            ...ready()
        }
    }

    const createSalad = (size, dressing) => {
        const salad = {
            size: size,
            dressing: dressing
        }

        return {
            ...salad,
            ...prepare(),
            ...toss(),
            ...ready()
        }
    }

    // So instead of using ES6 classes syntax with extends and super()..
    const createStuffedButteredCrustPizza = (pizza) => {
        return {
            ...pizza,
            ...stuff(),
            ...butter()
        }
    }

    const davesPizza = createStuffedButteredCrustPizza(
                    createPizza("small","Chicago-style", "red"));
    const davesSalad = createSalad("large", "thousand islands");

    davesPizza.bake();
    davesPizza.butter();
    console.log(davesPizza);

    davesSalad.toss();
    console.log(davesSalad);
