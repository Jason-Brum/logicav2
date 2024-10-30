const prompt = require('prompt-sync')();

let num = parseInt(prompt("Digite um número: "))

let i = 2

while(i <= num) {
    console.log(i)
    i = i + 2
}