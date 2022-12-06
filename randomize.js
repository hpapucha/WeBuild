/****  Archana's work ****/

const btn = document.getElementById("temp_form_btn");
const fullname = document.getElementById("fullname");
const jobtitle = document.getElementById("jobtitle");
const phone = document.getElementById("phone");
const email = document.getElementById("email");

const fullnameField = document.querySelectorAll(".fullnamefield");
const jobtitleField = document.querySelectorAll(".titlefield");
const phoneField = document.querySelectorAll(".numberfield");
const emailField = document.querySelectorAll(".emailfield");





btn.addEventListener("click", function(e){
    e.preventDefault();
const fullnameVal = fullname.value;
const jobtitleVal = jobtitle.value;
const phoneVal = phone.value;
const emailVal = email.value;

for(let i=0; i<fullnameField.length;i++){
    fullnameField[i].innerText = fullnameVal;
}

for(let i=0; i<jobtitleField.length;i++){
    jobtitleField[i].innerText = jobtitleVal;
}

for(let i=0; i<phoneField.length;i++){
    phoneField[i].innerText = phoneVal;
}

for(let i=0; i<emailField.length;i++){
    emailField[i].innerText = emailVal;
}

})


/* Archana's work end*/