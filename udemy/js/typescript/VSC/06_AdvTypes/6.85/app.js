"use strict";
function moveAnimal(a) {
    let speed;
    switch (a.type) {
        case 'bird':
            return a.flyingSpeed;
        case 'horse':
            return a.runningSpeed;
    }
}
console.log(moveAnimal({ type: 'bird', flyingSpeed: 12 }));
