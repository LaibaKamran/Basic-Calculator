
let lastCharacter = '';

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLastCharacter() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function appendCharacter(character) {
    const display = document.getElementById("display");
    const allowedOperators = ['+', '-', '*', '/'];

    // Prevent multiple consecutive operators
    if (allowedOperators.includes(character) && allowedOperators.includes(lastCharacter)) {
        return;
    }

    // Prevent consecutive dots
    if (character === '.' && display.value.includes('.')) {
        return;
    }

    display.value += character;
    lastCharacter = character;
}


function calculate() {
    const display = document.getElementById("display");
    const expression = display.value;

    // Check if the expression is empty or ends with an operator
    if (!expression || ['+', '-', '*', '/'].includes(expression.slice(-1))) {
        display.value = "Error: Incomplete Expression";
        return;
    }

    try {
        // Evaluate the expression and round to prevent overflow
        const result = eval(expression);
        const roundedResult = Math.round(result * 1000) / 1000;
        
        // Check for division by zero
        if (roundedResult === Infinity || roundedResult === -Infinity) {
            display.value = "Error: Divide by Zero";
        } else {
            display.value = roundedResult;
        }
    } catch (error) {
        display.value = "Error: Invalid Expression";
    }

}

// Function to check the user's theme preference in local storage
// Function to check the user's theme preference in local storage
function getThemePreference() {
    const themePreference = localStorage.getItem('themePreference');
    return themePreference === 'dark' ? 'dark' : 'light';
}

// Function to set the user's theme preference in local storage
function setThemePreference(theme) {
    localStorage.setItem('themePreference', theme);
}

// Function to toggle between dark and light themes
function toggleTheme() {
    const body = document.body;
    const currentTheme = getThemePreference();

    if (currentTheme === 'dark') {
        body.classList.remove('dark-theme');
        setThemePreference('light');
        document.getElementById('themeToggle').textContent = 'Toggle Theme (Dark)';
    } else {
        body.classList.add('dark-theme');
        setThemePreference('dark');
        document.getElementById('themeToggle').textContent = 'Toggle Theme (Light)';
    }
}