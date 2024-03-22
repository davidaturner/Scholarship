// index properties.
interface ErrorContainer {
    [prop: string]:string;
}

const myErrors : ErrorContainer = {

    // email: 101, error
    email: "Email not found",
    username: "Username not found"
}

console.log(myErrors.email);




