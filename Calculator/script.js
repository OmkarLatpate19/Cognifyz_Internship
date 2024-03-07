function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Invalid input or expression');
        clearDisplay();
    }
}

function calculateSquare() {
    const input = document.getElementById('display').value;
    try {
        const result = eval(`Math.pow(${input}, 2)`);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Invalid input');
        clearDisplay();
    }
}

function calculateCube() {
    const input = document.getElementById('display').value;
    try {
        const result = eval(`Math.pow(${input}, 3)`);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Invalid input');
        clearDisplay();
    }
}

function calculateLog() {
    const input = document.getElementById('display').value;
    try {
        const result = Math.log(parseFloat(input));
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Invalid input');
        clearDisplay();
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}