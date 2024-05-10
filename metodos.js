const empresas = [
	{nome:"Samsung", ceo: "Kim", anoDeCriacao: 1955 },
	{nome:"Apple", ceo: "Steve Jobs", anoDeCriacao: 1989 },
	{nome:"Facebook", ceo: "Mark", anoDeCriacao: 2002 },
	{nome:"Instagram", ceo: "Mark", anoDeCriacao: 2009 }


];


const nomes = empresas.map(n=> n.nome.substring(0,1) + " " + n.anoDeCriacao);
console.log(nomes);

const filtro = empresas.filter(n=> n.anoDeCriacao > 2000  );
console.log(filtro);