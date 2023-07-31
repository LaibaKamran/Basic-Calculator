
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

    // Prevent multiple dots
    if (character === '.' && display.value.includes('.')) {
        return;
    }

    display.value += character;
    lastCharacter = character;
}


function calculate() {
    const display = document.getElementById("display");
    const expression = display.value;
   // let result = 0;

    // Check if the expression is empty or ends with an operator
    if (!expression || ['+', '-', '*', '/'].includes(expression.slice(-1))) {
        display.value = "Error: Incomplete Expression";
        return;
    }

//     try{

//     for(let i=0; i<expression.length; i++)
//     {
//         if( ['+', '-', '*', '/'].includes(expression[i])){
//             if(result===0){
//                 switch(expression[i]){
//                     case '+':
//                         result = parseFloat(expression[i-1]) + parseFloat(expression[i+1]);
//                         break;
//                     case '-':
//                         result = parseFloat(expression[i-1]) - parseFloat(expression[i+1]);
//                         break; 
//                     case '*':
//                         result = parseFloat(expression[i-1]) * parseFloat(expression[i+1]);
//                         break;
//                     case '/':
//                         result = parseFloat(expression[i-1]) / parseFloat(expression[i+1]);
//                         break; 
//                     default:
//                         display.value = "Error: Invalid expression.";          
//                 }
//             }
//             else{
//                 switch(expression[i]){
//                     case '+':
//                         result = result + parseFloat(expression[i+1]);
//                         break;
//                     case '-':
//                         result = result - parseFloat(expression[i+1]);
//                         break; 
//                     case '*':
//                         result = result * parseFloat(expression[i+1]);
//                         break;
//                     case '/':
//                         result = result / parseFloat(expression[i+1]);
//                         break; 
//                     default:
//                         display.value = "Error: Invalid expression.";    
//                 }
//             }    
//         }
//     }

//     const roundedResult = Math.round(result*1000)/1000;
//     if (roundedResult === Infinity || roundedResult === -Infinity) {
//             display.value = "Error: Divide by Zero";
//     } else {
//             display.value = roundedResult;
//         }
// }
// catch(error){
//     display.value = "Error: Invalid Expression";
// }

    try {
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

document.addEventListener("keydown", (event)=>{
    let key = event.key;
    const allowedNumbers = ['0','1','2','3','4','5','6','7','8','9','.'];
    const allowedOperators = ['+','-','*','/'];

    if(allowedNumbers.includes(key) || allowedOperators.includes(key)){
        appendCharacter(key);
    }
    
    else{
        return;
    }
});


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

 // Apply the user's preferred theme on page load
 const preferredTheme = getThemePreference();
 if (preferredTheme === 'dark') {
     document.body.classList.add('dark-theme');
 }