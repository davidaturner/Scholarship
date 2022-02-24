export {};

function print(games: string, points: number) {
  console.log(`You got ${points} in your last ${games} games.`);
}

let impprint = (game: string, points: number) =>
  console.log(`You got ${points} points in your last ${game} game.`);

impprint("Baseball", 3);
let a: number = 32;
let b: string = "Billy";
let c: boolean = false;
let d: null = null;
let e: object = {
  firstname: "Joe",
  lastname: "Santos",
};
let f: undefined;
let g: any = "J";
let h: any[] = ["Billy", 32, null];
let i: Array<string> = ["Joe", "Santos"];
let j: Array<number> = [23, 44, 45, 0];

console.log(i);