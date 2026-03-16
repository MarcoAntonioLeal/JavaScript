const array = []

function add(nome, idade, nota1, nota2) {
    const aluno = {
        nome: nome,
        idade: idade,
        nota1: nota1,
        nota2: nota2
    }
    const addAluno = array.push(aluno)

    return addAluno
}

add('Marco Leal', 36, 80, 60)
add('Heloisa Leal', 40, 90, 70)
add('Sayara Leal', 35, 100, 100)

console.log(array)