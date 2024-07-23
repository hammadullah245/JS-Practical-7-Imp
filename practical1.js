
let userInputString = prompt("Enter a string:");

let userInputIndex = prompt("Enter an index:");

let index = parseInt(userInputIndex, 10);

let characterAtIndex = userInputString.charAt(index);

    alert("The character at index " + index + " is: " + characterAtIndex);