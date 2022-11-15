function carro () {
    this.portas = 2
    this.potenciaHP = 1000
    this.rodas = 4
    this.modoIgnição = 'botão'
    this.cor = 'branco'
}
const primeiroCarro = new carro
const segundoCarro = new carro
const terceiroCarro = new carro

console.log(primeiroCarro)
console.log(segundoCarro)
console.log(terceiroCarro)

//O protótipo do carro é a classe e os carros produzidos são os objetos