const form = document.getElementById("formRegister");

const fieldName = document.getElementById("name");
const fieldDateBirth = document.getElementById("dateBirth");
const fieldEmail = document.getElementById("email");
const fieldPassword = document.getElementById("password");

const errorName = document.getElementById("errorName");
const errorDateBirth = document.getElementById("errorDateBirth");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");

const fieldsError = [
    errorName,
    errorDateBirth,
    errorEmail,
    errorPassword
];

function showError(elementError, message){
    elementError.classList.remove("hidden");
    elementError.innerText = message;
}

function clearErrors(){
    fieldsError.forEach(function (field){
        field.classList.add("hidden");
    })
}

form.addEventListener("submit", function (event){
    event.preventDefault;
    clearErrors;

    const name = fieldName.value.trim().toLowerCase();
    const dateBirth = fieldDateBirth.value;
    const email = fieldEmail.value.trim().toLowerCase();
    const password = fieldPassword.value;

    let formValido = true;

    // Validation name
    if (name === ""){
        showError(errorName, "Name is required.");
        formValido = false;
    } else if (name.length < 2) {
        showError(errorName, "Enter a valid name.");
        formValido = false;
    } else if (name.split(/\s+/).length < 2){
        showError(errorName, "Enter your first and last name.");
        formValido = false;
    }
    
});
