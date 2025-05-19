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

    if (assunto.length < 10 || assunto.length > 47) {
        formValido = false;
        if (assunto.length < 10) document.getElementById("msg-assunto").innerHTML = "O assunto deve ter no mínimo 10 caracteres"
        else document.getElementById("msg-assunto").innerHTML = "O assunto deve ter no máximo 47 caracteres"
    }
    else {
        document.getElementById("msg-assunto").innerHTML = ""
    }

    if (document.getElementById("msg").value.toString().length < 50) {
        formValido = false;
        document.getElementById("msg-mensagem").innerHTML = "A mensagem deve ter no mínimo 50 caracteres"
    }
    else {
        document.getElementById("msg-mensagem").innerHTML = ""
    }
    if (formValido) {
        document.getElementById("ctt-obrgd").innerText = `Obrigado por nos procurar ${document.getElementById("nome").value.toString().trim().split(" ")[0]}!`
        document.getElementById("form-finalizado").style.display = "block"
        document.getElementById("form-contato").reset()
        
        const element = document.getElementById("form-finalizado");
        const offset = 100;

        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

