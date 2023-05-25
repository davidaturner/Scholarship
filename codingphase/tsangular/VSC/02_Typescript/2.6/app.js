"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let joe = {
    username: "Joe",
    state: "NY",
    age: 31,
    city: "New York City"
};
let welcome = (user) => {
    console.log(`Welcome ${user.username}, age ${user.age}. ${user.city}. ${user.state}!`);
};
let signoff = (user) => {
    console.log(`Goodbye ${user.username}. You are signed out.`);
};
welcome(joe);
signoff(joe);
