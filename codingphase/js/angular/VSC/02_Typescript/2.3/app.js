"use strict";
// npm init
// edit app.ts
// edit package.json script - "start" : "tsc -b && node app.js"
Object.defineProperty(exports, "__esModule", { value: true });
let game = "basketball"; // game is set to a string.
// let game:any = "basketball"; //game is set to any
function printnews(hisgame) {
    // function printnews(hisgame:any) {
    console.log(`Billy got 20 points in his last ${hisgame} game.`);
}
printnews(game);
// game = 2;         // cannot be a number; already defined as a string.
game = "2"; // cannot be a number; already defined as a string.
printnews(game);
