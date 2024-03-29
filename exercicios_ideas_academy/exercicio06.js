/*Faça um programa que a partir de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
A mensagem "Reprovado", se a média for menor do que sete;
A mensagem "Aprovado com Distinção", se a média for igual a dez.*/

function situacaoAluno(n1, n2) {
    const mediaAluno = (n1 + n2) / 2
    if(mediaAluno == 10) {
        return 'nota: ' + mediaAluno + ' Aprovado com Distinção'
    } else if(mediaAluno >= 7) {
        return 'nota: ' + mediaAluno + ' Aprovado'
    } else {
        return 'nota: ' + mediaAluno + ' Reprovado'
    }
}

console.log(situacaoAluno(3, 5))
console.log(situacaoAluno(7, 9))
console.log(situacaoAluno(10, 10))






/*


Leia sobre Objetos do JavaScript e sobre Json note as semelhanças e diferenças e faça uma pergunta sobre!
Desafio1 (input): Faça um programa que pergunte o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre pelo mais barato.
Pesquise no google como enviar a informação que foi digitada no campo <input> do HTML para o JavaScript
Desafio2: A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo. (você define o valor de n)
Desafio3: tente colocar os resultados acima dentro de uma tag <h1></h1> do HTML ao invés de ser no “console.log” (procurar no google)*/