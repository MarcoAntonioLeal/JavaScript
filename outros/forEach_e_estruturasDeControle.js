let nomes = ['Marco', 'Jose', 'Theo', 'Sayara', 'Heloisa']
function imprimirNomes(nome, indice) {
    console.log(indice + 1, nome)
}
nomes.forEach(imprimirNomes)
// ou
let alunos = ['caio', 'Ramon', 'Letícia', 'Jaqueline']
alunos.forEach((nome, indice) => console.log(indice + 1, nome))
// ou
for (c in alunos) {
    console.log(`${Number(c) + 1} ${alunos[c]}`)
}