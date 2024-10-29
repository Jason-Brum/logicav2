const prompt = require('prompt-sync')();

let num = prompt("Digite um número de 0 a 6: ")

switch(num){
    case "0":
        console.log("Domingo")
        break
    case "1":
        console.log("Segunda")
        break
    case "2":
        console.log("Terça")
        break
    case "3":
        console.log("Quarta")
        break
    case "4":
        console.log("Quinta")
        break
    case "5":
        console.log("Sexta")
        break       
    case "6":
        console.log("Sábado")
        break
    default:
        console.log("Digite um número entre 0 e 6")    
}

