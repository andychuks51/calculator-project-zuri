
// define a variable called display and passed in the element
const display = document.getElementById('display');

display.value = 0 // Set the display to be zero on first launch

let currentNumber = ''; // Stores the current number being typed

let hasCalculated = false // This will be used to track if the calculation has been completed, By default is set to
// false

// Create a function to capture the input
function updateDisplay(input) {
    // Clear the display if the current calculation is done and a number is entered
     if (hasCalculated) {
         currentNumber = ''
         hasCalculated = false
     }
   
    // Append the input to the current number
    currentNumber += input;
    
    // Update the display with the current number
    display.value = currentNumber;
}

//  A function we use to calculate the inputs and also check for error using try and catch blocks
function calculate() {
    // handles simple errors when the calculation is done
    try {
        display.value = eval(display.value) // calculation logic is defined here
    } catch (error) {
          display.value = 'Error'
    }
    
    // checks if the calculation has been completed
    hasCalculated = true
}
