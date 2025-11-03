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

        fnameValidationMessage.textContent = "";
        lnameValidationMessage.textContent = "";
        validationMessage.textContent = "";
        passValidationMessage.textContent = "";
        rePasswordValidationMessage.textContent = "";



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
        passValidationMessage.textContent = "Password must contain at least 8 characters, including uppercase, lowercase, number, and special symbol.";
        return false;
    }

    if (rePassword === "") {
        e.preventDefault();
        rePasswordValidationMessage.textContent = "Please confirm your password";
        return false;
    } else if (rePassword !== password) {
        e.preventDefault();
        rePasswordValidationMessage.textContent = "Passwords do not match";
        return false;
    }


    

    validationMessage.textContent = "";
        localStorage.setItem("First Name",fname);
        localStorage.setItem("Last Name",lname);
        localStorage.setItem("Email",email);
        localStorage.setItem("Password",password);
        
        for (let i = 0; i < localStorage.length; i++) {
            const Key = localStorage.key(i);
            const items =localStorage.getItem(Key);
            console.log(`${Key}: ${items}`);
        }
    return true
}


function LoginValidateForm(e) {
   
    var loginEmail = document.getElementById("email-input").value;
    var loginPassword = document.getElementById("password-input").value;
    var validationMessage = document.getElementById('validationMessage');
    var passValidationMessage = document.getElementById('passValidationMessage');
    var loginValidationMessage = document.getElementById('loginValidationMessage');


    if (loginEmail === "") {
        e.preventDefault();
        validationMessage.textContent = "Email is required"; 
        return false;
    } else if (emailReg.test(loginEmail) === false) {
        e.preventDefault();
        validationMessage.textContent = "Please enter a valid email address";
        return false;
    }

    if (loginPassword === "") {
        e.preventDefault();
        passValidationMessage.textContent = "Password is required";
        return false;
    } else if (passReg.test(loginPassword) === false) {
        e.preventDefault();
        passValidationMessage.textContent = "Password must contain at least 8 characters, including uppercase, lowercase, number, and special symbol.";
        return false;
    }



    

        validationMessage.textContent = "";
      
        const localEmail= localStorage.getItem("Email");
        const localPassword = localStorage.getItem("Password")

        if (localEmail === loginEmail && localPassword === loginPassword) {
            var localFirstName = localStorage.getItem("First Name");
            var localLastName = localStorage.getItem("Last Name");
            document.getElementById("show_name").textContent = localFirstName + localLastName
            window.location.href = "interface_Page.html";
            //return true
        }
        else{
            e.preventDefault();
            loginValidationMessage.textContent="Incorrect email or password. Please try again";
            return false;
        }
        
    
}



function fnameValidateInput() {
   var fname = document.getElementById("f-name").value;
   var fnameValidationMessage = document.getElementById('fnameValidationMessage');
   
    if (!nameReg.test(fname)) {
        fnameValidationMessage.textContent = "Enter a valid name (letters only)";
    }

    else {
        fnameValidationMessage.textContent = "";
    }


}

function lnameValidateInput() {
    var lname = document.getElementById("l-name").value;
    var lnameValidationMessage = document.getElementById('lnameValidationMessage');

   
    if (!nameReg.test(lname)) {
        lnameValidationMessage.textContent = "Enter a valid name (letters only)";
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
        passValidationMessage.textContent = "Password must contain at least 8 characters, including uppercase, lowercase, number, and special symbol.";
        
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

window.addEventListener("DOMContentLoaded", () => {
  const localFirstName = localStorage.getItem("First Name");
  const localLastName = localStorage.getItem("Last Name");
  const showName = document.getElementById("show_name");
  const loginLink = document.getElementById("loginLink");
  const registerLink = document.getElementById("registerLink");
  const logoutBtn = document.getElementById("logoutBtn");
  const getquizbtn = document.getElementById("getquizbtn");


  if (localFirstName && localLastName) {
    
    document.getElementById("show_name").innerHTML = `
  <span class="hi">Hi</span>
  <span class="name">${localFirstName} ${localLastName}</span>
`;
    showName.style.display = "inline-block";

    
    loginLink.style.display = "none";
    registerLink.style.display = "none";

    
    logoutBtn.style.display = "inline-block";
    getquizbtn.addEventListener("click", () => {
         window.location.href="ExamPage.html";
    })

  }

 
  logoutBtn.addEventListener("click", () => {
    localStorage.clear(); 
    window.location.reload(); 
  });
});



