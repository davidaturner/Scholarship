function printjoe() {
    console.log("Joe");
    console.log("Santos");
}
var printjoealt = () => {
    console.log("Joe");
    console.log("Santos");
}
printjoe();
printjoealt();
console.log(printjoe.toString());
console.log(printjoealt.toString());

