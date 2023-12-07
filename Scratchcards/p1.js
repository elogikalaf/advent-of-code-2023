const fs = require("fs")

const input = fs.readFileSync("day4.txt", "utf8").split("\n");
let sum = 0;
for (i of input) {
  let counter = 0;
  const number = i.split(": ")[1]
  const winnings = number.split(" | ")[0].trim().split(/\s+/);
  const myNumbers = number.split(" | ")[1].trim().split(/\s+/);
  console.log(myNumbers)
  for (num of myNumbers) {
    if (winnings.includes(num)) {
      console.log("num", num)
      counter++;
    }
  }
  console.log(counter)
  if (counter > 0)
    sum += Math.pow(2, counter - 1);
}
console.log(sum)
