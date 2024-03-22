// Think of a number between 1 - 10.
// Can be 1 or 10 or any number in between.
// Make a guess will tell if value is higher or lower.
// Until guess match value.
let numberOfTries = 0;
class GuessingGame {
    constructor() {
        this.isCorrect = false;
        this.answer = 1;
        this.guesses = [];
    }
    getAnswer() {
        return this.answer;
    }
    setAnswer(a) {
        this.answer = a;
    }
    getGuesses() {
        return this.guesses;
    }
    setGuesses(g) {
        this.guesses = g;
    }
    play() {
        for (let choose = 0; choose < this.guesses.length; choose++) {
            let guess = this.guesses[choose];
            console.log("Is it " + guess + "?");
            if (guess === this.answer) {
                console.log("Correct!");
                this.isCorrect = true;
                break;
            }
            else if (guess < this.answer) {
                console.log("Too LOW!");
            }
            else {
                console.log("Too HIGH!");
            }
        }
    }
}
let answer = 3;
const johns_guesses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const brittany_guesses_3 = [5, 2, 3];
const brittany_guesses_10 = [5, 8, 9, 10];
const game = new GuessingGame();
game.setAnswer(answer);
// game.setGuesses(johns_guesses);
// game.play();
// game.setGuesses(brittany_guesses_3);
// game.play();
// try again now the answer = 10;
answer = 10;
game.setAnswer(answer);
// game.setGuesses(johns_guesses);
// game.play();
game.setGuesses(brittany_guesses_10);
game.play();
