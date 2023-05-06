// Assignment Code
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generateBtn.addEventListener("click", windowPrompt);

// all code above provided by course

// array of options for the passsword and empty arrays for password
let uperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specials = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", "-", ".", "/'", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
let password = [];
let availChar = [];

// let usrLen;

// first pop up when clicking on generate password
function windowPrompt() {
  if (confirm("Let's create a new password! Please answer a few prompts to set the parameters for your new password.")) {
    // lenSelect();
    usrPass();
  } else {
    // alert("You\'ve chosen to cancel. Please refresh your page to restart.");
    end();
  }
}

// password length selection
// function lenSelect() {
//   usrLen = parseInt(prompt("Please enter how many characters your new password will have. Please write a whole number between 8 and 128.", "14"));
//   if (Number.isNaN(usrLen)) {
//     retryLen();
//   }

//   if (usrLen < 8 || usrLen > 128) {
//     retryLen();
//   }
  
//   if (usrLen > 7 && usrLen < 129) {
//     // upCase();
//     usrPass();
//   } else {
//     alert("You\'ve chosen to cancel. Please refresh your page to restart.");
//   }

//   console.log(usrLen);
// }

// console.log(usrLen);

// // if lenght selection is incorect
// function retryLen() {
//   if (confirm("Please select a whole number between 8 and 128. If you would like to cancel, press \"cancel\".")) {
//     lenSelect();
//   } else {
//     alert("You\'ve chosen to cancel. Please refresh your page to restart.");
//   }
// }

// user choicses and password creation in this function
let usrPass = function() {
  usrLen = parseInt(prompt("Please enter how many characters your new password will have. Please write a whole number between 8 and 128.", "14"));
  function lenSelect() {
    
    if (Number.isNaN(usrLen)) {
      retryLen();
    }
  
    if (usrLen < 8 || usrLen > 128) {
      retryLen();
    }
    
    if (usrLen > 7 && usrLen < 129) {
      // upCase();
      // usrPass();
    } else {
      // alert("You\'ve chosen to cancel. Please refresh your page to restart.");
      // return;
      end();
    }
  }
  lenSelect(usrLen);
  console.log(usrLen);
  
  // if lenght selection is incorect
  function retryLen() {
    if (confirm("Please select a whole number between 8 and 128. If you would like to cancel, press \"cancel\".")) {
      // lenSelect();
      usrPass()
    } else {
      // alert("You\'ve chosen to cancel. Please refresh your page to restart.");
      // return;
      end();
    }
  }



  // uppercase
  let usrUpC = window.confirm("Would you like uppercase letters in your password?");
  // lowercase
  let usrLowC = window.confirm("Would you like lowercase letters in your password?");
  // numbers
  let usrNumb = window.confirm("Would you like numbers in your password?");
  // special characters
  let usrSpec = window.confirm("Would you like special characters in your password?");

  if (usrUpC || usrLowC || usrNumb || usrSpec) {
    if (usrUpC && usrLowC && usrNumb && usrSpec) {
      availChar = [...uperCase, ...lowerCase, ...numbers, ...specials];

    } else if (usrUpC && usrLowC && usrNumb) {
      availChar = [...uperCase, ...lowerCase, ...numbers];

    } else if (usrUpC && usrNumb && usrSpec) {
      availChar = [...uperCase, ...numbers, ...specials];

    } else if (usrLowC && usrNumb && usrSpec) {
      availChar = [...lowerCase, ...numbers, ...specials];

    } else if (usrUpC && usrLowC) {
      availChar = [...uperCase, ...lowerCase];

    } else if (usrUpC && usrNumb) {
      availChar = [...uperCase, ...numbers];

    } else if (usrUpC && usrSpec) {
      availChar = [...uperCase, ...specials];

    } else if (usrLowC && usrNumb) {
      availChar = [...lowerCase, ...numbers];

    } else if (usrLowC && usrSpec) {
      availChar = [...lowerCase, ...specials];

    } else if (usrNumb && usrSpec) {
      availChar = [...numbers, ...specials];

    } else if (usrUpC) {
      availChar = [...uperCase];

    } else if (usrLowC) {
      availChar = [...lowerCase];

    } else if (usrNumb) {
      availChar = [...numbers];

    } else if (usrSpec) {
      availChar = [...specials];

    }
  } else {
    retryC();
  }

  function retryC() {
    if (confirm("Please select \"okay\" to at least one of the prompts. Select \"okay\" to reselect. If you would like to cancel, press \"cancel\".")) {
      usrPass();
    } else {
      // alert("You\'ve chosen to cancel. Please refresh your page to restart.");
      end();
    }
  }

  console.log(availChar);

  // JavaScript Program to shuffle a given array 
// A function to generate a random
// permutation of availChar
function randomize (availChar)
{
 
    // Start from the last element and swap
    // one by one. We don't need to run for
    // the first element that's why i > 0
    for (let i = availChar.length - 1; i > 0; i--)
    {
     
        // Pick a random index from 0 to i inclusive
        let j = Math.floor(Math.random() * (i + 1));
 
        // Swap availChar[i] with the element
        // at random index
        [availChar[i], availChar[j]] = [availChar[j], availChar[i]];
    }
}
 
// Driver Code
randomize (availChar);
console.log(availChar);

//This code above is contributed by rohitsingh07052.

// for(var i = arr.length; i >= 0; i--) {
//   if(arr[i] == cls) {
//       alert(arr[i - 1]);
//       var splCout = arr.splice(arr[i - 1], 1);
//       alert(splCout);
//   }
// }

for(let i=0; i < usrLen; i++) {
  password = availChar.splice(1, i);
}


// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join("");

}

writePassword();
 
}

function end() {
  alert("You\'ve chosen to cancel. Please restart.");
  // return false;
  window. confirm = function() { return false; }
  window. alert = function() { return false; }
  location.reload();
}