const dados = [
    { nome: 'Marco', idade: 34, cor: 'vermelha', cidade: 'Nova Friburgo', quantidade: 4, tempo: 2 },
    { nome: 'Sayara', idade: 34, cor: 'Azul', cidade: 'Cordeiro', quantidade: 2, tempo: 3 },
    { nome: 'Pedro', idade: 45, cor: 'Verde', cidade: 'Cantagalo', quantidade: 3, tempo: 4 }
]
let quantidade = 0

const intervalId = setInterval(() => {
    console.log(dados[0].nome)
    quantidade += 1

    if (quantidade == dados[0].quantidade) {
        clearInterval(intervalId)
        console.log('olá, mundo!')
    }
}, 1000 * dados[0].tempo)

let teste = []

dados.forEach(ev => {
    teste.push(ev.quantidade * ev.tempo)
})

console.log(teste)
console.log(teste.reduce((accumulator, currentValue) => accumulator + currentValue))

//cuidado pois o valor pode ser maior que 100