const fs = require("fs");

const input = fs.readFileSync("day2.txt", "utf8").split("\n");

let lastStar = {
  i: 5,
  j: 10
};


function aroundStars(i, j) {
  const directions = [
    [-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]
  ]
  for (const direction of directions) {
    const newI = i + direction[0];
    const newJ = j + direction[1];
    if (newI >= 0 && newI < input.length && newJ >= 0 && newJ < input[newI].length) {
      if ((input[newI][newJ]) == '*') {
        lastStar.i = newI; lastStar.j = newJ
        return true
      }
    }
  }
  return false
}
function isDigit(char) {
  return (/\d/.test(char))
}
const store = []
let isNear = false;
let number = ''
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].length; j++) {
    if (isDigit(input[i][j])) {
      while (isDigit(input[i][j])) {
        if (aroundStars(i, j)) {
          isNear = true
        }
        number += input[i][j]
        j++
      }
      j--
    }
    else {
      if (number) {
        if (isNear) {
          store.push({ number: number, lastStart: `${lastStar.i},${lastStar.j}` })
        }
        isNear = false;
      }
      number = ''
    }
    if (number) {
      if (isNear) {
        store.push({ number: number, lastStart: `${lastStar.i},${lastStar.j}` })
      }
      number = '';
      isNear = false
    }
  }
}

const lastStartCounts = {};

store.forEach((item) => {
  const lastStart = item.lastStart;

  if (lastStartCounts[lastStart] === undefined) {
    // First occurrence of lastStart
    lastStartCounts[lastStart] = 1;
  } else {
    // Increment count for repeated lastStart
    lastStartCounts[lastStart]++;
  }
});


function findNumbersByLastStart(targetLastStart) {
  const associatedNumbers = [];

  store.forEach((item) => {
    if (item.lastStart === targetLastStart) {
      associatedNumbers.push(item.number);
    }
  });

  return associatedNumbers;
}

const targetLastStart = '8,5';
const numbersWithTargetLastStart = findNumbersByLastStart(targetLastStart);

let sum = 0;
let zarb = 1;
for (const lastStart in lastStartCounts) {
  if (lastStartCounts[lastStart] == 2) {
    const numbers = findNumbersByLastStart(lastStart);
    sum += numbers[0] * numbers[1];
  }
}


console.log(sum)
