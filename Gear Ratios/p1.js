const fs = require("fs")

const input = fs.readFileSync("day2.txt", "utf8").split("\n");

function isDigit(char) {
  return /\d/.test(char);
}
let number = ""
function signAround(i, j) {
  const directions = [
    [-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]
  ]
  for (const direction of directions) {
    const newI = i + direction[0];
    const newJ = j + direction[1];
    if (newI >= 0 && newI < input.length && newJ >= 0 && newJ < input[newI].length) {
      if (!/[0-9.]/.test(input[newI][newJ])) {
        return true
      }
    }
  }
  return false
}
let result = 0;
let isValid = false;
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (isDigit(input[i][j])) {
      while (isDigit(input[i][j])) {

        if (signAround(i, j)) {
          isValid = true;
        }
        number += input[i][j];
        j++;
      }
      j--;
    }
    else {
      if (number) {
        if (isValid) {
          result += parseInt(number)
        }

      }
      if (number) {
        number = ''
        isValid = false;
      }
    }
    if (number) {
      if (isValid) {
        result += parseInt(number)
      }
      number = ''
      isValid = false;
    }
  }
}
console.log(result)
