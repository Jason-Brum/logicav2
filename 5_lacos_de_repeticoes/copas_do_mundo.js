//Mostrar os anos das copas do mundo, exceto 1942 e 1946, fazer o programa pular esses anos



for(let ano = 1930; ano <= 2022; ano = ano + 4) {
    if (ano !== 1942 && ano !== 1946){
        console.log(ano)
    }

}
console.log("Esses foram os anos das Copas do Mundo")