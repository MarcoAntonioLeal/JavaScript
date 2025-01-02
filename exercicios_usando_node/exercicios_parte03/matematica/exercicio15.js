/*15) Crie um programa que solicite ao usuário o valor do raio de uma esfera e calcule e exiba o seu volume.
Formúla: V = 4/3 πr³*/

function volume(raio) {
    console.log(((4 / 3) * (Math.PI * Math.pow(raio, 3))).toFixed(0))
}

volume(2)