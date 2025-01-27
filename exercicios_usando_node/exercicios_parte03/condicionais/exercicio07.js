/*Faça um programa que leia as notas de duas provas, calcule a média aritmética simples, e informe se o aluno foi aprovado (média 6.0) */

function mediaAluno(nota1, nota2) {
    const media = (nota1 + nota2) / 2
    
    if(media < 60) {
        console.log('Média: ' + media + ' | Aluno reprovado')
    } else {
        console.log('Média: ' + media + ' | Aluno aprovado')
    }
}

mediaAluno(65, 50)