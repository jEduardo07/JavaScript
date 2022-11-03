const Nome = document.querySelector('#Nome')
const Altura = document.querySelector('#Altura')
const Peso = document.querySelector('#Peso')
const Calcular = document.querySelector('#Calcular')
const resultado = document.querySelector('#resultado')

function imc(){
   if(Nome.value !== ''){
     const valorIMC =(Peso.value/(Altura.value**2)).toFixed(1)
   
    if(valorIMC <= 18){
        resultado.textContent =`${Nome}, Você possui ${valorIMC} de IMC. Você esta abaixo do peso`
    }else if (valorIMC > 18 && valorIMC <= 25){
       `Você possui ${valorIMC} de IMC. Você esta abaixo do peso ideal` 
    }else{
        resultado.textContent =`${Nome}, Você possui ${valorIMC} de IMC. Você esta acima do peso`
    }
    
   }else{
     alert('preencha o campo vazio!') 
   }
}


Calcular.addEventListener('click', imc)