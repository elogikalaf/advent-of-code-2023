const fs = require("fs");
const limit = { 'red': 12, 'green': 13, 'blue': 14 };
const input = fs.readFileSync("p2.txt", 'utf8');
const lines = input.trim().split("\n");
const badGames = [];
for (line of lines) {
  const gamesWhiteSpace = line.split(":").slice(1).join().split(";");
  const games = gamesWhiteSpace.map(item => item.trim());
  let isFalse = false
  for (game of games) {
    let cubes = game.split(",").map(item => item.trim());
    for (cube of cubes) {
      if ((limit[cube.split(" ")[1]]) < cube.split(" ")[0]) {
        isFalse = true
      }
    }
  }
  if (!isFalse) {
    badGames.push(parseInt((line.split(":")[0].split(" ")[1])))
  }
}
const badGamesSet = [...new Set(badGames)]
for (i of badGamesSet) {
  console.log(i)
}
const sum = badGamesSet.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum)
