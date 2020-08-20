//Loops
// For

/*
for (let i = 0; i < 11; i++) {
    console.log(i);
}
*/
var names = ["Janet", "Henry", "Pauline", "Mary", "Larry"];
/*
for (let i = 0; i < 5; i++) {
    console.log(names[i]);
}
*/
for (let i = 0; i < 5; i++) {
    console.log("==================");
    console.log(`Running LOOP: ${i + 1}...`);
    if (i == 3) {
        console.log(`Yeah. This is the ONE!`);
    }
    else {
        console.log(names[i]);
    }
}