const key = '6475fb70d2067bf9d58cfeb8151cba16'

const inputCidade = document.querySelector('.input-cidade')
const btnBusca = document.querySelector('.botao-busca')
const cidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const imgPrevisao = document.querySelector('.img-previsao')
const textoPrevisao = document.querySelector('.texto-previsao')



// evento
btnBusca.addEventListener('click', cliqueBotao)

// funções
function cliqueBotao() {
    let city = inputCidade.value;
    
    if(city == "") {
        alert('Digite um Cidade')
    }

    buscarCidade(city)
}


async function buscarCidade(city) {
    
    const resultado = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=pt_br`).then(resposta=>resposta.json())

    console.log(resultado);

    exibirDados(resultado)

}

function exibirDados(resultado){

    cidade.textContent = `Tempo em ${resultado.name}`
    temperatura.textContent = `${parseInt(resultado.main.temp)}ºC`     
    imgPrevisao.src = `https://openweathermap.org/img/wn/${resultado.weather[0].icon}.png`
    textoPrevisao.textContent = `${resultado.weather[0].description}`

}