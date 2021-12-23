// Assignment Code
var generateBtn = document.querySelector("#generate");
var password; // moved variable up here because writing all these functions caused scope issues

// Write password to the #password input
// asks if you'd like to make new pw do prevent being stuck
function writePassword() {
  if(window.confirm("Create a secure password?")) {
    generatePassword();
    console.log(`returned password value is: ${password}`); //for debugging
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// made variables global for easier function access
var passwordLength;
var charList;
var askUppercase;
var askLowercase;
var askSpecialChar;
var askNumber;
var makePassword;


function generatePassword() {
      askPasswordLength();
}

function askPasswordLength() {
  passwordLength = prompt("How long will your password be? Must be 8 characters minimum and 128 max.");
  console.log(`This is the current password length: ${passwordLength}`); //for debugging
  if (passwordLength >= 8 && passwordLength <= 128) {
      charPreference();
  } else {
      window.alert("Please choose the correct length");
      console.log(password); //for debugging
      password = "";
      writePassword();
  }
}

function charPreference() {
      charList = "";
      askUppercase = window.confirm("Include uppercase letters in your password?");
      if (askUppercase) {
          charList += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      console.log(`The current list of characters: ${charList}`); //for debugging
      askLowercase = window.confirm("Include lowercase letters in your password?");
      if (askLowercase) {
          charList += "abcdefghijklmnopqrstuvwxyz";
      }
      console.log(`The current list of characters: ${charList}`); //for debugging
      askSpecialChar = window.confirm("Include special characters in your password?");
      if (askSpecialChar) {
        charList += " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
      }
      console.log(`The current list of characters: ${charList}`); //for debugging
      askNumber = window.confirm("Include numbers in your password?");
      if (askNumber) {
        charList += "1234567890";
      }
      console.log(`The current list of characters: ${charList}`); //for debugging
      if (askUppercase || askLowercase || askSpecialChar || askNumber) {
          synthesizePassword();
      } else {
        window.alert("You need to pick at least one set of characters to have in your password.")
        askUppercase = false;
        askLowercase = false;
        askSpecialChar = false;
        askNumber = false;
        charPreference();
      }
}

function synthesizePassword() {
  password = "";
  var charListLength = charList.length;
  console.log(`length of charList array: ${charListLength}`); //for debugging
  for (var i = 0; i < passwordLength; i++) {
      password += charList[Math.floor((Math.random() * charListLength))];
  }
  password = String(password);
  console.log(`This is the password: ${password}`); //for debugging
  return password;
}

