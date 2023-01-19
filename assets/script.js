  
// Comments to help work out the process of Creating the JavaScript  
    // User input
      // how many characters 
      // lowercase confirm
      // uppercase confirm
      // number confirm
      // special char confirm
    // Conditional 
        // if the user choses X number of characters total
        // for Loop that iterates X number of times 
        // if the user chooses to add lowercase characters
        // randomly select Y number of characters, push it to results array  
        // if the user chooses to add uppercase characters
        // randomly select Y number of characters, push it to results array
        // if the user chooses to add nums
        // randomly select Y number of characters, push it to results array  
        // if the user choose to ad special characters 
        // randomly select Y number of characters, push it to results array
    // results = ["a", "B", "0", "?"]
    // display results on to the page 
      // target text area, display results

// Array for each one 
const lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = [0,1,2,3,4,5,6,7,8,9]
const uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const specialCharacters = ["?","!","#","$","%","&"]


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Function to create Arrays used later in the code and tie userChoice to givePrompts function
function generatePassword() {
 var userChoice = givePrompts();
 console.log(userChoice);
 var result = [];
 var possibleCharacters = [];
 var guarateedCharacters = [];

 if (!userChoice) {
  return  null;
 }
if (userChoice.hasLowerCase) {
  possibleCharacters = possibleCharacters.concat(lowercaseCharacters)
  guarateedCharacters.push(getRandom(lowercaseCharacters))
}
if (userChoice.hasUpperCase) {
  possibleCharacters = possibleCharacters.concat(uppercaseCharacters)
  guarateedCharacters.push(getRandom(uppercaseCharacters))
}
if (userChoice.hasNumbers) {
  possibleCharacters = possibleCharacters.concat(numbers)
  guarateedCharacters.push(getRandom(numbers))
}
if (userChoice.hasSpecialChar) {
  possibleCharacters = possibleCharacters.concat(specialCharacters)
  guarateedCharacters.push(getRandom(specialCharacters))
}
var num = Math.round(userChoice.length/2); // Math used to solve rounder numbers when odd numbers are entered 
var num2 = userChoice.length - num;
console.log(num, num2);
for (let index = 0; index < num; index++) {
  var possibleCharacter = getRandom(possibleCharacters);
  result.push(possibleCharacter)
  
}
for (let index = 0; index < num2; index++) {
  var guaranteedCharacter = getRandom(guaranteedCharacters); // For loop used to guarantee at least 1 of the specified characters is used in the password
  result.push(guaranteedCharacter); 
}
console.log(result);

return result.join(''); // returns the results of all the arrays joined together 
}


// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}


// Function for giving initial prompt and an if statment if the value does not meet the criteria 
function givePrompts() {
  var length = window.prompt("How long do you want your password?");
   if (length < 8 || length > 128) {
    alert("You must choose a value between 8-128.");
    return  null;
  }
  
  var hasLowerCase = window.confirm("Do you want lowercase letters?");
  var hasNumbers = window.confirm("Do you want numbers?");
  var hasUpperCase = window.confirm("Do you want UPPERCASE letters?");
  var hasSpecialChar = window.confirm("Do you want special characters?");

  // check if user included any characters 
  if (hasLowerCase === false && hasNumbers === false && hasUpperCase === false && hasSpecialChar === false) {
    alert("must select at lease 1 character type")
    return  null; 
  }

  var passwordOptions = {
    length: length,
    hasLowerCase: hasLowerCase,
    hasNumbers: hasNumbers,
    hasSpecialChar: hasSpecialChar,
    hasUpperCase: hasUpperCase, 
  }
  return passwordOptions;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
