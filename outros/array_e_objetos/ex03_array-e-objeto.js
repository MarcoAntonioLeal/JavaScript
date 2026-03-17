const lista = []

const tarefas = ['lavar banheiro', 'varrer', 'passar pano', 'lavar louça']
const horaData = ['primeira data', 'segunda data', 'terceira data', 'quarta data']


function addList(titulo) {
    const minhaLista = {
        titulo: titulo,
        tarefas: {...tarefas},
        horaData: {...horaData}
    }
    const addMinhaLista = lista.push(minhaLista)

    return addMinhaLista
}

addList('tarefas de casa', tarefas, horaData)

lista.forEach(element => {
    console.log(element.tarefas)
    console.log(element.horaData)
})