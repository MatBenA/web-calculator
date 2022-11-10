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

allButtons = document.querySelectorAll("button");
console.log(allButtons);

//give color when buttons are clicked
allButtons.forEach((button) => {
  button.addEventlistener("click", (button) => console.log(button));
});

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

/*
Asign an event listener to each button, this will execute
a function that will return the number or symbol asigned to each button.

when a button returns its value, we will push this value into an array
with .push()

the value of each element in this array will be displayed in the calculator
display EXCEPT for the equal symbol.

if in the display there is a number, an operator and another number
the value of each element in the display array will go to the
*/
