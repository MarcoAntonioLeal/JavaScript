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