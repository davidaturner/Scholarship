const GAME_NOT_OVER = 0
const X_WON = 1
const O_WON = 2
const DRAWS = 3

const NUMBER_IN_A_ROW = 3

function Position() {
    this.movesleft = 9
    this.pX = new Array()
    this.pO = new Array()
    this.positionStatus = 0;        // 0 - No result
                                    // 1 - X won
                                    // 2 - O won
                                    // 3 - Draws
}

// Evaluate position
const Solutions = [
    [0, 1, 2],      //top row all same
    [3, 4, 5],      //middle row all same
    [6, 7, 8],      //bottom row all same
    [0, 3, 6],      //left column all same
    [1, 4, 7],      //middle column all same
    [2, 5, 8],      //right column all same
    [0, 4, 8],      //left diagonal all same
    [2, 4, 6]       //right diagonal all same
]

Position.prototype.evaluate = function(choices) {

    if (choices.length < NUMBER_IN_A_ROW) return false;
    console.log(choices) 
    let match_found = false;    
    for(let i=0; i<Solutions.length; i++) {
        for(let j=0; j<NUMBER_IN_A_ROW; j++) {
            if (choices[j] == Solutions[i][j]) {
                match_found = true
                continue
            }
            match_found = false;
            break;
        }
        if (match_found == true) break
    }
    
    return match_found;

}

// Getters and Setters
Position.prototype.getX = function() {
    return this.pX
}

Position.prototype.getO = function() {
    return this.pX
}

Position.prototype.addToX = function(choice) {
    this.pX.push(choice)
    this.pX.sort(function (a, b) {
        return a - b
    })
    this.movesleft -= 1
    if (this.evaluate(this.pX)) {
        this.positionStatus = X_WON
    }
}

Position.prototype.addToO = function(choice) {
    this.pO.push(choice)
    this.pO.sort(function (a, b) {
        return a - b
    })
    this.movesleft -= 1
    if (this.evaluate(this.pO)) {
        this.positionStatus = O_WON
    }
}

Position.prototype.isGameOver = function() {
    return (this.positionStatus > 0)
}

Position.prototype.getPositionStatus = function() {
    if (this.positionStatus==X_WON) {
        return "X Won!"
    } else if (this.positionStatus==O_WON) {
        return "O Won!"
    } else if (this.positionStatus==DRAWS) {
        return "Draws."
    } else {
        return "No result. Continue?"
    }
}

Position.prototype.setPositionStatus = function(positionStatus) {
    this.positionStatus = positionStatus;
}

Position.prototype.getMovesLeft = function() {
    return this.movesleft
}

Position.prototype.decrementMovesLeft = function() {
    if (this.movesleft) {
        this.movesleft -= 1
    }
}

Position.prototype.noMovesLeft = function() {
    return (this.movesleft == 0);
}