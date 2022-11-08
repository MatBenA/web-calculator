//add two numbers return the result
function add(aNum, bNum) {
  return aNum + bNum;
}

//subtract two numbers return the result
function subtract(aNum, bNum) {
  return aNum - bNum;
}

//multiply two numbers return the result
function multiply(aNum, bNum) {
  return aNum * bNum;
}

//divide two numbers return the result
function divide(aNum, bNum) {
    //if divisor is equal to 0 return infinity
  return bNum !== 0 ? aNum / bNum : Infinity;
}

/* 
receives two numbers and one of the four basic arithmetical operator 
and executes the correspondent function, returns the result
 */
function operate(aNum, bNum, operator) {
  switch (operator) {
    case "+":
      return add(aNum, bNum);
      break;

    case "-":
      return subtract(aNum, bNum);
      break;

    case "*":
      return multiply(aNum, bNum);
      break;

    case "/":
      return divide(aNum, bNum);
      break;

    default:
      return null;
  }
}
