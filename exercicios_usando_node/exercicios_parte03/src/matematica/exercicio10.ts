/*10) Escreva um programa que calcule o perímetro e a área de um triângulo, utilizando as fórmulas P = a + b + c e A = (b * h)/2, onde a, b e c são os lados do triângulo e h é a altura relativa ao lado b.*/

function perimetroDoTriangulo(a:number, b:number, c:number) {
    console.log(a + b + c)
}

function areaDoTriangulo(b:number, h:number) {
    console.log((b * h) / 2)
}

perimetroDoTriangulo(3, 4, 5)
areaDoTriangulo(5, 8)