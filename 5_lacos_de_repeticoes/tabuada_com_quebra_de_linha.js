const prompt = require('prompt-sync')();


let num = parseInt(prompt("Digite um número: "))

for(let i = 1; i <= 500; i++) {
    console.log(num + " x " + i + ": " + num * i + "\n")
    if(i % 10 == 0)
        console.log("-----------")
}