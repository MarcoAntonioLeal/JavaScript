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

    resultadoEx04. innerText = `Resultado: A média ponderada entre as notas é ${((mediaProva1 + mediaProva2 + mediaProva3) / 12).toFixed(0)}`

    prova1.value = ''
    prova2.value = ''
    prova3.value = ''
})

//Exercício 05-----------------------------------
const salario = document.querySelector('#salario')
const resultadoEx05 = document.querySelector('#resEx05')
const botaoEx05 = document.querySelector('#btnEx05')

botaoEx05.addEventListener('click', () => {
    if(salario.value < 500) {
        resultadoEx05.innerText = `Resultado: Seu novo salário é R$ ${(salario.value * 1.15).toFixed(0)},00`

    } else if (salario.value <= 1000) {
        resultadoEx05.innerText = `Resultado: Seu novo salário é R$ ${(salario.value * 1.1).toFixed(0)},00`
    } else {
        resultadoEx05.innerText = `Resultado: Seu novo salário é R$ ${(salario.value * 1.05).toFixed(0)},00`
    }
    salario.value = ''

})

/*----------------------Parte 2-----------------------------*/


//Exercício 01-----------------------------------
const novoSalario = document.querySelector('#meuSalario')
const botaoEx01Console = document.querySelector('#btnEx01console')

botaoEx01Console.addEventListener('click', () => {
    console.log('não está funcionado')
    if(novoSalario.value < 500) {
        console.log = ('oi')
    } else if (novoSalario.value <= 1000) {
        console.log = ('ola')
    } else {
        console.log = ('Tudo bem')
    }
    
    novoSalario.value = ''
})






//Exercício 01-----------------------------------
const n1 = document.querySelector('#n1')
const n2 = document.querySelector('#n2')
const resultadoEx06 = document.querySelector('#resEx06')
const botaoEx06 = document.querySelector('#btnEx06')

botaoEx06.addEventListener('click', () => {
    const mediaNota = (Number(n1.value) + Number(n2.value)) / 2
    
    if(mediaNota == 10) {
        return resultadoEx06.innerText = `Resultado: Nota: ${mediaNota} → Aprovado com Distinção`
    } else if(mediaNota >= 7) {
        return resultadoEx06.innerText = `Resultado: Nota: ${mediaNota} → Aprovado`
    } else {
        return resultadoEx06.innerText = `Resultado: Nota: ${mediaNota} → Reprovado`
    }
})

//Exercício 07-----------------------------------
const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
const numero3 = document.querySelector('#numero3')
const resultadoEx07 = document.querySelector('#resEx07')
const botaoEx07 = document.querySelector('#btnEx07')

botaoEx07.addEventListener('click', () => {
    if(numero1.value > numero2.value && numero1.value > numero3.value) {
        return resultadoEx07.innerText = `Resultado: O maior número é o ${numero1.value}`

    } else if(numero2.value > numero1.value && numero2.value > numero3.value) {
        return resultadoEx07.innerText = `Resultado: O maior número é o ${numero2.value}`
        
    } else {
        return  resultadoEx07.innerText = `Resultado: O maior número é o ${numero3.value}`
    }

    numero1.value = ''
    numero2.value = ''
    numero3.value = ''
})



//Exercício 08-----------------------------------
//Exercício 09-----------------------------------