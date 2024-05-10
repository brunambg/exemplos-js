const itens = [
    { numero:123, status:'Enviado', total: 230 },
    { numero:124, status:'Pago', total:600 },
    { numero:122, status:'Entregue', total: 100 },
    { numero:121, status:'Enviado', total: 400 },
    { numero:120, status:'Pago', total: 500 },
]

let soma = 0;
for (let i = 0; i < itens.length; i++) {
    soma += itens[i].total;
}

console.log(soma);

//reduce = executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
total = itens.reduce((acum, item)=> acum+item.total,0 );
console.log(total);