/*console.log('Vamos começar a contar')

let numero = 1

const intervalId = setInterval(() => {
    console.log(numero += 2)
    if(numero > 12) {
        clearInterval(intervalId)
        console.log('Vamos parar por aqui')
    }
}, 1000 * 2)*/

const dados = [
    { nome: 'Marco', idade: 34, cor: 'vermelha', cidade: 'Nova Friburgo', quantidade: 4, tempo: 2 },
    { nome: 'Sayara', idade: 34, cor: 'Azul', cidade: 'Cordeiro', quantidade: 2, tempo: 3 },
    { nome: 'Pedro', idade: 45, cor: 'Verde', cidade: 'Cantagalo', quantidade: 3, tempo: 4 }
]

let quantidade = 0 //valor fixo em 0

const intervalId = setInterval(() => {
    console.log(dados[0].nome)
    quantidade += 1

    if (quantidade == dados[0].quantidade) {
        clearInterval(intervalId)
        console.log('olá, mundo!')
    }
}, 1000 * dados[0].tempo)



