const email = document.getElementById("email");
const senha = document.getElementById("senha");
const formLogin = document.getElementById("formLogin");

let formValido = true;

formLogin.addEventListener("submit", function (event){
    event.preventDefault();
    errorEmail.innerText = "";
    errorPassword.innerText = "";
    errorEmail.classList.add("oculto");
    errorPassword.classList.add("oculto");

    let email = email.value.trim();
    let senha = senha.value;
    
    
});
