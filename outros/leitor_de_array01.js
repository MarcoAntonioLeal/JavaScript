const dados = [
    { nome: 'Marco', idade: 34, cor: 'vermelha', cidade: 'Nova Friburgo', quantidade: 4, tempo: 2 },
    { nome: 'Sayara', idade: 34, cor: 'Azul', cidade: 'Cordeiro', quantidade: 2, tempo: 3 },
    { nome: 'Pedro', idade: 45, cor: 'Verde', cidade: 'Cantagalo', quantidade: 3, tempo: 4 }
]

let quantidade = 0 //valor fixo em 0

function array0() {
    const intervalId = setInterval(() => {
        console.log(dados[0].nome)
        quantidade += 1
    
        if (quantidade == dados[0].quantidade) {
            clearInterval(intervalId)
            quantidade = 0
            array1()
        }
    }, 1000 * dados[0].tempo)
}

function array1() {
    const intervalId = setInterval(() => {
        console.log(dados[1].nome)
        quantidade += 1
    
        if (quantidade == dados[1].quantidade) {
            clearInterval(intervalId)
            
        }
    }, 1000 * dados[1].tempo)
}

function array2() {
    const intervalId = setInterval(() => {
        console.log(dados[2].nome)
        quantidade += 1
    
        if (quantidade == dados[2].quantidade) {
            clearInterval(intervalId)
        }
    }, 1000 * dados[2].tempo)
}



array0()
