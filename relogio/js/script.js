const hora = document.querySelector("#horas")
const minuto = document.querySelector("#minutos")
const segundo = document.querySelector("#segundos")

const relogio = setInterval(() => {

    let sistema = new Date();

    let hr = sistema.getHours();
    let min = sistema.getMinutes();
    let seg = sistema.getSeconds();

    hora.textContent = hr;
    minuto.textContent = min;
    segundo.textContent = seg;


},1000);



