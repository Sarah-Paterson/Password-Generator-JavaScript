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
    //lenSelect();
  } else {
    // window closes
  }
}


// function lenSelect() {
//   let number = prompt("Please enter how many characters your new password will have. Please write a whole number between 8 - 128.", "14");
//   if (isNaN || number < 8 || number > 128) {
  // 
//   } else if () {

//   } else {

//   }
// }

// function retryLen() {
  // if (confirm("Please select a number between 8 and 128. If you would like to cancel, press \"cancel\".")) {
    // lenSelect()
  //} else {
    // window closes
  //}
//}

function upCase() {
  if (confirm("Would you like uppercase letters in your password?")) {
    // lowCase ()
  } else {
    // lowCase ()
  }
}

function lowCase() {
  if (confirm("Would you like lowercase letters in your password?")) {
    // number()
  } else {
    // needRetry()
  }
}

// functuion needRetryC() {
  // if (lowCase || upCase) {
    // number()
  //} else {
    // retry()
  //}
//}

// function retryC() {
  //if (confirm("Please select \"okay\" to either uppercase or lowercase characters. Select \"okay\" to go reselect uppercase and lowercase. If you would like to cancel, press \"cancel\".")) {
    // upCase()
  //} else {
    // close window
  //}
//}

function number() {
  if (confirm("Would you like numbers in your password?")) {
    // specials()
  } else {
    // specials()
  }
}

function specials() {
  if (confirm("Would you like special characters in your password?")) {
    // lowcase ()
  } else {
    // lowcase ()
  }
}





// passwordText

// final = paswordText.value

// Math.floor(Math.random() * 10);