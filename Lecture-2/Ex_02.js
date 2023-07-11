function evaluateEquation(equation) {
    try {
      const result = eval(equation);
      return `equation ${equation} = ${result}`;
    } catch (error) {
      return "Invalid equation";
    }
  }
  
  // Example usage:
  console.log(evaluateEquation("1+1"));             // equation 1+1 = 2
  console.log(evaluateEquation("7*4-2"));           // equation 7*4-2 = 26
  console.log(evaluateEquation("1+1+1+1+1"));       // equation 1+1+1+1+1 = 5
  