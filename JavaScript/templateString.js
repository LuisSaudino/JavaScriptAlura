const nome = 'Luis'
const idade = 2023-2000
const cidadeNascimento = 'Itu'
const apresentacao = 'meu nome é ' + nome + ', minha idade é ' + idade + ' e nasci na cidade de ' + cidadeNascimento

console.log(apresentacao)

//template string

const templetaString = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeNascimento}`

console.log(templetaString)

//outro teste
{
const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)
}