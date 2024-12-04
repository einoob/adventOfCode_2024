const { input, testInput } = require("./inputs/04");

const findMAS = (array, y, x) => {
  if (
    array[y - 1][x - 1] === "M" &&
    array[y - 1][x + 1] === "M" &&
    array[y + 1][x - 1] === "S" &&
    array[y + 1][x + 1] === "S"
  ) {
    return 1;
  } if (
    array[y - 1][x - 1] === "M" &&
    array[y - 1][x + 1] === "S" &&
    array[y + 1][x - 1] === "M" &&
    array[y + 1][x + 1] === "S"
  ) {
    return 1;
  }
  if (
    array[y - 1][x - 1] === "S" &&
    array[y - 1][x + 1] === "M" &&
    array[y + 1][x - 1] === "S" &&
    array[y + 1][x + 1] === "M"
  ) {
    return 1;
  }
  if (
    array[y - 1][x - 1] === "S" &&
    array[y - 1][x + 1] === "S" &&
    array[y + 1][x - 1] === "M" &&
    array[y + 1][x + 1] === "M"
  ) {
    return 1;
  }
  return 0;
};

const findXmases = (input) => {
  const array = input.split("\n").map((line) => line.split(""));
  let sum = 0;
  for (let y = 1; y < array.length - 1; y++) {
    for (let x = 1; x < array[0].length - 1; x++) {
      if (array[y][x] === "A") {
        sum += findMAS(array, y, x);
      }
    }
  }

  return sum;
};

console.log("test", findXmases(testInput));
console.log("actual", findXmases(input));
