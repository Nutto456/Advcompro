function numbersplit(number) {
    const firstPart = Math.floor(number / 2);
    const secondPart = number - firstPart;
    return [firstPart, secondPart];
  }
  
  const result = numbersplit(4);
  console.log(result);
  