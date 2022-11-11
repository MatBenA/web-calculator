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

//this function must be called every time a button is pressed and its argument must be
//the value of said button.
function main(button, type) {
  if (typeof button === "number") {
    //the number pressed is pushed into the array
    expression.push(button);
    resultDisp.textContent = expression.join("");
    return null;
  }

  if (isOperator(button)) {
    if (expression.length > 0) {
      if (onlyOnce(expression)) {
        expression.push(button);
        resultDisp.textContent = expression.join("");
      }
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

/*
Calculator general behavior:
  When you make your first calculation it will do it normally
  But when you make a second calculation after the first one
  it will use the result of the previous calculation as the
  first number

Calculator Behavior during first operation
the first input
When the the user first touches a button ONLY a number or minus
sign will have effect and it will appear in the display.

if its not a number or a negative sign it will not have any effect.

after the first input has been made any button can be pressed.

  if the user presses a number it will appear in the display
                      next to the previous character.
                      
                      an operator it will appear in the display
                      next to the previous character if it is a
                      number, but if the previous char is another
                      simbol it will replace it.
                      
                      the delete button, the last element that
                      was entered will be deleted.

                      the clear button will eliminate all the
                      elements in the display and basically
                      reset the calculator.

                      decimal point, if the previous char is a
                      number it will a decimal point but before
                      it will make sure that there are no more
                      decimal points in that same number.

                      the equal button: the behavior of this
                      button is more complex, and it will be
                      described in the next paragraph.

Equal Button Behavior:
  *Pressing this button will only have
   effect if the last element in the input is a number (if your
   first input is a negative sign and right after that you press
   the equal button it will have no effect).

  *If there is only one number in the input (either positive or
   negative) the result display will show that exact same number

  *If in the display there are two numbers, separated by an operator
   the three of these numbers will be passed as arguments to the
   operate function.
    *Operate function: receives two numbers and one of the four 
     basic arithmetical operators (+ - * /) and executes the
     correspondent function, returns the result.
   After that the return of this function will be displayed in
   the result display

  *During next calculation: It will do the same as if it was
   in the first calculation but will use the result of the first
   calculation as first term.

  Display behavior:
    the whole display is made up of two smaller displays
    the result one and the expression one.
    
    *Common characteristics: both displays have a limit of chars
     that they can display, if that limit is reached it will add
     no more characters.

    *Result display: Here will appear all the new numbers and
     symbols entered by the user and when the full expression is
     written and the equal button or another symbol is pressed
     this display will reset and show the result. The expression
     that was written here is passed to the expression display.

    *Expression display: will only show expressions, this will
     happen when the result display shows the result of said
     expression.
    
*/

/*TODO
Asign an event listener to each button, this will execute
a function that will return the number or symbol asigned to each button.

when a button returns its value, we will push this value into an array
with .push()

the value of each element in this array will be displayed in the calculator
display EXCEPT for the equal symbol.

if in the display there is a number, an operator and another number
the value of each element in the display array will go to the
*/
