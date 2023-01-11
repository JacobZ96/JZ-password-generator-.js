// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Pseudocode (SUPER IMPORTANT)
// Array for each one 
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s""t","u","v","w","x","y","z"]
var numbers = [0,1,2,3,4,5,6,7,8,9]
var upperCase = ["A","B","C","D","E""F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var specialChar = ["?","!","#","$","%","&"]

var results = [lowerCase + numbers + upperCase + specialChar];

var lowerIndex = Math.floor(Math.random () * lowerCase.length);
var numberIndex = Math.floor(Math.random () * numbers.length);
var upperIndex = Math.floor(Math.random () * upperCase.length);
var specialIndex = Math.floor(Math.random () * specialChar.length);


// User input
  // how many characters 
    // 8-128
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


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
