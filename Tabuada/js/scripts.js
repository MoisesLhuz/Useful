//Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector(
  "#multiplication-operations"
);
const multiplicationTitle = document.querySelector(
  "#multiplication-title span"
);

// Função
const createTable = (number, multiplicatorNumber) => {
  // limpamos a descrição do titulo
  multiplicationTable.innerHTML = "";

  // loop de quantas vezes o usuario requisitou a multiplicação
  for (i = 1; i <= multiplicatorNumber; i++) {
    // multiplicação e atribuição do resultado
    const result = number * i;

    // montando a tabela para mostrar o resultado no html
    const template = `<div class="row">
            <div class="operation">${number} x ${i} = </div>
            <div class="result">${result}</div>
        </div>`;

    // criando o objeto para mostrar o resultado no html
    const parser = new DOMParser();

    // criando uma variavel e atribuindo o htmlDocumento
    const htmlTemplate = parser.parseFromString(template, "text/html");

    // selecionando a class pai contida no html da variavel template
    const row = htmlTemplate.querySelector(".row");

    // criando e imprimindo o resultado dentro do id no html
    multiplicationTable.appendChild(row);
  }

  //impressão no html do number inicial fator inicial de multiplicação
  multiplicationTitle.innerText = number;
};

// eventos

// add evento de submit no formulário
multiplicationForm.addEventListener("submit", (e) => {
  // evitar o recarregamento da page
  e.preventDefault();

  // atribuição a variavel dos valores dos inputs
  const multiplicationNumber = +numberInput.value;
  const multiplicatorNumber = +multiplicationInput.value;

  // condicional para não ocorrer nada se não obtiver valores no input
  if (!multiplicationNumber || !multiplicatorNumber) return;
  {
    // chamando a função se obtiver valores
    createTable(multiplicationNumber, multiplicatorNumber);
  }
});
