const notas = [nota1=10,nota2=6.5,nota3=5,nota4=8]
const media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length

console.log(media)

const calcMedia = (media) => {
    let soma = 0
    for (let i = 0; i < media.length; i++) {
        soma += media[i]    
    }
    return soma/media.length
} 

console.log(calcMedia(notas))


//Desafio
{
    const notas = [10,6,8]
    notas.push(7)

    let calcMedia = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length 
    console.log(calcMedia, notas)
}
{
    const notas = [10,6,8,5.5,10]
    notas.pop()
    console.log(notas)
    let calcMedia = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length 
    console.log(calcMedia, notas)
}
//
{
    const notas = [10, 6.5, 8, 7.5]
    let somaDasNotas = 0
    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }
    console.log(somaDasNotas)
}
//Média com forEach
{
   const notas = [10,6.5,8,7.5,9]
   let  soma = 0
   
   notas.forEach(function(nota,indice,array){
        soma += nota
        console.log(soma)
   })
}