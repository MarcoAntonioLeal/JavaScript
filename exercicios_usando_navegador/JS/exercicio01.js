const questao01PrimeiroValor = document.querySelector('#questao01PrimeiroValor')
const questao01SegundoValor = document.querySelector('#questao01SegundoValor')

const questao01btnSoma = document.querySelector('#questao01Soma')
const questao01btnSubtracao = document.querySelector('#questao01Subtracao')
const questao01btnMultiplicacao = document.querySelector('#questao01Multiplicacao')
const questao01btnDivisao = document.querySelector('#questao01Divisao')

const questao01resSoma = document.querySelector('#questao01ResSoma')
const questao01resSubtracao = document.querySelector('#questao01ResSubtracao')
const questao01resMultiplicacao = document.querySelector('#questao01ResMultiplicacao') 
const questao01resDivisao = document.querySelector('#questao01ResDivisao') 

questao01btnSoma.addEventListener('click', () => {
    questao01resSoma.innerText = Number(questao01PrimeiroValor.value) + Number(questao01SegundoValor.value)
})