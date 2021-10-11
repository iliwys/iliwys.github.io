let currentTotal = 0; 
let buffer = "0"; //число на экране
let previousOperator = null;

const display = document.querySelector(".output");

document.querySelector('.calculator-buttons').addEventListener("click", function(event) {
    button(event.target.innerHTML);
});

function button(value) {
    if (isNaN(parseInt(value))) {
        operation(value);
    }
    
    else {

        number(value);
    }
    updateDisplay();
}

function operation(value) {
    switch (value) {

        case "AC":
            buffer = "0";
            currentTotal = 0;
            previousOperator = null;
            break;

        case "=":
            if (previousOperator === null) { 
                return;
            }
            operator(parseInt(buffer));
            buffer = "" + currentTotal;
            previousOperator = null;
            currentTotal = 0;
            break;

        case "С":
            if (buffer.length != 1) { 
                buffer = buffer.substring(0, buffer.length-1);
            }

            else {
                buffer = "0";
            }
            break;

        default:
            math(value);
            break;
    }
}

function number(value) {
    if (buffer === "0") {
        buffer = value;
    }
    
    else {
        buffer += value;
    }
}

function math(value) {
    const internalBuffer = parseInt(buffer);
    
    if (currentTotal === 0) {
        currentTotal = internalBuffer;
    }
    
    else {
        operator(internalBuffer);
    }

    previousOperator = value;
    buffer = "0";
}

function operator(internalBuffer) {
    if (previousOperator === "+") {
        currentTotal += internalBuffer;
    }
    
    else if (previousOperator === "–") {
        currentTotal -= internalBuffer;
    } 
    
    else if (previousOperator === "×") {
        currentTotal *= internalBuffer;
    }
    
    else {
        currentTotal /= internalBuffer;
    }
}

function updateDisplay(){
    display.value = buffer;
}