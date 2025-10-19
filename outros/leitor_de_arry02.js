const produtos = [
  {
    id: 1,
    nome: "Notebook",
    preco: 3500,
    categorias: ["eletrônicos", "informática"]
  },
  {
    id: 2,
    nome: "Camiseta",
    preco: 80,
    categorias: ["vestuário"]
  },
  {
    id: 3,
    nome: "Smartphone",
    preco: 2500,
    categorias: ["eletrônicos"]
  }
];

const novoNome = produtos.forEach(element => element.nome == 'Smartphone')

const id = produtos.find(element => element.id === 3)

console.log(id)
console.log(id.id)
console.log(novoNome)