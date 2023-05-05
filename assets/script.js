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

// array of options for the passsword and empty arrays for password
let uperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let sepcials = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/'", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
let password = [];
let availChar = [];

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
  // how to store the user imput information for later??
  let usrLen = parseInt(prompt("Please enter how many characters your new password will have. Please write a whole number between 8 and 128.", "14"));
  if (Number.isNaN(usrLen)) {
    retryLen();
  }

  if (usrLen < 8 || usrLen > 128) {
    retryLen();
  }
  
  if (usrLen > 7 && usrLen < 129) {
    // upCase();
    usrPass();
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

// user choicses and password creation in this function
let usrPass = function() {
  // uppercase
  let usrUpC = window.confirm("Would you like uppercase letters in your password?");
  // lowercase
  let usrLowC = window.confirm("Would you like lowercase letters in your password?");
  // numbers
  let usrNumb = window.confirm("Would you like numbers in your password?");
  // special characters
  let usrSpec = window.confirm("Would you like special characters in your password?");

  if (usrUpC || usrLowC || usrNumb || usrSpec) {
    if (usrUpC) {
      availChar = [...uperCase];

    } else if (usrUpC && usrLowC) {
      availChar = [...uperCase, ...lowerCase];

    } else if (usrUpC && usrLowC && usrNumb) {
      availChar = [...uperCase, ...lowerCase, ...numbers];

    } else if (usrUpC && usrLowC && usrNumb && usrSpec) {
      availChar = [...uperCase, ...lowerCase, ...numbers, ...sepcials];

    } else if (usrUpc && usrNumb && usrSpec) {
      availChar = [...uperCase, ...numbers, ...sepcials];

    } else if (usrUpC && usrNumb) {
      availChar = [...uperCase, ...numbers];

    } else if (usrUpC && usrSpec) {
      availChar = [...uperCase, ...sepcials];

    } else if (usrLowC) {
      availChar = [...lowerCase];

    } else if (usrLowC && usrNumb) {
      availChar = [...lowerCase, ...numbers];

    } else if (usrLowC && usrNumb && usrSpec) {
      availChar = [...lowerCase, ...numbers, ...sepcials];

    } else if (usrLowC && usrSpec) {
      availChar = [...lowerCase, ...sepcials];

    } else if (usrNumb) {
      availChar = [...numbers];

    } else if (usrNumb && usrSpec) {
      availChar = [...numbers, ...sepcials];

    } else if (usrSpec) {
      availChar = [...sepcials];

    }
  } else {
    retryC();
  }

  function retryC() {
    if (confirm("Please select \"okay\" to at least one of the prompts. Select \"okay\" to reselect. If you would like to cancel, press \"cancel\".")) {
      usrPass();
    } else {
      alert("You\'ve chosen to cancel. Please refresh your page to restart.");
    }
  }

 password = availChar[Math.floor(Math.random() * usrLen.lenght)];
}


// uppercase yes or no
/*function upCase() {
  let usrUpC;
  if (confirm("Would you like uppercase letters in your password?")) {
    usrUpC = true;
    lowCase ();
  } else {
    usrUpC = false;
    lowCase ();
  }
}*/

// console.log(usrUpC);

// lowercase yes or no
/*function lowCase() {
  let usrLowC;
  if (confirm("Would you like lowercase letters in your password?")) {
    usrLowC = true;
    number();
  } else {
    usrLowC = false;
    number();
  }
}*/

// console.log(usrLowC);

// numbers yes or no
/*function number() {
  let usrNumb;
  if (confirm("Would you like numbers in your password?")) {
    usrNumb = true;
    specialC();
  } else {
    usrNumb = false;
    specialC();
  }
}*/

// console.log(Numb);

// specials yes or no
/*function specialC() {
  let usrSpec;
  if (confirm("Would you like special characters in your password?")) {
    usrSpec = true;
    needRetryC();
  } else {
    usrSpec = false;
    needRetryC()
  }
}*/

// console.log(specialC);

// check if retry is needed after upper and lowercase
/*function needRetryC() {
  if (usrChoice.usrUpC || usrChoice.usrLowC || usrChoice.usrNumb || usrChoice.usrSpec) {
    
  } else {
    retryC();
  }
}*/

// ask to retry functions
// why isn't this working??
/*function retryC() {
  if (confirm("Please select \"okay\" to at least one of the prompts. Select \"okay\" to reselect. If you would like to cancel, press \"cancel\".")) {
    upCase();
  } else {
    alert("You\'ve chosen to cancel. Please refresh your page to restart.");
  }
}*/
