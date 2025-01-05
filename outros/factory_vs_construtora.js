//criação literal de objetos
const notasAlunos = {
    Marco: 75,
    Rodolfo: 80,
    Rebeca: 100,
    Paula: 20,
    Caio: 50
}
console.log(notasAlunos)

//criação com a função construtora
function notas() {
    this.Marco = 75
    this.Rodolfo = 80
    this.Rebeca = 100
    this.Paula = 20
    this.Caio = 50
}
const notasDosAlunos = new notas
console.log(notasDosAlunos)

//criação com a função factory
function novasNotas() {
    return {
        Marco: 75,
        Rodolfo: 80,
        Rebeca: 100,
        Paula: 20,
        Caio: 50
    }
}
console.log(novasNotas())