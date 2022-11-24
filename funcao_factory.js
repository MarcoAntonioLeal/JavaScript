function casa(portas, janelas, banheiros, quartos) {
    return {
        portas: portas,
        janelas: janelas,
        banheiros: banheiros,
        quartos: quartos
    }
}
console.log(casa(5, 4, 2, 8))
console.log(casa(1, 1, 1, 1))

function endereço(país, estado, cidade, rua, numero, cep) {
    return {
        Pais: país,
        Estado: estado,
        Cidade: cidade,
        Rua: rua,
        Numero: numero,
        CEP: cep
    }
}
console.log(endereço('Brasil', 'Rio de Janeiro', 'São Fidélis', 'abacate pra dois', 10, '28415-000'))
console.log(endereço('Brasil', 'São Paulo', 'São Paulo', 'General kkkk', 45, '11152-123'))