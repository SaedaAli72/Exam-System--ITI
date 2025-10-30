var emailReg = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
var passReg= new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$")
var nameReg = new RegExp("^[A-Za-z\u0600-\u06FF ]{2,40}$")




function validateForm(e) {
    var fname = document.getElementById("f-name").value;
    var lname = document.getElementById("l-name").value;
    var email = document.getElementById("email-input").value;
    var password = document.getElementById("password-input").value;
    var rePassword = document.getElementById("re-password-input").value;
    var validationMessage = document.getElementById('validationMessage');
    var passValidationMessage = document.getElementById('passValidationMessage');
    var fnameValidationMessage = document.getElementById('fnameValidationMessage');
    var lnameValidationMessage = document.getElementById('lnameValidationMessage');
    var rePasswordValidationMessage = document.getElementById('repassValidationMessage');
    // myRegex = "/[a-z][A-Z]"

    if (fname === "") {
        e.preventDefault();
        fnameValidationMessage.textContent = "First name is required";
        return false;
    } else if (!nameReg.test(fname)) {
        e.preventDefault();
        fnameValidationMessage.textContent = "Enter a valid name (letters only) ";
        return false;
    }

    if (lname === "") {
        e.preventDefault();
        lnameValidationMessage.textContent = "Last name is required";
        return false;
    } else if (!nameReg.test(lname)) {
        e.preventDefault();
        lnameValidationMessage.textContent = "Enter a valid name (letters only) ";
        return false;
    }

    if (email === "") {
        e.preventDefault();
        validationMessage.textContent = "Email is required"; 
        return false;
    } else if (emailReg.test(email) === false) {
        e.preventDefault();
        validationMessage.textContent = "Please enter a valid email address";
        return false;
    }

    if (password === "") {
        e.preventDefault();
        passValidationMessage.textContent = "Password is required";
        return false;
    } else if (passReg.test(password) === false) {
        e.preventDefault();
        passValidationMessage.textContent = "Password must be at least 8 characters and include uppercase,lowercase, number, and special charactars";
        return false;
    }

    if (rePassword === "") {
        e.preventDefault();
        repassValidationMessage.textContent = "Please confirm your password";
        return false;
    } else if (rePassword !== password) {
        e.preventDefault();
        repassValidationMessage.textContent = "Passwords do not match";
        return false;
    }


    

    validationMessage.textContent = "";
    return true
}

function fnameValidateInput() {
   var fname = document.getElementById("f-name").value;
   var fnameValidationMessage = document.getElementById('fnameValidationMessage');
   
    if (!nameReg.test(fname)) {
        fnameValidationMessage.textContent = "First Name is required";
    }

    else {
        fnameValidationMessage.textContent = "";
    }


}

function lnameValidateInput() {
    var lname = document.getElementById("l-name").value;
    var lnameValidationMessage = document.getElementById('lnameValidationMessage');

   
    if (!nameReg.test(lname)) {
        lnameValidationMessage.textContent = "Last Name is required";
    }

    else {
        lnameValidationMessage.textContent = "";
    }


}



function validateInput() {
    var email = document.getElementById("email-input").value;
    var validationMessage = document.getElementById('validationMessage');
   
    if (emailReg.test(email) === false) {
        validationMessage.textContent = "Please enter a valid email address";
    }

    else {
        validationMessage.textContent = "";
    }


}

function passValidateInput(){
    var passValidationMessage = document.getElementById('passValidationMessage');
    var password = document.getElementById("password-input").value;
    

     if (passReg.test(password) === false) {
        passValidationMessage.textContent = "-Password must be at least 8 characters- include uppercase,lowercase, number, and special charactars";
        
    }

    else {
        passValidationMessage.textContent = "";
       
    }
}
function rePassValidateInput(){
    var rePassword = document.getElementById("re-password-input").value;
    var password = document.getElementById("password-input").value;
    var rePasswordValidationMessage = document.getElementById('repassValidationMessage');
    

     if (rePassword !== password) {
        rePasswordValidationMessage.textContent = "Passwords do not match";
        
    }

    else {
        rePasswordValidationMessage.textContent = "";
       
    }
}
