
let result = [];

function findEmptyCell(row) {
  let cell = [-1, -1];
  for (var i = row; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (result[i][j] === 0){
        cell = [i, j];
        return cell;
      }
    }
  }
  return cell;
}

function checkRow(row, item) {
  for (var col = 0; col < 9; col++){
    if (result[row][col] === item){
      return false;
    }
  }
  return true;
}

function checkCol(col, item) {
  for (var row = 0; row < 9; row++){
    if (result[row][col] === item){
      return false;
    }
  }
  return true;
}

function checkBox(row, col, item) {
  row = Math.floor(row / 3) * 3;
  col = Math.floor(col / 3) * 3;

  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (result[row + i][col + j] === item){
        return false;
      }
    }
  }

    return true;
}

function mainRecurs(row, col) {
    var cell = findEmptyCell(row);
    row = cell[0];
    col = cell[1];
    if (row == -1) {
        return true;
    }
    for (var item = 1; item < 10; item++) {
      if ( checkRow(row, item) && checkCol(col, item) && checkBox(row, col, item) ) {
        result[row][col] = item;
        if ( mainRecurs(row, col) ) {
          return true;
        }
        result[row][col] = 0;
      }
    }
  return false;
}

module.exports = function solveSudoku(matrix){
  result = matrix;
  mainRecurs(0, 0);
  return result;
 }
