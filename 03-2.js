const { input, testInput2 } = require("./inputs/03");

const multiplyNumbers = (string) => {
  const pairs = string.split(",");
  const leftHandNUmber = pairs[0];
  if (!pairs[1]) {
    return 0;
  }
  const rightHandNUmber = pairs[1].split(")")[0];
  if (Number.isInteger(+leftHandNUmber) && Number.isInteger(+rightHandNUmber)) {
    return +leftHandNUmber * +rightHandNUmber;
  } else {
    return 0;
  }
};

const calculateTotalSum = (string) => {
  let sum = 0;
  let isMultiplyingOn = true;

  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "d" &&
      string[i + 1] === "o" &&
      string[i + 2] === "(" &&
      string[i + 3] === ")"
    ) {
      isMultiplyingOn = true;
    } else if (
      string[i] === "d" &&
      string[i + 1] === "o" &&
      string[i + 2] === "n" &&
      string[i + 3] === `'` &&
      string[i + 4] === "t" &&
      string[i + 5] === "(" &&
      string[i + 6] === ")"
    ) {
      isMultiplyingOn = false;
    }
    if (
      isMultiplyingOn &&
      string[i] === "m" &&
      string[i + 1] === "u" &&
      string[i + 2] === "l" &&
      string[i + 3] === "("
    ) {
      sum += multiplyNumbers(string.slice(i + 4, i + 12));
    }
  }
  return sum;
};

console.log("test2", calculateTotalSum(testInput2));
console.log("actual", calculateTotalSum(input));
