/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

J = C × i × t (simples)
M = C * (1 + i)^t. (compostos)*/
function jurosSimples(capital, taxa, tempo) {
    console.log(capital * taxa * tempo);
}
function jurosCompostos(capital, taxa, tempo) {
    console.log(capital + (Math.pow((1 + taxa), tempo)));
}
jurosSimples(1000, 0.2, 30);
jurosCompostos(1000, 0.2, 30);
