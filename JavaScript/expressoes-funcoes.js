function minhaFuncao(){
    //bloco de codigo
}

minhaFuncao('param')

//expressão de função

const soma = function(num1,num2) {return num1 + num2}

console.log(soma(3,4))

//diferença principal: HOISTING
//funcoes e var são "listadas"

console.log(apresentar())
function apresentar() {
    return 'ola!'
}

// console.log(subtracao(5,2)) //causa erro de inicialização
const subtracao = function(num1,num2) {return num1 - num2}