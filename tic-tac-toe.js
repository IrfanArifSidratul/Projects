/*  A simple Tic-Tac-Toe game
Players 'X' and 'O' take turn inputing their position on the command line using numbers 1-9
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
*/

// importing user import library
// missed ({sigint: true});
const prompt = require('prompt-sync')({sigint: true});

let board = {
    1: ' ', 2: ' ', 3: ' ',
    4: ' ', 5: ' ', 6: ' ',
    7: ' ', 8: ' ', 9: ' '
};

// TODO: update the gameboard with the user input
function markBoard(position, mark) {
    uMark = mark.toUpperCase();
    return board[position] = uMark;
}

// TODO: print the game board as described at the top of this code skeleton
function printBoard() {
    console.log("\n" + board[1] + " | " + board[2] + " | " + board[3] + "\n ------------" + "\n" + board[4] + " | " + board[5] + " | " + 
    board[6] + "\n ------------" + "\n" + board[7] + " | " + board[8] + " | " + board[9] + "\n");
}


// TODO: check for wrong input, this function should return true or false.
// true denoting that the user input is correct
// you will need to check for wrong input (user is entering invalid position) or position is out of bound
// another case is that the position is already occupied
function validateMove(position) {
    pos = Number(position);
    if((pos > 0 && pos < 10) && (board[pos] !== "X" && board[pos] !== "O")){
      return true;
    }
      else{
        return false;
      }
}

// TODO: list out all the combinations of winning, you will neeed this
// one of the winning combinations is already done for you
let winCombinations = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]
];

// TODO: implement a logic to check if the previous winner just win
// This method should return with true or false
function checkWin(player) {
    if(board[1] == player && board[2] == player && board[3] == player){
        return true;
    }
    else if(board[4] == player && board[5] == player && board[6] == player){
        return true;
    }
    else if(board[7] == player && board[8] == player && board[9] == player){
        return true;
    }
    else if(board[1] == player && board[4] == player && board[7] == player){
        return true;
    }
    else if(board[2] == player && board[5] == player && board[8] == player){
        return true;
    }
    else if(board[3] == player && board[6] == player && board[9] == player){
        return true;
    }
    else if(board[1] == player && board[5] == player && board[9] == player){
        return true;
    }
    else if(board[3] == player && board[5] == player && board[7] == player){
        return true;
    }
    else{
        return false;
    }
}

// TODO: implement a function to check if the game board is already full
// For tic-tac-toe, tie bascially means the whole board is already occupied
// This function should return with boolean
function checkFull() {
    let i = 0;
    counter = 0;
      while(i<9){
        if(board[i] == "X" || board[i] == "O"){
          counter++;
        }
        else{
        }
      i++;
        }

      if (counter == 8){
        return true;
      }
      else{
        return false;
      }
}

// *****************************************************
// Copy all your code/fucntions in Part 1 to above lines
// (Without Test Cases)
// *****************************************************


// TODO: the main part of the program
// This part should handle prompting the users to put in their next step, checking for winning or tie, etc
// feel free to add logic here if needed, e.g. announcing winner or tie
let a = 0;
player = "X";
let s = 0;

function playTurn(player){
    pos = Number(prompt("X, What is your move?:\t"));
    validateMove(pos);
    while(validateMove(pos) == false){
        pos = Number(prompt("You can't do that. Play another move:\t"))
    }
    board[pos] = player;
    printBoard();
    checkWin(player);
    //console.log(checkWin(player)); // for test purpose
    if(checkWin(player) == true){
        console.log('"' + player + '"' + " wins!\n");
        return a = 1;
    }
    else{
    checkFull();
    //console.log(checkFull()); // for test purpose
    if(checkFull()== true){
        console.log("You draw, nobody wins\n");
        return a = 1;
    }
    }

    player = "O";
    pos = Number(prompt("O, What is your move?:\t"));
    validateMove(pos);
    while(validateMove(pos) == false){
        pos = Number(prompt("You can't do that. Play another move:\t"))
    }
    board[pos] = player;
    printBoard();
    checkWin(player);
    //console.log(checkWin(player)); // for test purpose
    if(checkWin(player) == true){
        console.log('"' + player + '"' + " wins!\n");
        return a = 1;
    }
    else{
    checkFull();
    //console.log(checkFull()); // for test purpose
    if(checkFull()== true){
        console.log("You draw, nobody wins!\n");
        return a = 1;
    }
    }
}

// entry point of the whole program
console.log('Game started: \n\n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');

do{while (a !== 1){
    playTurn(player);

}
// Bonus Point: Implement the feature for the user to restart the game after a tie or game over
Again = prompt("Do you want to play again? (Y/N): " );
Again1 = Again.toUpperCase();
if(Again1 === "Y"){
  s = 1;
  a = 0;
  board = {
    1: ' ', 2: ' ', 3: ' ',
    4: ' ', 5: ' ', 6: ' ',
    7: ' ', 8: ' ', 9: ' '
};
console.log('Game started: \n\n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');
}
else{
  s = -1;
  console.log("Thank you for playing!\n")
}
}while(s>=0);