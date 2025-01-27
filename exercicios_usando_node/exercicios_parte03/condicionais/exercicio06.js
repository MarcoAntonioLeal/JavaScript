/*Faça um programa que leia as notas de duas provas e informe se o aluno foi aprovado (média 6.0) */

function statusAluno(nota1, nota2) { 
    
    if(nota1 < 60) {
        console.log('Aluno reprovado na primeira prova')
    } else {
        console.log('Aluno aprovado na primeira prova')
    }

    if(nota2 < 60) {
        console.log('Aluno reprovado na segunda prova')
    } else {
        console.log('Aluno aprovado na segunda prova')
    }
}

statusAluno(40, 50)