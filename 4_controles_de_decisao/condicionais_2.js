const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt("Digite a nota 1: "))
let n2 = parseFloat(prompt("Digite a nota 2: "))

    if(n1 <= 10 && n2 <= 10 && n1 >= 0 && n2 >= 0) {
        let media = (n1 + n2) / 2
        if (media >= 5 && n1 > 0 && n2 > 0) {
            console.log("Aprovado")
        } else {
            console.log("Reprovado")
        }
      }
      else{
        console.log("Digite apenas números entre 0 e 10")
      }  


