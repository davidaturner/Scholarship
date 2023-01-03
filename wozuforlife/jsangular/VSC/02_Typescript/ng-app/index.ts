function identityCheckt<T>(argument: T[]): T[] {
    console.log(argument.length);
    return argument;
}

let groceryList: string[] = ['bread', 'milk', 'butter', 'cookies'];

let mygroceries: Array<string> = ['bread', 'milk', 'butter', 'cookies'];

interface lengthProperty {
    length: number;
}

function identityCheck<T extends lengthProperty>(argument: T): T {
    console.log(argument.length);
    return argument;
}