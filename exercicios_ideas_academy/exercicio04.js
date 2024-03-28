/*Considerando quem escola possui o seguinte sistema de avaliação: 3 provas (p1, p2 e p3) e cada prova tem um peso diferente, a p1 tem peso 2, a p2 tem peso 4 e a p3 tem peso 6. Supondo que um aluno tirou 5.0 na p1, 5.0 na p2 e 8.0 na p3 faça um programa que diz a média ponderada de notas desse aluno.*/

function mediaPonderada(p1, p2, p3) {
    return ((p1 * 2) + (p2 * 4) + (p3 * 6)) / 12
}

console.log(mediaPonderada(50, 80, 40))

