const emailformat = /^(?!\.)(?!.*\.{2})[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@(?:[a-zA-Z0-9]+\.)+[a-zA-Z]{2,}$/
const nameformat = /^[A-Za-zÀ-ÖØ-öø-ÿÇç]+(?:\s+[A-Za-zÀ-ÖØ-öø-ÿÇç]+)+$/

const validoEmail = function() {return emailformat.test(document.getElementById("email").value.toString())}

const validoNome = function() {return nameformat.test(document.getElementById("nome").value.toString())}

function verificForm() {
    
    if (!validoNome()) {
        document.getElementById("msg-nome").innerHTML = "Insira um nome válido, por exemplo: João Silva" 
    }
    else {
        document.getElementById("msg-nome").innerHTML = ""
    }

    if (!validoEmail()) {
        document.getElementById("msg-email").innerHTML = "Insira um endereço de e-mail válido, por exemplo: very.common@example.com."
        return
    }
    else {
        document.getElementById("msg-email").innerHTML = ""
    }
}

