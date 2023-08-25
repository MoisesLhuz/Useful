// carregamento das DOM
const hora = document.querySelector("#horas")
const minuto = document.querySelector("#minutos")
const segundo = document.querySelector("#segundos")
const fundo = document.querySelector("#container img")
const texto = document.querySelector(".description")

// função com setInteral para ocorrer o load de 1 segundo
const relogio = setInterval(() => {
    // criei o objeto instâciando a classe date
    let sistema = new Date();

    // atribuição de hora minuto segundo a variavel
    let hr = sistema.getHours();
    let min = sistema.getMinutes();
    let seg = sistema.getSeconds();

    // condicionais para corrigir bug de 1 digito
    if(hr < 10) {
        hr = "0" + hr;
    }
    if(min < 10) {
        min = "0" + min;
    }
    if(seg < 10) {
        seg = "0" + seg;
    }

    if(hr > 6 && hr < 12) {
        fundo.setAttribute('src', 'img/amanhecer.jpg')
        texto.textContent = "Good Morning"
    }else if(hr > 12 && hr < 18) {
        fundo.setAttribute('src', 'img/entardecer.jpg')
        texto.textContent = "Good Afternon"
    }else {
        fundo.setAttribute('src', 'img/anoitecer.jpg')
        texto.textContent = "Good Evening"
    }

    // passando resultado para o html
    hora.textContent = hr;
    minuto.textContent = min;
    segundo.textContent = seg;


},1000);



