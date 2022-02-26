const form = document.querySelector(".form");
const fullname = document.querySelector("#name");
const nameErr = document.querySelector(".name-error-container");
const subject = document.querySelector("#subject");
const subjectErr = document.querySelector(".subject-error-container");
const email = document.querySelector("#email");
const emailErr = document.querySelector(".email-error-container");
const address = document.querySelector("#address");
const addressErr = document.querySelector(".address-error-container");
const successful = document.querySelector(".form_success");
const loader = document.querySelector(".loader");

function checkLength (value, len){
    if(value.trim().length >= len){
        return true;
    } else {
        return false;
    }
}

function validateName (name) {
    const regEx = /^[a-za-Z]*$/;
    const patternMatches = regEx.test(name);
    return patternMatches;
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function validateForm(event) {
    event.preventDefault ();

    if(validateName(fullname.value, 0)){
        nameErr.style.display = "none";
    } else {
        nameErr.style.display = "block";
    }
    if(checkLength(subject.value, 9)){
        subjectErr.style.display = "none";
    } else {
        subjectErr.style.display = "block";
    }
    if(validateEmail(email.value,)){
        emailErr.style.display = "none";
    } else {
        emailErr.style.display = "block";
    }
    if(checkLength(address.value, 24)){
        addressErr.style.display = "none";
    } else {
        addressErr.style.display = "block";
    }
    
}

function submit(event) {
    if (validateName(fullname.value, 0) &&
    checkLength(subject.value, 9) &&
    validateEmail(email.value,) &&
    checkLength(address.value, 24) &&
    ) {
        event.preventDefault;
        successful.innerHTML = `<div class="success">Form Successful. </div>;`
        form.reset();

    } else {
        loader.innerHTML = "";
    }
}

form.addEventListener("submit", submit);
