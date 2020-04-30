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

function desafio(){

   console.log("Bem vindo ao jogo de Blackjack! Vamos jogar?")
  
   if(confirm("Deseja iniciar uma nova rodada?")){
      const cartaUm = comprarCarta()
      const cartaDois = comprarCarta()
  
      const cartaTres = comprarCarta()
      const cartaQuatro = comprarCarta()

     let user = [cartaUm, cartaDois]
     let comp = [cartaTres, cartaQuatro]

     if(cartaUm.texto === "A" && cartaDois.texto === "A"){
         cartaUm = comprarCarta()
         cartaDois = comprarcarta()

         user=[cartaUm, cartaDois]

     }else if(cartaTres.texto === "A" && cartaQuatro.texto ==="A"){
        cartaTres = comprarCarta()
        cartaQuatro = comprarCarta()

        comp = [cartaTres, cartaQuatro]

     }
   let message = confirm(`Sua cartas reveladas são: ${user[0].texto} ${user[1].texto}.\n A carta revelada do computador é: ${comp[0].texto}.\nDeseja continuar? `)
   while(message){
      userNewCard = comprarCarta()
      user.push(userNewCard)

      let soma = null
      for(let i = 0; i < user.length; i++){
         soma += user.valor

         if(soma <21){
            let t = ""
            for(let i = 0; i < user.length; i++){
               t += user.texto + " "
            }
            message = confirm()
         }else{

         }

         }
      }
   

     }
     

     

   }

}