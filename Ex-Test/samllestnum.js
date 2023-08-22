function sumTwoSmallestNumbers(numbers) {
    const positiveNumbers = numbers.filter(num => num >= 0);
    positiveNumbers.sort((a, b) => a - b);
    const sum = positiveNumbers[0] + positiveNumbers[1];
  
    return sum;
}
  
  console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
  console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));
  console.log(sumTwoSmallestNumbers([2, 9, 6, -1]));
  console.log(sumTwoSmallestNumbers([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]));
  console.log(sumTwoSmallestNumbers([3683, 2902, 3951, -475, 1617, -2385]));
