function apresentar(nome){
    return `meu nome é ${nome}`
}

const apresentarArrow = nome => `meu nome é ${nome}`
const soma = (num1,num2) => num1 + num2

console.log(apresentar('jose'))
console.log(apresentarArrow('pedro'))
console.log(soma(10,15))

//arrow com mais de uma linha

const somaNumPequenos = (num1,num2) => {
    if (num1 > 10 || num2 >10) {
        return "somente numeros de 1 a 9"
    }else {
        return num1 + num2
    }
}
console.log(somaNumPequenos(15,5))