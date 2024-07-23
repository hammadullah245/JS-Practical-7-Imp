var inputString = prompt("Enter a string:");
var searchString = prompt("Enter a substring to search for:");
var replacementString = prompt("Enter a replacement substring:");

var modifiedString = inputString.replace(searchString, replacementString);

alert("Modified string: " + modifiedString);
