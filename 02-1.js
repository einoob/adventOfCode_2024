const { input, testInput } = require("./inputs/02");

const checkAscending = (report) => {
  for (let i = 0; i < report.length - 1; i++) {
    const currentNumber = +report[i];
    const nextNumber = +report[i + 1];
    console.log(currentNumber, nextNumber)
    if (currentNumber >= nextNumber || nextNumber - currentNumber > 3) {
      return false;
    }
  }
  return true;
};

const checkDescending = (report) => {
  for (let i = 0; i < report.length - 1; i++) {
    const currentNumber = +report[i];
    const nextNumber = +report[i + 1];

    if (currentNumber <= nextNumber || currentNumber - nextNumber > 3) {
      return false;
    }
  }
  return true;
};

const isReportSafe = (report) => {
  if (report[0] === report[1]) {
    return false;
  }
  const direction = +report[0] < +report[1] ? "asc" : "des";
  if (direction === "asc") {
    return checkAscending(report);
  } else {
    return checkDescending(report);
  }
};

const countSafeReports = (input) => {
  const reports = input.split("\n").map((line) => line.split(" "));

  let amountOfSafeReports = 0;
  for (let i = 0; i < reports.length; i++) {
    if (isReportSafe(reports[i])) {
      amountOfSafeReports++;
    }
  }

  return amountOfSafeReports;
};

console.log("test", countSafeReports(testInput));
console.log("actual", countSafeReports(input));
