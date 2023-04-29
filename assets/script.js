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
    lenSelect();
  } else {
    alert("You\'ve chosen to cancel. Please refresh your page to restart.");
  }
}

// password length selection
function lenSelect() {
  let lenght = {
    usrLen : this.usrLen
  }
  let usrLen = prompt("Please enter how many characters your new password will have. Please write a whole number between 8 and 128.", "14");
  if (isNaN || usrLen < 8 || usrLen > 128) {
    retryLen();
  } else if (ursLen > 7 && usrLen < 129) {
    upCase();
  } else {
    alert("You\'ve chosen to cancel. Please refresh your page to restart.");
  }
}

// if lenght selection is incorect
function retryLen() {
  if (confirm("Please select a whole number between 8 and 128. If you would like to cancel, press \"cancel\".")) {
    lenSelect();
  } else {
    alert("You\'ve chosen to cancel. Please refresh your page to restart.");
  }
}

// uppercase yes or no
function upCase() {
  let upC = {
    usrUpC : this.usrUpC
  }
  if (confirm("Would you like uppercase letters in your password?")) {
    usrUpC = true
    lowCase ();
  } else {
    lowCase ();
  }
}

// lowercase yes or no
function lowCase() {
  let lowC = {
    usrLowC : this.usrLowC
  }
  if (confirm("Would you like lowercase letters in your password?")) {
    usrLowC = true
    number();
  } else {
    needRetryC();
  }
}

// check if retry is needed after upper and lowercase
function needRetryC() {
  if (upCase) {
    number();
  } else {
    retryC();
  }
}

// ask to retry the uppercase and lowercase functions
function retryC() {
  if (confirm("Please select \"okay\" to either uppercase or lowercase characters. Select \"okay\" to go reselect uppercase and lowercase. If you would like to cancel, press \"cancel\".")) {
    upCase();
  } else {
    alert("You\'ve chosen to cancel. Please refresh your page to restart.");
  }
}

// numbers yes or no
function number() {
  // let num = input?
  if (confirm("Would you like numbers in your password?")) {
    specials();
  } else {
    specials();
  }
}

// specials yes or no
function specials() {
  //let special = imput?
  if (confirm("Would you like special characters in your password?")) {
    lowcase ();
  } else {
    lowcase ();
  }
}





// passwordText

// final = paswordText.value

// Math.floor(Math.random() * 10);