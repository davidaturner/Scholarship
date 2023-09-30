// make all TS exports. Add statement.
export {};

let joe = {
    username : "Joe",
    state: "NY",
    age: 31,
    city: "New York City"
};

// create a strongly typed template.
// help catches errors before runtime.
interface User {
    username: string,
    state: string,
    age: number,
    city: string
}

let welcome = (user: User) => {
    console.log(`Welcome ${user.username}, age ${user.age}. ${user.city}. ${user.state}!`)
}

let signoff = (user: User) => {
    console.log(`Goodbye ${user.username}. You are signed out.`);
}
welcome(joe);
signoff(joe);
