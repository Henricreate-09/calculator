let numButtons = document.querySelectorAll(".number-button");
let opButtons = document.querySelectorAll(".operation-button");

let clearButton = document.querySelector("#clear-button");
let equalButton = document.querySelector("#equal-button");

let display = document.querySelector("#display");
let exprDisplay = document.querySelector("#expression");

let values = [];
let operation = "";


function addNumber(click) {
    let num = click.target.textContent;
    display.value += num;
}
function evaluateExpression(currentButton) {
    values.push(parseInt(display.value));
    operation = currentButton.target.textContent;
    
    display.value = "";
    exprDisplay.value = `${values[0]} ${operation} ...`;
    
}
function eraseAll() {
    values = [];
    display.value = "";
    exprDisplay.value = "";
}

function operate(operation, num1, num2) {
    let result = 0;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'x':
            result = num1 * num2;
            break;
        case '/':
            if (num2 == 0) {
                alert("Can't divide by zero!");
                return 0;
            }
            result = num1 / num2;
            break;
        
    }
    return result;  
}

function showResult() {
    values.push(parseInt(display.value)); // Make sure it has two values
    let result = operate(operation, values[0], values[1]);

    display.value = result;
    exprDisplay.value = `${values[0]} ${operation} ${values[1]}`;

    console.log(result);
    values = [];

    console.log(`OPERATION: ${operation}\nVALUES: ${values}`);
}



numButtons.forEach((el) => el.addEventListener("click", addNumber));
opButtons.forEach((el) => el.addEventListener("click", evaluateExpression))
equalButton.addEventListener("click", showResult);
clearButton.addEventListener("click", () => display.value = "");


display.value = "";