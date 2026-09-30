const form = document.getElementById("formLogin");

const fieldEmail = document.getElementById("email");
const fieldPassword = document.getElementById("senha");

const errorEmail = document.getElementById(errorEmail);
const errorPassword = document.getElementById(errorEmail);

const fieldsError = [
    fieldEmail,
    fieldPassword,
];

const textError = [
    errorEmail,
    errorPassword,
];

function showError(elementError, message){
    elementError.classList.add("hidden");
    elementError.innerText = message;
}

function clearErrors(){
    fieldsError.forEach(function (field){
        field.classList.remove("hidden");
    })
}


form.addEventListener("submit", function (event){
    event.preventDefault();
    clearErrors();

    const email = fieldEmail.value.trim().toLowerCase();
    const password = fieldPassword.value;
    
    let formValido = true;

    // Validação senha
    const haveUpper = /[A-Z]/.test(password);
    const haveLower = /[a-z]/.test(password);
    const haveNum = /[0-9]/.test(password);
    const haveSpecial = /[#|@|!|_|*]/.test(password);

    if (password.length < 8){
        showError(errorPassword, "The password must contain more than 8 characters.");
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

    // Validação email
    if (email === ""){
        showError(errorEmail, "Email is required.");
        formValido = false;
    } else if (fieldEmail.validity.typeMismath){
        showError(errorEmail, "Enter a valid email address.");
        formValido = false;
    }
     
    
});
