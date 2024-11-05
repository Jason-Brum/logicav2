//Crie um lista com 7 nomes e imprima somente os nomes que estão nas posições ímpares do array

const prompt = require('prompt-sync')();

let nomes = ["Marina", "Daniel", "Pedro", "Marta", "Manuela", "Rodrigo"]

for (let i = 0; i < nomes.length; i++) {
    if(i % 2 !== 0) {
        console.log(nomes[i])
    }
}