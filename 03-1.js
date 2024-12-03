const { input, testInput } = require("./inputs/03");

const multiplyNumbers = (string) => {
  const pairs = string.split(",");
  const leftHandNUmber = pairs[0];
  if (!pairs[1]) {
    return 0;
  }
  const rightHandNUmber = pairs[1].split(")")[0];
  if (Number.isInteger(+rightHandNUmber)) {
    return +leftHandNUmber * +rightHandNUmber;
  } else {
    return 0;
  }
};

const calculateTotalSum = (string) => {
  let sum = 0;

  for (let i = 0; i < string.length; i++) {
    if (
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

console.log("test", calculateTotalSum(testInput));
console.log('actual', calculateTotalSum(input))
