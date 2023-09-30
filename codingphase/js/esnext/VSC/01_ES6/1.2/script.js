function userNamev1(name) {
    return name;
}
console.log(userNamev1('Joe'));

var userNamev2 = name =>  name;
console.log(userNamev2('Frank'));

var userNamev3 = (firstname, lastname) => firstname + " " + lastname;
console.log(userNamev3("Franken", "Further"));

var userNamev4 = () => "Joe Santos";
console.log(userNamev4());