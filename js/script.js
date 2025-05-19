const emailformat = /^(?!\.)(?!.*\.{2})[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@(?:[a-zA-Z0-9]+\.)+[a-zA-Z]{2,}$/
const nameformat = /^[A-Za-zÀ-ÖØ-öø-ÿÇç]+(?:\s+[A-Za-zÀ-ÖØ-öø-ÿÇç]+)+$/

const validoEmail = function() {return emailformat.test(document.getElementById("email").value.toString())}

const validoNome = function() {return nameformat.test(document.getElementById("nome").value.toString())}

function verificForm() {
    let formValido = true;
    let assunto = document.getElementById("assunto").value.toString()
    if (!validoNome()) {
        document.getElementById("msg-nome").innerHTML = "Insira um nome válido, por exemplo: João Silva" 
        formValido = false;
    }
    else {
        document.getElementById("msg-nome").innerHTML = ""
    }

    if (!validoEmail()) {
        document.getElementById("msg-email").innerHTML = "Insira um endereço de e-mail válido, por exemplo: very.common@example.com."
        formValido = false;
    }
    else {
        document.getElementById("msg-email").innerHTML = ""
    }

    if (assunto.length < 10 || assunto.length > 60) {
        if (assunto.length < 10) document.getElementById("msg-assunto").innerHTML = "O assunto deve ter no mínimo 10 caracteres"
        else document.getElementById("msg-assunto").innerHTML = "O assunto deve ter no máximo 60 caracteres"
    } else {
        document.getElementById("msg-assunto").innerHTML = ""
    }
}

