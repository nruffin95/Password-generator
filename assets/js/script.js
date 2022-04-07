// Assignment code here

function generatePassword(){
    let question = prompt("How many characters would you like your password to contain?");
    
    if (question >= 8) {
      confirm("Click Ok To Confirm special charaters")
      confirm("Click Ok To Confirm numeric charaters")
      confirm("Click Ok To Confirm lowercase charaters")
      confirm("Click Ok To Confirm uppercase charaters")
    } else if (question < 8) {
      prompt("Password must be 8 charaters long")
    }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);