// npm init
// edit app.ts
// edit package.json script - "start" : "tsc -b && node app.js"

// make all TS exports. Add statement.
export {};

let game = "basketball"; // game is set to a string.
// let game:any = "basketball"; //game is set to any

function printnews(hisgame:string) {
// function printnews(hisgame:any) {
    console.log(`Billy got 20 points in his last ${hisgame} game.`);
}

printnews(game);
// game = 2;         // cannot be a number; already defined as a string.
game = "2";         // cannot be a number; already defined as a string.
printnews(game);

let a:number= 1;
let b:string = "string";
let c:boolean = true;
let d:null = null;
let e:object = {};
let f:undefined= undefined;
// let g:void = null;
let h:any = "string";
