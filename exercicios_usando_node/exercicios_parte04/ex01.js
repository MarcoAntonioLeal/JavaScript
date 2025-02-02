/*Em um bingo eu tenho uma cartela com os números 11, 28, 35, 74, 26 e 17. Desenvolva uma função que sorteie números aleatórios entre 1 e 75 até serem sorteados todos os números da cartela. Após sortear toda a cartela exibe no console a frase "Parabéns, você ganhou!" */

const cartelaBingo = [11, 28, 35, 26, 17]
let variavelDeControle = ''
let variavel = 0
const sorteio = (Math.random() * 74 + 1).toFixed(0)

do {
    variavelDeControle = sorteio
    cartelaBingo.forEach((num, index) => {
        if(num == variavelDeControle) {
            variavel += 1
            variavelDeControle = ''
        } else {
            variavelDeControle = ''
        }
    })

    if(variavel == cartelaBingo.length) {
        console.log('Consegui!')
    }
} while(variavel != cartelaBingo.length)

console.log(sorteio)
console.log(cartelaBingo)