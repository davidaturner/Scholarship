// async iteration

const routine = [
    new Promise(resolve => resolve("Wash your face")),
    new Promise(resolve => resolve("Make your bed")),
    new Promise(resolve => resolve("Eat breakfast")),
    new Promise(resolve => resolve("Straight up your room")),
    new Promise(resolve => resolve("Code"))
]

async function runRoutine() {
    for await (var step of routine) {
        console.log(step);
    }
}

runRoutine();
