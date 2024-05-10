const pessoa  = {
	nome: 'José',
	idade: null,
	cidade: 'Petrópolis'
}

const idadePessoa = pessoa.idade ?? 'Não informado';

console.log(idadePessoa);