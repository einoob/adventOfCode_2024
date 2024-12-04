const { input, testInput } = require("./inputs/04");


const findDiagonalsRightToLeft = (array) => {
  let sum = 0;
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[0].length; x++) {
      if (y < array.length - 3) {
        if (
          array[y][x] === "X" &&
          array[y + 1][x - 1] === "M" &&
          array[y + 2][x - 2] === "A" &&
          array[y + 3][x - 3] === "S"
        ) {
          sum++;
        } else if (
          array[y][x] === "S" &&
          array[y + 1][x - 1] === "A" &&
          array[y + 2][x - 2] === "M" &&
          array[y + 3][x - 3] === "X"
        ) {
          sum++;
        }
      }
    }
  }
  return sum;
};

const findDiagonalsLeftToRight = (array) => {
  let sum = 0;
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[0].length; x++) {
      if (y < array.length - 3) {
        if (
          array[y][x] === "X" &&
          array[y + 1][x + 1] === "M" &&
          array[y + 2][x + 2] === "A" &&
          array[y + 3][x + 3] === "S"
        ) {
          sum++;
        } else if (
          array[y][x] === "S" &&
          array[y + 1][x + 1] === "A" &&
          array[y + 2][x + 2] === "M" &&
          array[y + 3][x + 3] === "X"
        ) {
          sum++;
        }
      }
    }
  }
  return sum;
};

const findVerticals = (array) => {
  let sum = 0;
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[0].length; x++) {
      if (y < array.length - 3) {
        if (
          array[y][x] === "X" &&
          array[y + 1][x] === "M" &&
          array[y + 2][x] === "A" &&
          array[y + 3][x] === "S"
        ) {
          sum++;
        } else if (
          array[y][x] === "S" &&
          array[y + 1][x] === "A" &&
          array[y + 2][x] === "M" &&
          array[y + 3][x] === "X"
        ) {
          sum++;
        }
      }
    }
  }
  return sum;
};

const findHorizontals = (array) => {
  let sum = 0;
  for (line of array) {
    for (let i = 0; i < line.length; i++) {
      if (line[i] === "X" && line[i + 1] === "M" && line[i + 2] === "A" && line[i + 3] === "S") {
        sum++;
      } else if (
        line[i] === "S" &&
        line[i + 1] === "A" &&
        line[i + 2] === "M" &&
        line[i + 3] === "X"
      ) {
        sum++;
      }
    }
  }
  return sum;
};

const findXmases = (input) => {
  const array = input.split("\n").map((line) => line.split(""));
  //console.log(array)
  let sum = 0;
  sum += findHorizontals(array);
  sum += findVerticals(array);
  sum += findDiagonalsLeftToRight(array);
  sum += findDiagonalsRightToLeft(array);

  return sum;
};

console.log("test", findXmases(testInput));
console.log('actual', findXmases(input))
