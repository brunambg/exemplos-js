const pessoas = [ 
	{ nome: 'João', idade:30, cidade: 'Rio'},
	{ nome: 'Ana', idade:43, cidade: 'São Paulo'},
	{ nome: 'Maria', idade:54, cidade: 'Juiz de Fora'},
	{ nome: 'José', idade:12, cidade: 'Petrópolis'}
   
]
const nomes = pessoas.map( pessoa => console.log(pessoa.nome) );
console.log(nomes);
