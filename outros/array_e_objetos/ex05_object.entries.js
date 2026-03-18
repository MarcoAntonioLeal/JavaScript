const array = []

const lista = {
    id: 1,
    titulo: 'Tarefas de casa',
    tarefas: ['varrer', 'passar', 'limpar', 'arrumar'],
    dataHora: ['2026-03-12T01:47', '2026-04-02T01:47', '2026-03-08T01:47','2026-04-11T01:47']
}

const tarefas = Object.entries(lista)
const dataHora = Object.entries(lista)

array.push(tarefas[2][1], dataHora[3][1])

for(let i = 0; i < array[0].length; i++) {
    console.log(array[0][i])
    console.log(array[1][i])
}   