// ===============================
// CONTADOR DE INSCRITOS
// ===============================

let inscritos = 150;

function participar() {

    inscritos++;

    document.getElementById("contador").innerHTML =
        "Inscritos: " + inscritos;
}


// ===============================
// TROCA DE TEMA
// ===============================

function trocarTema() {

    document.body.classList.toggle("escuro");

}


// ===============================
// MOSTRAR / OCULTAR INFORMAÇÕES
// DAS ATRAÇÕES
// ===============================

function mostrarInfo(botao) {

    const informacao =
        botao.nextElementSibling;

    if (informacao.style.display === "block") {

        informacao.style.display = "none";

    } else {

        informacao.style.display = "block";

    }

}


// ===============================
// VALIDAÇÃO DO FORMULÁRIO
// ===============================

const formulario =
    document.getElementById("formCadastro");

if (formulario) {

    formulario.addEventListener("submit",
        function (evento) {

            evento.preventDefault();

            alert("Pré-cadastro realizado com sucesso!");

            formulario.reset();

        });

}