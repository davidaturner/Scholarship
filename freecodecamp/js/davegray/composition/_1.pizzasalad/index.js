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

    const ready = () => {
        return {
            // returns the ready function.
            ready: () => console.log("ready!")
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
