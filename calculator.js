let display = document.getElementById('display');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        display.innerText = currentInput;
    } catch (error) {
        display.innerText = 'Error';
        currentInput = '';
    }
}

function calculatePercentage() {
    try {
        currentInput = eval(currentInput) / 100;
        display.innerText = currentInput;
    } catch (error) {
        display.innerText = 'Error';
        currentInput = '';
    }
}








