let elCasas = document.querySelectorAll(".casa");

// similar ao primeiro for, que era:
// for (int i=0; i < elCasas.length; i++) { ... = elCasas[i].querySelector...
for(let elCasa of elCasas) {
    let elLargura = elCasa.querySelector(".info-largura");
    let elComprimento = elCasa.querySelector(".info-comprimento");
    let elArea = elCasa.querySelector(".info-area");

    let area = elLargura.textContent * elComprimento.textContent;

    if (area < 0) {
        elArea.textContent = "-";
        elCasa.classList.add("area-invalida");
    } else {
        elArea.textContent = area;
    }
}

//função de tratamento do evento, que se encontra no index.html (elemento tbody)
function trataEvento() {
    // pegar o elemento do evento e apagar
    event.target.parentNode.remove();
}


