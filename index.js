function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function percentage() {
    const currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = currentValue / 100;
}

function deleteLast() {
    const currentExpression = document.getElementById('display').value;
    document.getElementById('display').value = currentExpression.slice(0, -1);
}

function sin() {
    const currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.sin(currentValue * (Math.PI / 180));
}

function cos() {
    const currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.cos(currentValue * (Math.PI / 180));
}

function tan() {
    const currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.tan(currentValue * (Math.PI / 180));
}

function csc() {
    const currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = 1 / Math.sin(currentValue * (Math.PI / 180));
}

function sec() {
    const currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = 1 / Math.cos(currentValue * (Math.PI / 180));
}

function cot() {
    const currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = 1 / Math.tan(currentValue * (Math.PI / 180));
}

function log() {
    const currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.log10(currentValue);
}

function exp() {
    const currentValue = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.exp(currentValue);
}

function integral() {
    const expression = document.getElementById('display').value;
    // Placeholder for integration, you may use a dedicated library or implement a more sophisticated algorithm
    try {
        // Basic integration: x^2/2
        document.getElementById('display').value = integrate(expression);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function differentiate() {
    const expression = document.getElementById('display').value;
    // Placeholder for differentiation, you may use a dedicated library or implement a more sophisticated algorithm
    try {
        // Basic differentiation: 2x
        document.getElementById('display').value = differentiate(expression);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Placeholder functions for integration and differentiation
function integrate(expression) {
    // Basic integration: x^2/2
    return expression.replace(/x/g, '(x^2/2)');
}

function differentiate(expression) {
    // Basic differentiation: 2
    return expression.replace(/x/g, '2');
}