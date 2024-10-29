//Pedir para o usuário digitar um número e mostrar a tabuada desse número até 200

const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite um número: "));

if (!isNaN(num)) {

    for (let i = 0; i <= 200; i++) {
        console.log(num + " x " + i + ":  " + num * i + "\n")
    }

    console.log("Saiu do loop")
    
    }
    
 else {
    console.log("Digite apenas números")
}