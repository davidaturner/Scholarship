export {};

let user = {
  name: "Joe Santos",
  age: 32,
  city: "New Haven",
  state: "CT",
};

interface User {
  name: string;
  age: number;
  city: string;
  state: string;
}

// Use of interface as a data type to
// guarantee strongly typed input parameters.
let welcome = (user: User) =>
  console.log(
    `Welcome ${user.name}, ${user.age} of ${user.city}, ${user.state}.`
  );

let signedoff = (user: User) => console.log(`Goodbye ${user.name}!`);

welcome(user);
signedoff(user);