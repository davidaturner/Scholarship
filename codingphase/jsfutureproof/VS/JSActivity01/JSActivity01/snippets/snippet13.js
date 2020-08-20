// Control flow
var user1 = {
    name: "Nancy",
    age: 16,
    likes: 100
};
var user2 = {
    name: "Perry",
    age: 18,
    likes: 233
};
var user3 = {
    name: "Carla",
    age: 17,
    likes: 300
};

var ageverify = function (user) {
    if (user.age >= 18) {
        console.log(`Age verified. Thank you ${user.name}!`);
    } else {
        console.log(`Sorry, ${user.name}. You are too young.`);
    }
};

ageverify(user1);
ageverify(user2);
ageverify(user3);
console.log("=========================");

var impageverify = function (user) {
    if (user.age >= 18) {
        console.log(`Age verified. Thank you ${user.name}!`);
    } else if (user.age == 17) {
        console.log("See you next year buddy.");
    } else {
        console.log(`Sorry, ${user.name}. You are too young.`);
    }
};

impageverify(user1);
impageverify(user2);
impageverify(user3);
console.log("=========================");

function checklikes(user) {

    switch (user.likes) {
        case 100:
            console.log(`100 likes. Not bad. Keep trying ${user.name}!`);
            break;
        case 200:
            console.log(`200 likes. Pretty good ${user.name}!`);
            break;
        case 300:
            console.log(`300 likes! Your highest yet ${user.name}!`);
            break;
        default:
            console.log(`${user.name}, you have ${user.likes} likes. Try again?`);
            break;
    }
}

checklikes(user1);
checklikes(user2);
checklikes(user3);