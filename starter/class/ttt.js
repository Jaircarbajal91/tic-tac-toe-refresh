const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('up', 'move up', this.cursor.up);
    Screen.addCommand('left', 'move left', this.cursor.left);
    Screen.addCommand('down', 'move up', this.cursor.down);
    Screen.addCommand('right', 'move up', this.cursor.right);
    Screen.addCommand('enter', 'choose placement', this.cursor.right);

    // Screen.setGrid(0, 0, char)
    // Screen.setTextColor(row, col, color)
    // Screen.setBackgroundColor(row, col, color)

    Screen.render();
  }

  // Remove this
  // static testCommand() {
  //   console.log("TEST COMMAND");
  // }

  static checkWin(grid) {
    let transposed = transpose(grid);

    let horizontalWin = grid.reduce((winner, row) => {
      if (row.every((el) => el === 'X')) winner = 'X';
      if (row.every((el) => el === 'O')) winner = 'O';
      return winner;
    },'')
    let verticleWin = transposed.reduce((winner, col) => {
      if (col.every((el) => el === 'X')) winner = 'X';
      if (col.every((el) => el === 'O')) winner = 'O';
      return winner;
    },'')

    let tie = grid.reduce((tie, row)=> {
      if (row.some(el => el === ' ')) tie = '';
      return tie;
    }, 'T')

    let diagonal1 = [grid[0][0], grid[1][1], grid[2][2]];
    let diagonal2 = [grid[0][2], grid[1][1], grid[2][0]];

    let diagonalWin;
    if (diagonal1.every(e => e === 'X')) {
      diagonalWin = 'X'
    }
    if (diagonal2.every(e => e === 'X')) {
      diagonalWin = 'X'
    }
    if (diagonal1.every(e => e === 'O')) {
      diagonalWin = 'O'
    }
    if (diagonal2.every(e => e === 'O')) {
      diagonalWin = 'O'
    }
    
    if (diagonalWin) {
      return diagonalWin;
    }
    if (horizontalWin) {
      return horizontalWin;
    }
    if (verticleWin) {
      return verticleWin
    }
    if (tie) {
      return tie;
    }
    return false;
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

const transpose = function(matrix) {
  let result = [];
  matrix[0].forEach(row => result.push([]));
  for (let i = 0; i < matrix[0].length; i++) {
    let row = matrix[i];
    for (let j = 0; j < matrix.length; j++) {
      let elInCol = matrix[j][i];
      result[i].push(elInCol)
    }
  }
  return result;
}

module.exports = TTT;
