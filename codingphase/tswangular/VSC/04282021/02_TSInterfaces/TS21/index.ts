export { };

let something = {
    name: "something"
}

let someone = {
    name: "someone"
}

interface Something {
    name: string;
}

let welcome = (something : Something) =>
    console.log(
        `Lets do ${something.name} fun!`
    );

let signedoff = (something: Something) => console.log(`Lets do ${something.name} fun!`);

welcome(something);
signedoff(someone);

const somethingFun = "Lets do something fun!";
console.log(somethingFun);