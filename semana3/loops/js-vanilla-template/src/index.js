// 1 - O código esta fazendo um loop onde ele soma todos os numeros menores que 15,
// ou seja os numeros de 1 a 14, e o resultado será 105.

// 2-
// a. O comando push adiciona valores no final (tail) da Array.
// b. [10, 15, 25, 30]
// c. para numero = 3  [12, 15, 18, 21, 27, 30]
// para numero = 4 [12]

// DESAFIO 1
// 0
// 00
// 000
// 0000
// 3

// 3-

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// a
minValue = array[0]
maxValue = array[0]

for(let i = 0; i < array.length; i++){
    if(array[i] > maxValue){
        maxValue = array[i]
    } else if(array[i] < minValue){
        minValue = array[i]
    }
}
console.log(`O maior número é ${maxValue} e o menor número é ${minValue}`)

//b
const novoArray = []

for(let i = 0; i < array.length; i++){
    let division = array[i]/10

    novoArray.push(division)
}

console.log(novoArray)

//c
const novaArrayDois = []

for (let i = 0; i < array.length; i++){
    if(array[i]%2 === 0){
        novaArrayDois.push(array[i])
    }
}

console.log(novaArrayDois)

//d
const novaArrayString = []

for(let i = 0; i < array.length; i++){
    novaArrayString.push(`O elemento ${i} é ${array[i]}`)
}
console.log(novaArrayString)

//DESAFIO 2
const primeiroNumero = Number(prompt("Digite o número que voce pensou:"))

console.log("Vamos jogar!")

let tentativas = 0

let segundoNumero = null

while(segundoNumero !== primeiroNumero){

    segundoNumero =  Number(prompt("Digite sua tentativa"))

    console.log(`O numero chutado foi: ${segundoNumero}`)

    if(segundoNumero > primeiroNumero){
        console.log(`Erroooooou, o numero é menor`)
    } else if (segundoNumero < primeiroNumero){
        console.log("Errooooou, o numero é maior")
    }  
    tentativas++
}
console.log("Aceeeeeertou")
console.log(`O numero de tentativas foi: ${tentativas}`)

//DESAFIO 3
const numeroUm = Math.floor((Math.random()*100) + 1)

console.log("O computador já gerou um numero aleatorio.\nTente Adivinhar.\nVamos jogar!")

let tentativas = 0

let numeroDois = null

while(numeroUm !== numeroDois){

    numeroDois = Number(prompt("Digite sua tentativa"))

    console.log(`O número chutado foi: ${numeroDois}`)
    if(numeroDois > numeroUm){
        console.log(`Erroooooou, o numero é menor`)
    } else if (numeroDois < numeroUm){
        console.log("Errooooou, o numero é maior")
    } 
    tentativas++
}
console.log("Aceeeeeertou")
console.log(`O numero de tentativas foi: ${tentativas}`)