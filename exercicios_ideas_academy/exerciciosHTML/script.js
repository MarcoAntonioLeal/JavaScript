//Exercício 01-----------------------------------
const ano = document.querySelector('#anoAtual')
const idade = document.querySelector('#idade')
const resultadoEx01 = document.querySelector('#resEx01')
const botaoEx01 = document.querySelector('#btnEx01')

botaoEx01.addEventListener('click', () => {
    resultadoEx01.innerText = ` Resultado: O ano que você nasceu é ${ano.value - idade.value}`

    idade.value =''
})

//Exercício 02-----------------------------------
const medidaEmMetros = document.querySelector('#medida')
const resultadoEx02 = document.querySelector('#resEx02')
const botaoEx02 = document.querySelector('#btnEx02')

botaoEx02.addEventListener('click', () => {
    resultadoEx02.innerText = `Resultado: ${medidaEmMetros.value} metros tem ${medidaEmMetros.value * 100} centímetros`
    
    medidaEmMetros.value = ''
})

//Exercício 03-----------------------------------
const nota1 = document.querySelector('#nota1')
const nota2 = document.querySelector('#nota2')
const resultadoEx03 = document.querySelector('#resEx03')
const botaoEx03 = document.querySelector('#btnEx03')

botaoEx03.addEventListener('click', () => {
    resultadoEx03.innerText = `Resultado: A média aritmética entre ${nota1.value} e ${nota2.value} é ${(Number(nota1.value) + Number(nota2.value)) / 2}`

    nota1.value = ''
    nota2.value = ''
})

//Exercício 04-----------------------------------
const prova1 = document.querySelector('#prova1')
const prova2 = document.querySelector('#prova2')
const prova3 = document.querySelector('#prova3')
const resultadoEx04 = document.querySelector('#resEx04')
const botaoEx04 = document.querySelector('#btnEx04')

botaoEx04.addEventListener('click', () => {
    const mediaProva1 = prova1.value * 2
    const mediaProva2 = prova2.value * 4
    const mediaProva3 = prova3.value * 6

    resultadoEx04. innerText = `A média ponderada entre as notas é ${((mediaProva1 + mediaProva2 + mediaProva3) / 12).toFixed(0)}`

    prova1.value = ''
    prova2.value = ''
    prova3.value = ''
})

//Exercício 05-----------------------------------






//Exercício 06-----------------------------------