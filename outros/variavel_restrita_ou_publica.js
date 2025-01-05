function exemplo1 () {
    let teste = 'casa1'
    console.log(teste)
}
exemplo1() // resultado: casa1
console.log(teste) // resultado: Error, pois a variável teste ficou restrita somente a função exemplo1

function exemplo2 () {
    this.teste = 'casa2'
    console.log(teste)
}
exemplo2() // resultado: casa2
console.log(teste) // resultado: casa2 | A variável ficará visível pois foi declarada com this, ou seja, o this transformará a variável em pública

