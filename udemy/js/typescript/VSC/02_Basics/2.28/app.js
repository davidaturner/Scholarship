function add(n1, n2) {
    return n1 + n2;
}
function printResult(n) {
    console.log("result: ".concat(n));
}
// callback
function addAndHandle(n1, n2, callbackfn) {
    callbackfn(add(n1, n2));
}
addAndHandle(13, 21, function (result) { console.log(result); });
addAndHandle(3, 14, printResult);
