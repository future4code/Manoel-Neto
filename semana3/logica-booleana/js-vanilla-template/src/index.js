const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)
//false

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)
//false

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
//true

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)
//false

console.log("e. ", typeof resultado)
//boolean

// a. O que é `array` e como se declara em `JS`?
// array permite armazenar mais de um valor nela, let array = [1, 2, 3, 4, 5]

// b. Qual o index inicial de um `array`?
//o index incial é o 0

// c. Como se determinar o tamanho do `array`?
// array.length

// d. Indique todas as mensagens impressas no console.
let array
console.log('I. ', array)
//undefined

array = null
console.log('II. ', array)
//null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)
//11

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])
// 3 e 4

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)
//19 e 9

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])
//3

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)
//1

// (KELVIN) = (GRAUS_FAHRENHEIT - 32)*5/9 + 273.15
// (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*9/5 + 32

// a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
let fahrenheit = 77
let kelvin = null

kelvin = (fahrenheit - 32) * 5 / 9 + 273.15
console.log(kelvin, "K")

// b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.
let celsius = 80

fahrenheit = celsius * 9 / 5 +32
console.log(fahrenheit, "°F")

// c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.
celsius = 30
fahrenheit = celsius * 9 / 5 +32
kelvin = (fahrenheit - 32) * 5 / 9 + 273.15
console.log(fahrenheit, "°F")
console.log(kelvin, "K")


celsius = prompt("Entre os graus em Celsius para serem convertidos", "Ex.: 20°C")
fahrenheit = celsius * 9 / 5 +32
kelvin = (fahrenheit - 32) * 5 / 9 + 273.15
console.log(fahrenheit, "°F")
console.log(kelvin, "K")

const perg1 = "Qual o seu nome?"
let answer = prompt(perg1)
console.log(perg1)
console.log(answer)

perg1 = "Qual sua área de formação"
answer = prompt(perg1)
console.log(perg1)
console.log(answer)

perg1 = "O que voce mais gosta de fazer?"
answer = prompt(perg1)
console.log(perg1)
console.log(answer)

perg1 = "Onde voce se ve em 5 anos?"
answer = prompt(perg1)
console.log(perg1)
console.log(answer)

perg1 = "Destino dos sonhos"
answer = prompt(perg1)
console.log(perg1)
console.log(answer)
