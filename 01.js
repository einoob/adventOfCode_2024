const { input, testInput } = require("./inputs/01");

const getRightListAmounts = (numbers) => {
  let amounts = {};

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    amounts[number] = amounts[number] ? (amounts[number] += 1) : 1;
  }

  return amounts;
};

const countSimilarityScore = (input) => {
  const lists = input.split("\n").map((line) => line.split("   "));

  let leftList = [];
  let rightList = [];
  for (let i = 0; i < lists.length; i++) {
    leftList.push(lists[i][0]);
    rightList.push(lists[i][1]);
  }

  const rightListAmounts = getRightListAmounts(rightList);

  let sum = 0;
  for (let i = 0; i < leftList.length; i++) {
    const number = leftList[i];
    if (rightListAmounts[number]) {
      sum += number * rightListAmounts[number];
    }
  }
  return sum;
};

const countTotalDistance = (input) => {
  const lists = input.split("\n").map((line) => line.split("   "));

  let leftList = [];
  let rightList = [];
  for (let i = 0; i < lists.length; i++) {
    leftList.push(lists[i][0]);
    rightList.push(lists[i][1]);
  }

  leftList.sort((a, b) => a - b);
  rightList.sort((a, b) => a - b);

  let distances = [];
  for (let i = 0; i < leftList.length; i++) {
    distances.push(Math.abs(leftList[i] - rightList[i]));
  }

  return distances.reduce((a, b) => a + b, 0);
};

console.log("test", countTotalDistance(testInput), countSimilarityScore(testInput));
console.log('actual', countTotalDistance(input), countSimilarityScore(input));
