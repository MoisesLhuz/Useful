// carregamento das DOM
const hora = document.querySelector("#horas")
const minuto = document.querySelector("#minutos")
const segundo = document.querySelector("#segundos")
const fundo = document.querySelector("#container img")
const texto = document.querySelector(".description")
const data = document.querySelector('#data')
const daySemana = document.querySelector('#diaSemana')


// função com setInteral para ocorrer o load de 1 segundo
const relogio = setInterval(() => {
    // criei o objeto instâciando a classe date
    let sistema = new Date();

    // atribuição de hora minuto segundo a variavel
    let hr = sistema.getHours();
    let min = sistema.getMinutes();
    let seg = sistema.getSeconds();
    let dataDeHoje = sistema.toLocaleDateString('pt-br')
    let diaSemana = sistema.getDay()

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
    
    // estrutura condicional para apresentar as imagens
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

    
    switch (diaSemana) {
        case 0:
            daySemana.textContent = "Domingo"
            break;
        case 1:
            daySemana.textContent = "Segunda"
            break;
        case 2:
            daySemana.textContent = "Terça"
            break;
        case 4:
            daySemana.textContent = "Quarta"
            break;
        case 5:
            daySemana.textContent = "Quinta"
            break;
        case 6:
            daySemana.textContent = "Sexta"
            break;
        case 7:
            daySemana.textContent = "Sábado"
            break;    
        default: "Dia invalido"
            break;
    }
    

    // passando resultado para o html
    hora.textContent = hr;
    minuto.textContent = min;
    segundo.textContent = seg;
    data.textContent = dataDeHoje;
    


},1000);



