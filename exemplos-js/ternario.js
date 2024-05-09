let testCovid = true;

console.log(testCovid === true?"Positivo":"Negativo");

let tipoPedido = "Entrega";
let status = "Pago";
let situacao = (tipoPedido === "Entrega" && status === "Pago"?"Liberado":"Não liberado");

console.log(situacao);
