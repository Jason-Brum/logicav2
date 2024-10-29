//Pedir para o usuário digitar um número e mostrar a tabuada desse número até 200

const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite um número: "));

let contador = 0;

while(contador <= 200) {
    console.log(num + " x " + contador + ":  " + num * contador + "\n")
    contador = contador + 1
}