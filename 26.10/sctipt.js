const inputElement = document.querySelector('.new-tasks-input')

const addteksbutton = document.querySelector('.new-task-button')

const taksContainer = document.querySelector('.task-container')

function validarBotao(){
   const texto = document.createElement('p')
   taksContainer.appendChild(texto)
   texto.innerText = inputElement.value
   
}


addteksbutton.addEventListener('click', validarBotao);