const prompt = require('prompt-sync')();

let ano = prompt("Digite um ano com 4 algarismos: ")

if (ano % 4 === 0 && ano % 100 != 0 || ano % 400 === 0) {
    console.log("É um ano bissexto")
}

else 
console.log("Não é um ano bissexto")
