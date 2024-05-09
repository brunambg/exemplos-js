var numeros = [10,20,9,12,15];
var soma = 0;

function media() {
    for (let i = 0; i< numeros.length; i++) {
        soma = soma + numeros[i];
    }
    return soma/numeros.length;
}

console.log("Média: " + media());