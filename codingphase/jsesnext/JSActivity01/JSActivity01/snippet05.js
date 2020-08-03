// Rest operator
var sn05names = function (a, b, c) {
    var arr = [a, b, c];
    console.log(arr);
};
sn05names("Abraham", "Martin", "John");
// ...
var sn05names01 = function () {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    console.log(names);
};
sn05names01("Abraham", "Martin", "John", "Bobby");
sn05names01("Abraham", "Martin", "John", "Bobby", "Toliver", "Saint");
sn05names01("Abraham", "Martin", "John", "Bobby", "Toliver", "Krispin", "Saint");
//# sourceMappingURL=snippet05.js.map