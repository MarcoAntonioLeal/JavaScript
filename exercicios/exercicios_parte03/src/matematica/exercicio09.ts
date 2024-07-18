/*09) Escreva um programa que calcule o perímetro e a área de retângulo utilizando as fórmulas P = 2(l + c) e A = lc, onde l é a largura e c é o comprimento.*/

function perimetroDoRetangulo(comprimento:number, largura:number) {
    console.log(2 * (largura + comprimento))
}

function areaDoRetangulo(comprimento:number, largura:number) {
    console.log(comprimento * largura)
}

perimetroDoRetangulo(4, 5)
areaDoRetangulo(4, 5)