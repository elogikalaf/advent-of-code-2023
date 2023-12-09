const fs = require('fs');

input = fs.readFileSync("day5.txt", "utf8");

const seedMap = {};
const topics = ["seeds", "seed-to-soil", "soil-to-fertilizer", "fertilizer-to-water", "water-to-light", "light-to-temperature", "temperature-to-humidity", "humidity-to-location"];
const mappings = {};

for (i in topics) {
  const start = input.indexOf(topics[i])
  const end = input.indexOf(topics[parseInt(i) + 1]);
  mappings[topics[i].trim()] = input.slice(start, end).trim().split(/:\s+/)[1]
}
// seed to soil
for (let seed of mappings["seeds"].split(/\s/)) {
  let found = false;
  for (let soil of mappings["seed-to-soil"].split("\n")) {
    let seedBase = parseInt(soil.split(" ")[1]);
    let soilBase = parseInt(soil.split(" ")[0]);
    let range = parseInt(soil.split(" ")[2]);
    if (parseInt(seed) >= seedBase && parseInt(seed) <= seedBase + range) {
      seedMap[seed] = parseInt(seed) - seedBase + soilBase;
      break;
    }
    else {
      seedMap[seed] = seed;
    }
  }
}
//soil to fertilizer
for (let i in seedMap) {
  let found = false
  for (let ferilizer of mappings["soil-to-fertilizer"].split("\n")) {
    let soilBase = parseInt(ferilizer.split(" ")[1]);
    let fertilizerBase = parseInt(ferilizer.split(" ")[0]);
    let range = parseInt(ferilizer.split(" ")[2]);
    if (parseInt(seedMap[i]) >= soilBase && parseInt(seedMap[i]) <= soilBase + range) {
      seedMap[i] = parseInt(seedMap[i]) - soilBase + fertilizerBase;
      break;
    }
    else {
      seedMap[i] = seedMap[i]
    }
  }
}
console.log(seedMap)
//fertilizer to water
for (let i in seedMap) {
  for (let water of mappings["fertilizer-to-water"].split("\n")) {
    let fertilizerBase = parseInt(water.split(" ")[1]);
    let waterBase = parseInt(water.split(" ")[0]);
    let range = parseInt(water.split(" ")[2]);
    if (parseInt(seedMap[i]) >= fertilizerBase && parseInt(seedMap[i]) <= fertilizerBase + range) {
      seedMap[i] = parseInt(seedMap[i]) - fertilizerBase + waterBase;
      break;
    }
    else {
      seedMap[i] = seedMap[i]
    }
  }
}
for (let i in seedMap) {
  for (let water of mappings["water-to-light"].split("\n")) {
    let waterBase = parseInt(water.split(" ")[1]);
    let lightBase = parseInt(water.split(" ")[0]);
    let range = parseInt(water.split(" ")[2]);
    if (parseInt(seedMap[i]) >= waterBase && parseInt(seedMap[i]) <= waterBase + range) {
      seedMap[i] = parseInt(seedMap[i]) - waterBase + lightBase;
      break;
    }
    else {
      seedMap[i] = seedMap[i]
    }
  }
}
for (let i in seedMap) {
  for (let water of mappings["light-to-temperature"].split("\n")) {
    let lightBase = parseInt(water.split(" ")[1]);
    let tempBase = parseInt(water.split(" ")[0]);
    let range = parseInt(water.split(" ")[2]);
    if (parseInt(seedMap[i]) >= lightBase && parseInt(seedMap[i]) <= lightBase + range) {
      seedMap[i] = parseInt(seedMap[i]) - lightBase + tempBase;
      break;
    }
    else {
      seedMap[i] = seedMap[i]
    }
  }
}
for (let i in seedMap) {
  for (let water of mappings["temperature-to-humidity"].split("\n")) {
    let tempBase = parseInt(water.split(" ")[1]);
    let humidityBase = parseInt(water.split(" ")[0]);
    let range = parseInt(water.split(" ")[2]);
    if (parseInt(seedMap[i]) >= tempBase && parseInt(seedMap[i]) <= tempBase + range) {
      seedMap[i] = parseInt(seedMap[i]) - tempBase + humidityBase;
      break;
    }
    else {
      seedMap[i] = seedMap[i]
    }
  }
}
for (let i in seedMap) {
  for (let water of mappings["humidity-to-location"].split("\n")) {
    let humidityBase = parseInt(water.split(" ")[1]);
    let locationBase = parseInt(water.split(" ")[0]);
    let range = parseInt(water.split(" ")[2]);
    if (parseInt(seedMap[i]) >= humidityBase && parseInt(seedMap[i]) <= humidityBase + range) {
      seedMap[i] = parseInt(seedMap[i]) - humidityBase + locationBase;
      break;
    }
    else {
      seedMap[i] = seedMap[i]
    }
  }
}
console.log(Math.min(...Object.values(seedMap)))
