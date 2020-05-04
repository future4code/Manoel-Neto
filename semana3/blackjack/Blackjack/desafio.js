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

      let cartaUm = comprarCarta();
      let cartaDois = comprarCarta();

      let cartaTres = comprarCarta();
      let cartaQuatro= comprarCarta();

      let user = [cartaUm, cartaDois]
      let comp = [cartaTres, cartaQuatro]

     if(cartaUm.texto[0] === "A" && cartaDois.texto[0] === "A"){
         cartaUm
         cartaDois

         user=[cartaUm, cartaDois]

     }else if(cartaTres.texto[0] === "A" && cartaQuatro.texto[0] ==="A"){
        cartaTres
        cartaQuatro

        comp = [cartaTres, cartaQuatro]

     }
      let soma = 0;

      let message=confirm(`Sua cartas reveladas são: ${user[0].texto} ${user[1].texto}.\n A carta revelada do computador é: ${comp[0].texto}.\nDeseja continuar? `)
      
      while(message){
         const userNewCard = comprarCarta()
         user.push(userNewCard)
         soma = 0 
         for(let i = 0; i < user.length; i++){
            soma += user[i].valor
         
            if(soma <21){
               let texto = ""
               for(let i = 0; i < user.length; i++){
               texto += user[i].texto + "  "
               } 
            message=confirm(`Suas cartas reveladas são: ${texto} \n a Carta revelada do computador é ${comp[0].texto}.\n Deseja continuar?`) 
            }
            else message !== true     
         }    
      }

   }
     alert("O jogo acabou!")
}


// function a(){
//    if(confirm("Quer iniciar uma nova rodada?")){
//       const o=[t(),t()],a=[t(),t()];
//       let r=0,
//       e=confirm("Suas cartas são "+o[0].a+" "+o[1].a+". A carta revelada do computador é "+a[0].a+". Deseja comprar mais uma carta?");
      
//       for(;e;){
//          const u=t();o.push(u),r=0;
//          for(let a of o)r+=a.o;
//          if(r<21){
//             let t="";
//             for(let a of o)t+=a.a+" ";
//             e=confirm("Suas cartas são "+t+". A carta revelada do computador é "+a[0].a+". Deseja comprar mais uma carta?")
//          }
//             else e=!1
//          }
//          r=0;
//             for(let a of o)
//             r+=a.o;
//             let u=0;
//             for(let o of a)
//             u+=o.o;
//             let c=r<=21&&u<=r;

//             for(;c;){
//                const o=t();a.push(o),u=0;
//                for(let o of a)
//                u+=o.o;
//                c=r<=21&&u<=r
//             }
//                resultado=r>21?
//                "O computador ganhou!":
//                u>21?"O usuário ganhou!":
//                u>r?"O computador ganhou!":
//                u<r?"O usuário ganhou!":"Empate!";
//                let s="",n="";
//                for(let a of o)s+=a.a+" ";
//                for(let o of a)n+=o.a+" ";
//                alert("Suas cartas são "+s+". Sua pontuação é "+
//                r+". As cartas do computador são "+n+". A pontuação do computador é "+
//                u+". "+resultado)
//             }
//                else console.log("O jogo acabou!")
//             }