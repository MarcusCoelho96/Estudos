
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

/*---------------------------------------------------- */
form.addEventListener("submit", (event) =>{
    event.preventDefault();

    checkForm();
});

username.addEventListener("blur", () =>{
    checkInputUsername();
});

email.addEventListener("blur", () =>{
    checkInputEmail();
});

password.addEventListener("blur", () =>{
    checkInputPassword();
});

passwordConfirmation.addEventListener("blur", () =>{
    checkInputPasswordConfirmation();
});
/*---------------------------------------------------- */

function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content");

    const isValid = [...formItems].every((item) =>{
        return item.className === "form-content";
    });

    if(isValid){
        alert("Cadastrado com sucesso!");
        username.value = "";
        email.value = "";
        password.value = "";
        passwordConfirmation.value = "";
    }
}
/*---------------------------------------------------- */

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;

    formItem.className = "form-content error";
}

function okInput(input){
    const formItem = input.parentElement;
    formItem.className = "form-content";
}
/*---------------------------------------------------- */

function checkInputUsername(){
    const usernameValue = username.value;
        
    if(usernameValue === ""){
        errorInput(username, "Preencha com o seu nome.");
    }else{
        okInput(username);
    }

}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "Preencha com o seu email.");
    }else{
        okInput(email);
    }
}

function checkInputPassword(){
    const passwordValue = password.value;

    if(passwordValue === ""){
        errorInput(password, "Insira uma senha de 8 dígitos no mínimo.");
    }else if(passwordValue.length < 8){
        errorInput(password, "Sua senha deve conter no mínimo 8 dígitos.");
    }else{
        okInput(password);
    }
}

function checkInputPasswordConfirmation(){
    const passwordConfirmationValue = passwordConfirmation.value;
    const passwordValue = password.value;

    if(passwordConfirmationValue === ""){
        errorInput(passwordConfirmation, "Insira sua senha novamente.");
    }else if(passwordConfirmationValue != passwordValue){
        errorInput(passwordConfirmation, "As senhas devem ser iguais.");
    }else{
        okInput(passwordConfirmation);
    }
}