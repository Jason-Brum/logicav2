
//que exemplo bosta

let minhaVariavel = 10

switch(typeof minhaVariavel) {
    case "number":
        console.log("A variável é número.")
        break
    case "string":
        console.log("A variável é string")  
        break  
    case "boolean":
        console.log("A variável é boolean")  
        break  
    case "undefined":
        console.log("A variável é undefined")  
        break
    default:
        console.log("Nenhum tipo conhecido")    
}