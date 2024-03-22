interface Bird {
    type: 'bird',
    flyingSpeed : number
}

interface Horse {
    type: 'horse',
    runningSpeed : number
}

type Animal = Bird | Horse;

function moveAnimal (a : Animal) {
    let speed;
    switch (a.type) {
        case 'bird':
            return a.flyingSpeed;
        case 'horse':
            return a.runningSpeed;
    }
}

console.log(moveAnimal({type: 'bird', flyingSpeed: 12}));




