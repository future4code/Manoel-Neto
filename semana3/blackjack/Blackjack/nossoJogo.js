/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
function nossoJogo(){

 console.log("Bem vindo ao jogo de Blackjack! Vamos jogar?")

 if(confirm("Deseja iniciar uma nova rodada?")){
   const cartaUmJogUm = comprarCarta()
   const cartaDoisJogUm = comprarCarta()

   const cartaUmJogDois = comprarCarta()
   const cartaDoisJogDois = comprarCarta()

   const total1 = cartaUmJogUm.valor + cartaDoisJogUm.valor
   const total2 = cartaUmJogDois.valor + cartaDoisJogDois.valor

   console.log(`Usuário - cartas: ${cartaUmJogUm.texto} ${cartaDoisJogUm.texto} - pontuação ${total1}`)
   console.log(`Computador - cartas: ${cartaUmJogDois.texto} ${cartaDoisJogDois.texto} - pontuação ${total2}`)
   if(total1 < total2){
      console.log("O computador ganhou! UHUUUUUUUUUUUL")
   } else if(total1 > total2){
      console.log("O usuário ganhou! IRRRRRRRRRRRA")
   } else{
      console.log("Empate! MEH")
   }
    

 }else{
    console.log("O jogo acabou.")
 }
}
