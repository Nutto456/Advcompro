function evaluateEquation(equation) {
    try {
      const result = eval(equation);
      return `equation ${equation} = ${result}`;
    } catch (error) {
      return "Invalid equation";
    }
  }
  
  
  console.log(evaluateEquation("1+1"));             
  console.log(evaluateEquation("7*4-2"));          
  console.log(evaluateEquation("1+1+1+1+1"));      
  