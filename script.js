function add(aNum, bNum) {
  return aNum + bNum;
}

function subtract(aNum, bNum) {
  return aNum - bNum;
}

function multiply(aNum, bNum) {
  return aNum * bNum;
}

function divide(aNum, bNum) {
  return bNum !== 0 ? aNum / bNum : Infinity;
}

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
