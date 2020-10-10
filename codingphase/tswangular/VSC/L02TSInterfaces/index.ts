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

let login = (user: User) =>
  console.log(
    `Welcome ${user.name}, ${user.age} of ${user.city}, ${user.state}.`
  );

let logout = (user: User) => console.log(`Goodbye ${user.name}!`);

login(user);
logout(user);