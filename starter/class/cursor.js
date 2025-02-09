const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  up() {
    if (this.row > 0) {
      this.row = this.row - 1;
    }
    return this.row
  }

  down() {
    if (this.row < 2) {
      this.row = this.row + 1;
    }
    return this.row
  }

  left() {
    if (this.col > 0) {
      this.col = this.col - 1
    }
    return this.col
  }

  right() {
    if (this.col < 2) {
      this.col = this.col + 1
    }
    return this.col
  }

}


module.exports = Cursor;
