const nums = [10,20,30,40,50]
let novoVetor = [ ];

for (let i = 0; i < nums.length; i++) {
    novoVetor.push(nums[i]*2);
}

console.log(novoVetor);

const novoVetor2 = nums.map( n => n*2 );
console.log(novoVetor2);