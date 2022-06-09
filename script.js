let botao = document.querySelector("button");
let p = document.querySelector("p");
let input = document.querySelector("#nome");

function darBoasVindas (event) {
    event.preventDefault();
    let valorInput = input.value;
    p.innerHTML = `Seja bem vinda(o) ${valorInput}! Aproveite o nosso site`; // template string
    //  "Seja bem vinda(o) " + valorInput + "! Aproveita o nosso site"; --- concatenação de string
}

botao.onclick = darBoasVindas;