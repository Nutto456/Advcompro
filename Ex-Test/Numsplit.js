function numbersplit(number) {
    if (typeof number !== 'number') {
      return; 
    }
    
    const firstPart = Math.floor(number / 2);
    const secondPart = number - firstPart;
    
    return [firstPart, secondPart];
  }
  
  const result = numbersplit(-9);
  console.log(result);
  