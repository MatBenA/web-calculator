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
function operate(aNum, operator, bNum) {
  switch (operator) {
    case "+":
      return add(aNum, bNum);
      break;

    case "-":
      return subtract(aNum, bNum);
      break;

    case "×":
      return multiply(aNum, bNum);
      break;

    case "÷":
      return divide(aNum, bNum);
      break;

    default:
      return null;
  }
}

//the expression that will be shown in the display no more than 11 elements
let expression = [];

//addEventBtn(){}
const zero = document.querySelector(".zero");
zero.addEventListener("click", () => main(0));

const one = document.querySelector(".one");
one.addEventListener("click", () => main(1));

const two = document.querySelector(".two");
two.addEventListener("click", () => main(2));

const three = document.querySelector(".three");
three.addEventListener("click", () => main(3));

const four = document.querySelector(".four");
four.addEventListener("click", () => main(4));

const five = document.querySelector(".five");
five.addEventListener("click", () => main(5));

const six = document.querySelector(".six");
six.addEventListener("click", () => main(6));

const seven = document.querySelector(".seven");
seven.addEventListener("click", () => main(7));

const eight = document.querySelector(".eight");
eight.addEventListener("click", () => main(8));

const nine = document.querySelector(".nine");
nine.addEventListener("click", () => main(9));

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => main("."));

const plus = document.querySelector(".add");
plus.addEventListener("click", () => main("+"));

const minus = document.querySelector(".substract");
minus.addEventListener("click", () => main("-"));

const mult = document.querySelector(".multiply");
mult.addEventListener("click", () => main("×"));

const div = document.querySelector(".divide");
div.addEventListener("click", () => main("÷"));

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => main("clear"));

const del = document.querySelector(".delete");
del.addEventListener("click", () => main("del"));

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => main("="));

const resultDisp = document.querySelector(".result");
const expressionDisplay = document.querySelector(".expression");

//this function must be called every time a button is pressed and its argument must be
//the value of said button.
let opIndex;
let opSelected;

/*TODO 
  add decimal point button functionality.
  add feature to add a minus simbol at the begining of an expression.
*/
function main(button, type) {
  //clears the display when there is an infity result
  if (resultDisp.textContent === "Infinity") {
    clearExp();
  }

  if (typeof button === "number") {
    //the number pressed is pushed into the array
    if (expression.length <= 10) {
      expression.push(button);
      resultDisp.textContent = expression.join("");
    }
  }

  if (isOperator(button)) {
    //checks if the button pressed is an operator
    if (expression.length > 0) {
      //checks if its not the the first place
      if (onlyOnce(expression)) {
        //checks that there is only one operator in the exrpession
        expression.push(button); //adds the operator to the expression
        opIndex = expression.indexOf(button); //stores the index of the operator to be used later in the calculation
        opSelected = button;
        resultDisp.textContent = expression.join("");
      }
    }
  }

  if (button === ".") {
    if (typeof expression[expression.length - 1] === "number") {
      expression.push(button);
      resultDisp.textContent = expression.join("");
    }
  }

  //deletes the last item introduced in the calculator
  if (button === "del") {
    expression.pop();
    resultDisp.textContent = expression.join("");
  }

  //deletes all the elements in the array and refreshes the display
  if (button === "clear") {
    clearExp();
    expressionDisplay.textContent = resultDisp.textContent;
  }

  if (button == "=") {
    if (validExpression()) {
      displayExpression();
      displayResult();
    }
  }
}

/*
  if one element in arrayA(expression) is also in
  operators array return false, else return true
  This is so an operator can only be entered once.
*/
function onlyOnce(expression) {
  const operators = ["+", "-", "×", "÷"];
  let confirm = true;
  expression.forEach((element) => {
    operators.forEach((operator) => {
      if (element === operator) {
        confirm = false;
      }
    });
  });
  return confirm;
}

//returns whether the button pressed was an operator or not
function isOperator(button) {
  const operators = ["+", "-", "×", "÷"];
  let confirm = false;

  operators.forEach((operator) => {
    if (button === operator) {
      confirm = true;
    }
  });
  return confirm;
}

function clearExp() {
  expression.splice(0, expression.length);
  resultDisp.textContent = expression.join("");
  opIndex = undefined;
  opSelected = undefined;
}

function displayResult() {
  let firstTerm = expression.slice(0, opIndex).join(""); //selects the first term of the array
  firstTerm = parseFloat(firstTerm); //parses the term into a integer

  let secondTerm = expression.slice(opIndex + 1, expression.length).join(""); //selects the second term of the array
  secondTerm = parseFloat(secondTerm); //parses the term into a integer

  //calcules the expression
  let calculationResult = operate(firstTerm, opSelected, secondTerm);

  //fixed to 2 decimals
  calculationResult = fixDecimal(calculationResult);

  //clears the array and the display
  clearExp();

  //get the result spread it and store it in the expression array
  expression = [...`${calculationResult}`];
  resultDisp.textContent = expression.join("");
}

function validExpression() {
  if (opIndex !== undefined) {
    let firstTerm = expression.slice(0, opIndex).join(""); //selects the first term of the array
    firstTerm = parseInt(firstTerm); //parses the term into a integer

    let secondTerm = expression.slice(opIndex + 1, expression.length).join(""); //selects the second term of the array
    secondTerm = parseInt(secondTerm); //parses the term into a integer

    return isNaN(firstTerm) || isNaN(secondTerm) ? false : true;
  } else return false;
}

function displayExpression() {
  expressionDisplay.textContent = resultDisp.textContent;
}

function fixDecimal(calculationResult) {
  if (Number.isInteger(calculationResult)) {
    return calculationResult;
  } else {
    return calculationResult.toFixed(2);
  }
}
