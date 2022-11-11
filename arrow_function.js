let pessoa = {
    pessoa1: 'Marco',
    pessoa2: 'Cesar',
    pessoa3: 'Theo',
    equipe: () => console.log(`${this.pessoa1}, ${this.pessao2}, ${this.pessoa3}`)
}
pessoa.equipe()
// Resultado: undefined, undefined, undefined
let trabalho = {
    pessoa1: 'Marco',
    pessoa2: 'Cesar',
    pessoa3: 'Theo',
    equipe: function () {
       return(`${this.pessoa1}, ${this.pessoa2}, ${this.pessoa3}`) 
    }
}
console.log(trabalho.equipe())
// Resultado: Marco, Cesar, Theo

/*Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).

link para estudo*/  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions