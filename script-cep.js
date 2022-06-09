let inputCep = document.querySelector("#form-cep input");
let botaoCep = document.querySelector("#form-cep button");
let pCep = document.querySelector("#endereco");

function pesquisarCep (event) {
    event.preventDefault();
    let cepDigitado = inputCep.value;
    fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`, 
    {
        method: "GET"
    })
    .then((resposta) => {
        console.log(resposta);
        return resposta.json();
    })
    .then((jsonConvertido) => {
        console.log(jsonConvertido)
        pCep.innerHTML = jsonConvertido.logradouro;
    })
}

botaoCep.onclick = pesquisarCep;
