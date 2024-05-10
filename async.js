function async() {
    setTimeout(() => {
        console.log("função assincrona");
    }, 3000);
}
console.log("Início");

async();

console.log("Fim");

//function async() {
//    setInterval(() => {
//        console.log("função assincrona");
//    }, 3000);
//}
//console.log("Início");

//async();

//console.log("Fim");