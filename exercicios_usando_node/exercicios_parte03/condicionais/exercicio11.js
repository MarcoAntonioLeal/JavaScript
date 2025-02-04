/*Faça um programa que leia a idade de três pessoas e informe se alguma delas é maior de idade (18 anos) */

function maiorDeIdade(idade01, idade02, idade03) {
    const idade = [idade01, idade02, idade03]
    const maioridade = 18

    idade.forEach(num => {
        if(num >= maioridade) {
            console.log(`Você tem ${num} anos, portanto é maior de idade`)
        }
        else {
            console.log('Nenhum de vocês é amior de idade')
        }
    })
}

maiorDeIdade(10, 25, 38)