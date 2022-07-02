const outputValue = document.getElementById("output");

const clearButton = document.getElementById("clear");
clearButton.addEventListener('click', () => output.value = '');

const backspaceButton = document.querySelector("#backspace");
backspaceButton.addEventListener('click', () => outputValue.value = outputValue.value.slice(0,-1));

const resultButton = document.querySelector("#result")
resultButton.addEventListener('click', () => output.value = eval(outputValue.value));

function insertNumber(elem){
    output.value += elem.textContent;    
}
