var emailReg = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
var passReg= new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$")


function validateForm(e) {

    var email = document.getElementById("email-input").value;
    var password = document.getElementById("password-input").value;
    var validationMessage = document.getElementById('validationMessage');
    var passValidationMessage = document.getElementById('passValidationMessage');
    // myRegex = "/[a-z][A-Z]"

    if (email === "") {
        e.preventDefault();
        validationMessage.textContent = "this field is required";
        // validationMessage.style.color = "red";
        return false;
    } else if (emailReg.test(email) === false) {
        e.preventDefault();
        validationMessage.textContent = "this field must be email";
        return false;
    }

    if (password === "") {
        e.preventDefault();
        passValidationMessage.textContent = "this field is required";
        return false;
    } else if (passReg.test(password) === false) {
        e.preventDefault();
        passValidationMessage.textContent = "Password must be at least 8 characters and include uppercase,lowercase, number, and special charactars";
        return false;
    }



    

    validationMessage.textContent = "";
    return true
}

function validateInput() {
    var email = document.getElementById("email-input").value; 
    var validationMessage = document.getElementById('validationMessage');
  
    if (emailReg.test(email) === false) {
        validationMessage.textContent = "this field must be email";
    }

    else {
        validationMessage.textContent = "";
    }


}

function passValidateInput(){
     var password = document.getElementById("password-input").value;
     var passValidationMessage = document.getElementById('passValidationMessage');

     if (passReg.test(password) === false) {
        passValidationMessage.textContent = "-Password must be at least 8 characters- include uppercase,lowercase, number, and special charactars";
        
    }

    else {
        passValidationMessage.textContent = "";
       
    }
}