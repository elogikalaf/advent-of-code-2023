const fs = require("fs");

const input = fs.readFileSync("p2.txt", 'utf8');
const lines = input.split("\n");
let sum = 0
for (line of lines.splice(0, 100)) {
  let total = 1
  let mins = { 'red': 0, 'blue': 0, 'green': 0 };
  let games = line.split(":")[1].split(";").map(item => item.trim());
  for (game of games) {
    cubes = game.split(",").map(item => item.trim());
    for (cube of cubes) {
      if (parseInt(cube.split(" ")[0]) > mins[cube.split(" ")[1]]) {
        mins[cube.split(" ")[1]] = cube.split(" ")[0];
      }
    }
  }
  for (i in mins) {
    total = total * parseInt(mins[i])
  }
  console.log(total)
  sum += total
}
console.log(sum)

