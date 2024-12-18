const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    //Verifica se o nome está vazio
    if(nameInput.value === ""){
        alert("Por favor, preencha o seu nome");
        return;
    }

    //Verifica se o e-mail está preenchido e se é válido
    if(emailInput.value === ""|| !isEmailValid(emailInput.value)){
        alert("Por favor, preencha o seu e-mail");
        return;
    }

    //Verifica se a senha está preenchida
    if(!validatePassword(passwordInput.value,8)){
        alert("A senha precisa de no mínimo 8 dígitos.");
        return;
    }

    // Verificar se a situação foi selecionada
    if(jobSelect.value ===""){
        alert("Por favor, selecione a sua situação");
        return;
    }

    //Verifica se a mensagem está preenchida
    if(messageTextarea.value === ""){
        alert("Por favor, escreva uma mensagem");
        return;
    }

    //Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
});

//Função que valida e-mail
function isEmailValid(email){

    //cria uma regex para validar e-mail
    const emailRegex = new RegExp( 
        // exemplo de email: usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/  // a barra antes do ponto signiofica que o ponto é ponto mesmo, não outro caractere
    );
    if(emailRegex.test(email)){
        return true;
    }
        return false;
}

//Função que valida a senha
function validatePassword(password, minDigits){
    if(password.length >= minDigits){
        //senha válida
        return true
    }
    //senha inválida
    return false
}




