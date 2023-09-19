// DOM
const timerEl = document.querySelector('#timer')
const markList = document.querySelector('#marks-list')
let intervalId = 0;
let timer = 0
let marks = []

// função para formatar tempo
const formatTime = (time) => {
    const hours = Math.floor(time / 360000)
    const minutes = Math.floor((time % 360000) / 6000)
    const seconds = Math.floor((time % 6000) / 100)
    const hundredths = time % 100;
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${hundredths.toString().padStart(2, '0')}`
}

// função add template no html
// recebi por parametro o lenght vindo do markTime e rodei o index
const addMarkToList = (markIndex, markTime) => {
    // verifica se o cronometro esta zerado
    if(markIndex == 0 || markTime == 0){return;}
    // Insere as mark no html
    markList.innerHTML += `<p>Marca ${markIndex}: ${formatTime(markTime)}</p>`
}

// Push adiciona 1/+ elementos no final da lista, contei a quantidade de marcação no lenght e passei para o timer
const markTime = () => {
    marks.push(timer)
    addMarkToList(marks.length, timer)
}


// função toggler buttons
const toggleTimer = () => {
    const button = document.querySelector('#power')
    const action = button.getAttribute('action')

    clearInterval(intervalId);

    // verifica se ação vai startar ou continuar
    if(action == 'start' || action == 'continue') {
        intervalId = setInterval(() => {
            timer += 1
            setTimer(timer)

        }, 10)

        button.setAttribute('action', 'pause');
        button.innerHTML = '<i class="fa-solid fa-pause"></i>'

    }else if (action == 'pause') {
        button.setAttribute('action', 'continue');
        button.innerHTML = '<i class="fa-solid fa-play"></i>'

    }
}

// set para alterar a impressão do tempo no html
const setTimer = (time) => {
    timerEl.innerText = formatTime(time)
}


// função para resetar o cronometro
const resetTimer = () => {
    clearInterval(intervalId);
    timer = 0
    marks = []
    setTimer(timer)
    markList.innerHTML = '';
    const button = document.querySelector('#power')
    button.getAttribute('action')
    button.innerHTML = '<i class="fa-solid fa-play"></i>'
}


// events
document.querySelector('#power').addEventListener('click', toggleTimer)
document.querySelector('#mark').addEventListener('click', markTime)
document.querySelector('#reset').addEventListener('click', resetTimer)
