//Exercício 01-----------------------------------
const ano = document.querySelector('#anoAtual')
const idade = document.querySelector('#idade')
const resultadoEx01 = document.querySelector('#resEx01')
const botaoEx01 = document.querySelector('#btnEx01')

botaoEx01.addEventListener('click', () => {
    resultadoEx01.innerText = ` Resultado: O ano que você nasceu é ${ano.value - idade.value}`

    idade.value = ''
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

    resultadoEx04.innerText = `Resultado: A média ponderada entre as notas é ${((mediaProva1 + mediaProva2 + mediaProva3) / 12).toFixed(0)}`

    prova1.value = ''
    prova2.value = ''
    prova3.value = ''
})

//Exercício 05-----------------------------------
const salario = document.querySelector('#salario')
const resultadoEx05 = document.querySelector('#resEx05')
const botaoEx05 = document.querySelector('#btnEx05')

botaoEx05.addEventListener('click', () => {
    if (salario.value < 500) {
        resultadoEx05.innerText = `Resultado: Seu novo salário é R$ ${(salario.value * 1.15).toFixed(2)}`

    } else if (salario.value <= 1000) {
        resultadoEx05.innerText = `Resultado: Seu novo salário é R$ ${(salario.value * 1.1).toFixed(2)}`
    } else {
        resultadoEx05.innerText = `Resultado: Seu novo salário é R$ ${(salario.value * 1.05).toFixed(2)}`
    }
    salario.value = ''

})

document.querySelector('#btnApagar').addEventListener('click', () => {
    resultadoEx01.innerText = 'Resultado:'
    resultadoEx02.innerText = 'Resultado:'
    resultadoEx03.innerText = 'Resultado:'
    resultadoEx04.innerText = 'Resultado:'
    resultadoEx05.innerText = 'Resultado:'
})

/*----------------------Parte 2-----------------------------*/

//Exercício 01-----------------------------------
const novoSalario = document.querySelector('#meuSalario')
const botaoEx01Console = document.querySelector('#btnEx01console')

botaoEx01Console.addEventListener('click', () => {
    if (novoSalario.value < 500) {
        console.log(`Seu novo salário é R$ ${(novoSalario.value * 1.15).toFixed(2)}`)
    } else if (novoSalario.value <= 1000) {
        console.log(`Seu novo salário é R$ ${(novoSalario.value * 1.1).toFixed(2)}`)
    } else {
        console.log(`Seu novo salário é R$ ${(novoSalario.value * 1.05).toFixed(2)}`)
    }
    novoSalario.value = ''
})

//Exercício 02-----------------------------------
const n1 = document.querySelector('#n1')
const n2 = document.querySelector('#n2')
const botaoEx02Console = document.querySelector('#btnEx02console')

botaoEx02Console.addEventListener('click', () => {
    const mediaNota = (Number(n1.value) + Number(n2.value)) / 2

    if (mediaNota == 10) {
        console.log(`Nota: ${mediaNota} → Aprovado com Distinção`)
    } else if (mediaNota >= 7) {
        console.log(`Nota: ${mediaNota} → Aprovado`)
    } else {
        console.log(`Nota: ${mediaNota} → Reprovado`)
    }
    n1.value = ''
    n2.value = ''
})

//Exercício 03-----------------------------------
const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
const numero3 = document.querySelector('#numero3')
const botaoEx03Console = document.querySelector('#btnEx03console')

botaoEx03Console.addEventListener('click', () => {
    if (numero1.value > numero2.value && numero1.value > numero3.value) {
        console.log(`O maior número é o ${numero1.value}`)

    } else if (numero2.value > numero1.value && numero2.value > numero3.value) {
        console.log(`O maior número é o ${numero2.value}`)

    } else {
        console.log(`O maior número é o ${numero3.value}`)
    }
    numero1.value = ''
    numero2.value = ''
    numero3.value = ''
})

//Exercício 04-----------------------------------
const numeroDaSemana = document.querySelector('#numeroSemana')
const botaoEx04Console = document.querySelector('#btnEx04console')

function diaSemana(...dia) {
    if (dia == 1) {
        return 'Domingo'
    } else if (dia == 2) {
        return 'Segunda'
    } else if (dia == 3) {
        return 'Terça'
    } else if (dia == 4) {
        return 'Quarta'
    } else if (dia == 5) {
        return'Quinta'
    } else if (dia == 6) {
        return 'Sexta'
    } else if (dia == 7) {
        return 'Sábado'
    }
}

botaoEx04Console.addEventListener('click', () => {
    console.log('Você está na(o): ' + diaSemana(numeroDaSemana.value))
    numeroDaSemana.value = ''
})

//Exercício 05-----------------------------------
const lado1 = document.querySelector('#lado1')
const lado2 = document.querySelector('#lado2')
const lado3 = document.querySelector('#lado3')
const botaoEx05Console = document.querySelector('#btnEx05console')

function ladosDoTriangulo(lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3 && lado1 == lado3) {
        return 'Triângulo equilátero'
    } else if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
        return 'Triângulo escaleno'
    } else {
        return 'Triângulo isósceles'
    }
}

botaoEx05Console.addEventListener('click', () => {
    console.log(ladosDoTriangulo(lado1.value, lado2.value, lado3.value))

    lado1.value = ''
    lado2.value = ''
    lado3.value = ''
})


//Exercício 06-----------------------------------