let botao = document.getElementById("confirmar")
let lista =  document.getElementById("lista")

botao.addEventListener("click", ()=> {
    let nome = document.getElementById("nome").value ?? ""
    let posicao = document.getElementById("posicao").value ?? ""
    let camisa = document.getElementById("camisa").value ?? ""

   let jogador = `Nome: ${nome} Posição: ${posicao} Camisa: ${camisa}`
   let criarJogador = document.createElement("li")
   criarJogador.innerText = jogador
   lista.appendChild(criarJogador)
})




