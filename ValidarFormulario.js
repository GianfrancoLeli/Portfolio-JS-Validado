function validar() {
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");
    let assunto =document.getElementById("assunto");
    let menssagem = document.getElementById("menssagem");


    if (nome.value =="" || nome.value ==null || nome.value.lenght) {
        alert("o nome não informado");
    
        nome.focus();
        return false;
    }

    if(email.value.indexOF("@") == -1 || 
        email.valueOf.indexOf(".") == -1 ||
        email.value == "" ||
        email.value == null) {

            alert("Por favor, indique um e-mail válido");
            email.focus();
            return;
        }
    if(assunto.value =="") {
        alert("Assunto não informado");
        assunto.focus();
        return;
    }
    if(menssagem.value =="") {
        alert("Escriva uma menssagem");
        assunto.focus();
        return;
    }
    nome.value = '';
    email.value = '';
    assunto.value = '';
    menssagem.value = '';
}