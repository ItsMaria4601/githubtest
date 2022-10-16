let password = document.getElementById("psw");

// function passwordPop() {

//     if (password.value != "*" || "@" || "$") {
//         alert("Password should have atleast one special characters");
//     }
//     if (password.value >=60 || password<=90) {
//         alert("password should have atleast one capital letter");
//     }
//     if (password.value >= 1 || password <= 9) {
//         alert("password should have atleast a nemeric digit")
//     }
//     if (password.value.length >= 8) {
//         alert("Length should be greater than 8 digits");
//     }
//     else
//         return true;
        
// }


password = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (password.value.match(lowerCaseLetters)) {
      alert('lower')
    } else {
      alert('upper')
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (password.value.match(upperCaseLetters)) {
      alert('upper')
    } else {
      alert('lower')
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (password.value.match(numbers)) {
      alert('number')
    } else {
     alert('not number')
    }

    // Validate length
    if (password.value.length >= 8) {
      alert('length valid')
    } else {
      alert('length not valid')
    }
  }