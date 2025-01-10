/*Crie um programa que leia duas palavras e verifique se a segunda palavra é um anagrama da primeira */

let primeiraPalavra = 'isalp'.toLowerCase()
let segundaPalavra = 'lapis'.toLowerCase()

//1ª forma de fazer
if(primeiraPalavra.length === segundaPalavra.length) {
    for(let i = 0; i <= segundaPalavra.length; i++) {
        if(primeiraPalavra.includes(segundaPalavra[i])) {
            primeiraPalavra = primeiraPalavra.replace(segundaPalavra[i], '')
        }
    }
}

if(primeiraPalavra.length === 0) {
    console.log('Essas palavras são anagrama uma da outra')
} else {
    console.log('Essas palavras não são anagrama uma da outra')
}

//2ª forma de fazer

const primeira = 'isalp'.toLowerCase()
const segunda = 'lapys'.toLowerCase()

const primeiroArray = primeira.split('').sort().join('')
const segundoArray = segunda.split('').sort().join('')

if(primeiroArray === segundoArray) {
    console.log('Essas palavras são anagrama uma da outra')
} else {
    console.log('Essas palavras não são anagrama uma da outra')
}
