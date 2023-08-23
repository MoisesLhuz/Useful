// carregamento das DOM
const hora = document.querySelector("#horas")
const minuto = document.querySelector("#minutos")
const segundo = document.querySelector("#segundos")

// função com setInteral para ocorrer o load de 1 segundo
const relogio = setInterval(() => {
    // criei o objeto instâciando a classe date
    let sistema = new Date();

    // atribuição de hora minuto segundo a variavel
    let hr = sistema.getHours();
    let min = sistema.getMinutes();
    let seg = sistema.getSeconds();

    // condicionais para corrigir bug de 1 digito
    if(hr > 0 && hr < 10) {
        hr = "0" + hr;
    }
    if(min > 0 && min < 10) {
        min = "0" + min;
    }
    if(seg > 0 && seg < 10) {
        seg = "0" + seg;
    }

    // passando resultado para o html
    hora.textContent = hr;
    minuto.textContent = min;
    segundo.textContent = seg;


},1000);



