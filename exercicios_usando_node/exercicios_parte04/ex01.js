/*Em um bingo eu tenho uma cartela com os números 11, 28, 35, 74, 26 e 17. Desenvolva uma função que sorteie números aleatórios entre 1 e 75 até serem sorteados todos os números da cartela. Após sortear toda a cartela exibe no console a frase "Parabéns, você ganhou!" */

const cartelaBingo = [11, 28, 35, 26, 17]
function sorteio() {return (Math.random() * 74 + 1).toFixed(0)}
variavelDeControle = 0

while(variavelDeControle != cartelaBingo.length) {
        if(cartelaBingo.filter(num => num == sorteio())) {
        variavelDeControle += 1
    }
}



console.log(variavelDeControle)
console.log(cartelaBingo)