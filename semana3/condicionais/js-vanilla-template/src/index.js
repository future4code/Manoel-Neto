// Exercicio 1
// O programa checa se o modulo do numero por 2 é igual a zero, ou seja, se o numero é par.
// Caso o numero seja par, ele passa no teste, caso contrario, o numero seja impar, o numero nao passa no teste.

// Exercicio 2
// a. O código acima serve para evitar os usos de else if, e ele serve para analisar os casos de acordo com a resposta 
// do usuario, quando atinge a parte necessária, ele da um break e para de rodar o codigo.

// b. A mensagem impressa no console sera: O preço da fruta Maçã é R$ 2.25

// c. O preço seria de 24.55 reais

// d. O programa continuaria rodando até o alcançar o proximo break, e retornaria o valor da pêra de RS 5.

// Exercicio 3
// Não haverá uma mensagem, porque o programa apresentará erro. Pelo fato de ao pedir que o console exiba a mensagem,
// essa nao faz parte do escopo da condicao, entao nao consegue acessar a variavel mensagem e retornar seu valor, porque nao
// é uma filha daquele escopo.

// Exercicio 4
// a
const numero1 = prompt("Digite um numero")
const numero2 = prompt("Digite outro numero")

if(numero1 > numero2){
    console.log(numero1, " , ", numero2)
}else if(numero1 < numero2){
    console.log(numero2, " , ", numero1)
} else{ 
    console.log("Os numeros são iguais.")
}

// b e c
const num1 = prompt("Digite um numero")
const num2 = prompt("Digite outro numero")
const num3 = prompt("Digite mais um numero")

const numero1 = Number(num1)
const numero2 = Number(num2)
const numero3 = Number(num3)

if(numero1 > numero2 && numero1 > numero3){
    if(numero2 > numero3){
        console.log(numero1, " , ", numero2, " , ", numero3)
    } else{
        console.log(numero1, " , ", numero3, " , ", numero2)
    }
}else if(numero2 > numero1 && numero2 > numero3){
    if(numero1 > numero3){
        console.log(numero2, " , ", numero1, " , ", numero3)   
    }else{
        console.log(numero2, " , ", numero3, " , ", numero1)
    }
}else if(numero3 > numero1 && numero3 > numero2){
    if(numero1 > numero2){
        console.log(numero3, " , ", numero1, " , ", numero2)
    }else{
        console.log(numero3, " , ", numero2, " , ", numero1)
    }
}else if(numero1 === numero2 ){
    if(numero1 > numero3){
        console.log(numero1, " , ", numero1, " , ", numero3) 
    }else if(numero1 < numero3){
        console.log(numero3, " , ", numero1, " , ", numero1)
    }else{
        alert("Todos os tres numeros sao iguais, digite um diferente.")
    }
}else if(numero1 === numero3){
    if(numero1 > numero2){
        console.log(numero1, " , ", numero1, " , ", numero2)
    }else if(numero1 < numero2){
        console.log(numero2, " , ", numero1, " , ", numero1)
    }else{
        alert("Todos os tres numeros sao iguais, digite um diferente.")
    }
}else if(numero2 === numero3){
    if(numero2 > numero1){
        console.log(numero2, " , ", numero2, " , ", numero1)
    }else if (numero2 < numero3){
        console.log(numero1, " , ", numero2, " , ", numero2)
    }else{
        alert("Todos os tres numeros sao iguais, digite um diferente.")
    }
}

// Exercicio 5
// a. imagem anexada no git

// b
 const animal = prompt("É uma animal?")
 if(animal === "sim"){
    const ossos = prompt("Tem ossos?")
        if(ossos === "sim"){
            const pelo = prompt("Possui pelos?")
                if(pelo === "sim"){
                    const racional = prompt("É racional?")
                    if(racional === "sim"){
                        alert("É humano")
                    } else{
                        alert("É um mamifero nao humano")
                    }
                }else{
                    const pena = prompt("Possui pena?")
                    if(pena === "sim"){
                        alert("É uma ave!")
                    }else{
                        const terrestre = prompt("É terreste?")
                        if(terrestre === "sim"){
                            const meiaVidaAgua = prompt("Possui uma fase de vida na água?")
                            if(meiaVidaAgua === "sim"){
                                alert("É um anfibio!")
                            }else{
                                alert("É um reptil!")
                            }
                        }else{
                            alert("É um peixe.")
                        }
                    }
                }
        }else{
            alert("É um invertebrado.")
        }

 }else {
     alert("É algo, menos um animal.")
 }

// DESAFIO

const nomeCompleto = prompt("Escreva seu nome completo")
const tipoJogo = prompt("Indique o tipo de jogo.\nIN - internacional\nDO - doméstico")
const etapaJogo = prompt("Indique a etapa.\nSF - semifinal\nDT - decisao de terceiro lugar\nFI - final")
const categoria = prompt("Indique a Categoria, sendo elas 1, 2, 3 ou 4")
const qtdIngressos = prompt ("Indique a quantidade de ingressos.")

let valor = null
const dolar = 4.10

if(tipoJogo === "DO"){
    if( Number(categoria) === 1){
        const semiFinalTicket = 1320.00
        const thirdPlaceTicket = 660.00
        const finalTicket = 1980.00
        if(etapaJogo === "SF"){
            valor = semiFinalTicket
        }else if(etapaJogo === "DT"){
            valor = thirdPlaceTicket
        }else{
            valor = finalTicket
        }
        
    } else if(Number(categoria) === 2){
        const semiFinalTicket = 1320.00
        const thirdPlaceTicket = 660.00
        const finalTicket = 1980.00
        if(etapaJogo === "SF"){
            valor = semiFinalTicket
        }else if(etapaJogo === "DT"){
            valor = thirdPlaceTicket
        }else{
            valor = finalTicket
        }
    } else if(Number(categoria) === 3){
        const semiFinalTicket = 1320.00
        const thirdPlaceTicket = 660.00
        const finalTicket = 1980.00
        if(etapaJogo === "SF"){
            valor = semiFinalTicket
        }else if(etapaJogo === "DT"){
            valor = thirdPlaceTicket
        }else{
            valor = finalTicket
        }
    }else if(Number(categoria) === 4){
        const semiFinalTicket = 1320.00
        const thirdPlaceTicket = 660.00
        const finalTicket = 1980.00
        if(etapaJogo === "SF"){
            valor = semiFinalTicket
        }else if(etapaJogo === "DT"){
            valor = thirdPlaceTicket
        }else{
            valor = finalTicket
        }
    }
}else if(tipoJogo === "IN"){
    if( Number(categoria) === 1){
        const semiFinalTicket = 1320.00/dolar
        const thirdPlaceTicket = 660.00/dolar
        const finalTicket = 1980.00/dolar
        if(etapaJogo === "SF"){
            valor = semiFinalTicket
        }else if(etapaJogo === "DT"){
            valor = thirdPlaceTicket
        }else{
            // valor = finalTicket
        }
    } else if(Number(categoria) === 2){
        const semiFinalTicket = 1320.00/dolar
        const thirdPlaceTicket = 660.00/dolar
        const finalTicket = 1980.00/dolar
        if(etapaJogo === "SF"){
            valor = semiFinalTicket
        }else if(etapaJogo === "DT"){
            valor = thirdPlaceTicket
        }else{
            valor = finalTicket
        }
    } else if(Number(categoria) === 3){
        const semiFinalTicket = 1320.00/dolar
        const thirdPlaceTicket = 660.00/dolar
        const finalTicket = 1980.00/dolar
        if(etapaJogo === "SF"){
            valor = semiFinalTicket
        }else if(etapaJogo === "DT"){
            valor = thirdPlaceTicket
        }else{
            valor = finalTicket
        }
    }else if(Number(categoria) === 4){
        const semiFinalTicket = 1320.00/dolar
        const thirdPlaceTicket = 660.00/dolar
        const finalTicket = 1980.00/dolar
        if(etapaJogo === "SF"){
            valor = semiFinalTicket
        }else if(etapaJogo === "DT"){
            valor = thirdPlaceTicket
        }else{
            valor = finalTicket
        }
    }else{
        alert("Categoria Inválida.")
    }
}else{
    alert("Tipo de Jogo invalido")

}

let total = valor * qtdIngressos

switch(tipoJogo){
case "DO":
console.log("------DADOS DA COMPRA------\nNome do cliente: ", nomeCompleto,"\nTipo do jogo: ", tipoJogo,"\nEtapa do jogo: ", etapaJogo, "\nCategoria: ", categoria, "\nQuantidade de ingressos: ", qtdIngressos, " ingressos\n----------VALORES--------\nValor do ingresso: R$",valor,"\nValor total: R$", total)
break;
case "IN":
console.log("------DADOS DA COMPRA------\nNome do cliente: ", nomeCompleto,"\nTipo do jogo: ", tipoJogo,"\nEtapa do jogo: ", etapaJogo, "\nCategoria: ", categoria, "\nQuantidade de ingressos: ", qtdIngressos, " ingressos\n----------VALORES--------\nValor do ingresso: U$",valor,"\nValor total: U$", total)
break;
}