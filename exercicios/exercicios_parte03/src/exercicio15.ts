/*15) Crie um programa que solicite ao usuário o valor do raio de uma esfera e calcule e exiba o seu volume.
Formúla: V = 4/3 πr³*/

function volumeEsfera(raio:number) {
    const numerador = (4 * (Math.PI * Math.pow(raio, 3)))
    const denominador = 3

    console.log((numerador / denominador).toFixed(0))
}

volumeEsfera(12)