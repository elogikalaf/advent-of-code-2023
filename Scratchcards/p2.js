const fs = require('fs');

const input = fs.readFileSync("day4.txt", "utf8").split('\n');
let cards = {}
for (i in input) {
  cards[i] = 1;
}
console.log(input.length)
for (i in input.slice(0, 205)) {
  let counter = 0;
  const numbers = input[i].split(/:\s+/)[1];
  const myNums = numbers.split(/\s+[|]\s+/)[1].split(/\s+/);
  const winningNums = numbers.split(/\s+[|]\s+/)[0].split(/\s+/);
  for (num of myNums) {
    if (winningNums.includes(num)) {
      counter++;
    }
  }
  for (let j = 0; j < counter; j++) {
    cards[parseInt(i) + parseInt(j) + 1] += cards[i]
  }
}
const sum = Object.values(cards).reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum)
