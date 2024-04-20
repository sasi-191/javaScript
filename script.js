const names = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const form = document.getElementById('form');
const nameerror = document.getElementById('nameerror');
const emailerror = document.getElementById('emailerror');
const passerror = document.getElementById('passerror');
const cpasserror = document.getElementById('cpasserror');
const output = document.getElementById('output');
const off = document.getElementById('off');
const an = document.getElementById('a');
const body = document.querySelector("body");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validate();

    if (password.value != '' && cpassword.value === password.value) {
        off.style.display = "none";
        output.style.display = "block";
        body.style.backgroundImage = "none";
        output.innerHTML = "Your registration is sucessfull  " + names.value + "</br> Your username is " + names.value + "  and email is " + email.value + "</br> Thank You.";
        an.style.display = "block";
    }
    else {
        validate();
    }
})

function validate() {
    var emailcheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (names.value === '' || names.value == null) {
        nameerror.innerHTML = "Name is required*"
    }
    else {
        nameerror.innerHTML = "";
    }


    if (!email.value.match(emailcheck)) {
        emailerror.innerHTML = "Valid Email is required*";
    }
    else {
        emailerror.innerHTML = "";
    }


    if (password.value.length < 5) {
        passerror.innerHTML = "Password must be more than 6 characters"
    }
    else {
        passerror.innerHTML = "";
    }

    if (password.value != cpassword.value && password.value.length < 5) {
        cpasserror.innerHTML = "Password does not match"
    }
    else {
        cpasserror.innerHTML = "";
    }
}
