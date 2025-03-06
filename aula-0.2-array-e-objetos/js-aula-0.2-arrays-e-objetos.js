// ARRAY (Vetor ou Lista)
let produtos = []
console.log(typeof(produtos))

let Produtos = ["Computador", "Notebook", "Celular", "Tablet"]
console.log(Produtos)

console.log("Exibindo a lista pelos indices...")
console.log(Produtos[0])
console.log(Produtos[1])
console.log(Produtos[2])
console.log(Produtos[3])
console.log(`1 - ${Produtos[0]} 2 - ${Produtos[1]} 3 - ${Produtos[2]} 4 - ${Produtos[3]}`)

console.log("Exibindo a lista através do FOR...")
for(let i in Produtos) {
    console.log(`${ Number(i) + 1} - ${Produtos[i]}`)
} 
// Altera a variável i para Number para contagem começar em 1 no front para o usuário

console.log("Exibindo a lista através do FOR EACH...")
Produtos.forEach(function (produto) {
    console.log(produto)
})

console.log("Exibindo a lista através do FOR EACH COM INDICES...")
Produtos.forEach((produto, c) => {
    console.log(`${c+1} - ${produto}`)
})