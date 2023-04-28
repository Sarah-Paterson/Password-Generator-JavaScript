// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", windowPrompt);

// all code above provided by course

// first pop up when clicking on generate password
function windowPrompt() {
  if (confirm("Let's create a new password! Please answer a few prompts to set the parameters for your new password.")) {
    //numberSelect();
  } else {
    // window closes
  }
}


// function numberSelect() {
//   let number = prompt("Please enter how many characters your new password will have. Please write a whole number between 8 - 128.", "14");
//   if (isNaN || number < 8 || number > 128) {

//   } else if () {

//   } else {

//   }
// }


// passwordText

// final = paswordText.value

// Math.floor(Math.random() * 10);