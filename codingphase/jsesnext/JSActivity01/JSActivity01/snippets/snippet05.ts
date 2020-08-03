// Rest operator
const sn05names = function (a, b, c) {
    const arr = [a, b, c];
    console.log(arr);
};

sn05names("Abraham", "Martin", "John");

// ...
const sn05names01 = function (...names) {
    console.log(names);
}

sn05names01("Abraham", "Martin", "John", "Bobby");
sn05names01("Abraham", "Martin", "John", "Bobby", "Toliver", "Saint");
sn05names01("Abraham", "Martin", "John", "Bobby", "Toliver", "Krispin", "Saint");

