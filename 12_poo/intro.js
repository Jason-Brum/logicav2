class Produto {
    constructor(nome, quantidadeEstoque) {
        console.log("construtor chamado")
        this.nome = nome
        this.quantidadeEstoque
       
    }

    comprar(quantidade){
        this.quantidadeEstoque -= quantidade
    }
    adicionar(quantidade) {
        this.quantidadeEstoque += quantidade

    }
}

const caneta = new Produto("caneta", 10)
const lapis = new Produto("lapis", 20)