// Parsing input as integer.
var input = parseInt(prompt("Please Enter a Number (1-12) : "));

// If condition is not met, run this while loop.
while (input < 1 || input > 12 || isNaN(input)) {
    alert("Invalid Number. Please enter a number between 1 - 12");
    var secondInput = parseInt(prompt("Enter a Number (1-12) : "));
    // If the condition in the while loop is met, break out of the loop.
    if (secondInput >= 1 && secondInput <= 12) {
        break;
    }
}

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];

console.log(months[input - 1 || secondInput - 1]);
