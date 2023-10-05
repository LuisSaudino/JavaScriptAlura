//Metodo Slice
const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana','Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']
        
const sala1 = alunos.slice(0,10)
const sala2 = alunos.slice(10)
console.log(sala1,sala2)  

//Metodo Splice
{
    const alunos = ['João','Ana','Caio','Lara','Marjorie','Leo']
    alunos.splice(1,0,'Rodrigo','Bianca')
    console.log(alunos)
}

//Metodo Concat
{
    const salaJS = ["Evaldo", "Camis", "Mari"];
    const salaPython = ["Ju", "Leo", "Raquel"];

    const palestra = salaJS.concat(salaPython)
    console.log(palestra)
}
//Lista 2 Dimensões
{
    const alunos = ["João", "Juliana", "Ana", "Caio"];
    const medias = [10, 8, 7.5, 9];

    const alunosEmedias = [alunos,medias]
    console.log(alunosEmedias)
    console.log(alunosEmedias[0][1],alunosEmedias[1][1])
}
//Destructuring
{
    const numerosPares = [2,4,6]
    const numerosImpares = [1,3,5]

    const numeros = [...numerosPares,...numerosImpares]
    console.log(numeros)

    const [num1,num2,...outros] = [1,2,3,4,5,6,7]
    console.log(num1,num2,outros)
}