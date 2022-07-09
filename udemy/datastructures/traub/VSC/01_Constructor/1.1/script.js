
// Pre ES5 class defined
// function User(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.fullName = this.firstName + " " + this.lastName;    
// }

//Post ES5 class defined
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        // this.fullName = this.firstName + " " + this.lastName;
    }
}

// Add User property (to be applied to all instances)
User.prototype.emailDomain = "@earthlink.net";
User.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}

// Create instances.
let user1 = new User("John", "Smith", 46);
let user200 = new User("Martha", "Mydear", 12);

console.log(user1);
console.log(user200);
let fullName = user200.fullName();
console.log(fullName);

console.log(user200.firstName + user200.emailDomain); // user property


