const { input, testInput } = require("./inputs/06");

const getStartingPoint = (map) => {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[0].length; x++) {
      if (map[y][x] === "^") {
        return [y, x];
      }
    }
  }
  return null;
};

const countPositions = (map, startingPoint) => {
  let direction = "u";
  let positions = 1;

  let y = startingPoint[0];
  let x = startingPoint[1];
  map[y][x] === "X";

  while (x >= 0 && x < map[0].length && y >= 0 && y < map.length) {
    if (map[y][x] === ".") {
      positions++;
      map[y][x] = "X";
    }
    if (direction === "u" && y !== 0 && map[y - 1][x] === "#") {
      direction = "r";
    } else if (direction === "u") {
      y--;
    }
    else if (direction === "r" && x < map[y].length -1 && map[y][x + 1] === "#") {
      direction = "d";
    } else if (direction === "r") {
      x++;
    }
    else if (direction == "d" && y < map.length -1 && map[y + 1][x] === "#") {
      direction = "l";
    } else if (direction === "d") {
      y++;
    }
    else if (direction === "l" && x !== 0 && map[y][x - 1] === "#") {
      direction = "u";
    } else if (direction === "l") {
      x--;
    }
  }
  return positions;
};

const getAmountOfPositions = (input) => {
  const map = input.split("\n").map((line) => line.split(""));
  let startingPoint = getStartingPoint(map);
  return countPositions(map, startingPoint);
};

console.log("test", getAmountOfPositions(testInput));
console.log('actual', getAmountOfPositions(input))
