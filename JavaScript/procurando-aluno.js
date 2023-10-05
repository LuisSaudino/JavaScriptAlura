const alunos = ['José','Gabriel','Bianca','Ana','Caio']
const notas = [10,9,5,8,9.5]

const listaDeAlunos = [alunos,notas]

const media = function(nome) {
    if (listaDeAlunos[0].includes(nome)) {
        const [alunos,medias] = listaDeAlunos

        const indice = alunos.indexOf(nome)
        const mediaAluno = medias[indice]

        console.log(`${nome} tem a media ${mediaAluno}`)
    } else {
        console.log('Aluno não encontrado')
    }
}

media('Ana')