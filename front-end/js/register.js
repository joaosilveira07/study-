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
        field.innerText = "";
    })
}

form.addEventListener("submit", function (event){
    event.preventDefault();
    clearErrors();

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

    // Validation date of birth
    let today = new Date();
    
    if (dateBirth === ""){
        showError(errorDateBirth, "The date of birth is required.");
        formValido = false;
    } else {
        const dateBirthObject = new Date(dateBirth);

        if (dateBirthObject.getFullYear() > today.getFullYear()) {
            showError(errorDateBirth, "The year of birth cannot be greater than the current year.");
            formValido = false;
        } 
        if (dateBirthObject.getFullYear() < 1900){
            showError(errorDateBirth, "Enter a valid year of birth.");
            formValido = false;
        }
    }

    // Validation email
    if (email === ""){
        showError(errorEmail, "Email is required.");
        formValido = false;
    } else if (email.length > 300){
        showError(errorEmail, "The Email exceeded the character limit.");
        formValido = false;
    } else if (fieldEmail.validity.typeMismatch){
        showError(errorEmail, "Enter a valid email address.");
        formValido = false;
    }

    // Validation password
    const haveUpper = /[A-Z]/.test(password);
    const haveLower = /[a-z]/.test(password);
    const haveNum = /[0-9]/.test(password);
    const haveSpecial = /[#|@!_*]/.test(password);

    if (password.length <= 8){
        showError(errorPassword, "The password must be at least 8 characters.");
        formValido = false;
    } else if (!haveUpper){
        showError(errorPassword, "The password must contain at least one uppercase character.");
        formValido = false;
    } else if (!haveLower){
        showError(errorPassword, "The password must contain at least one lowercase character.");
        formValido = false;
    } else if (!haveNum){
        showError(errorPassword, "The password must contain at least one number character.");
        formValido = false;
    } else if (!haveSpecial) {
        showError(errorPassword, "The password must contain at least one special character.");
        formValido = false;
    }

    
});
