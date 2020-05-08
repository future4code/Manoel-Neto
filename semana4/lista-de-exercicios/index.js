// Interpretacao de código

// ex.1 - existe uma funçao  que recebe como parametro valorEmDolar, que exibe um prompt o qual o usuario digita a cotacao do dolar.
// E retorna o valor convertido em real (valorEmDolar x cotacao). É criado uma variavel que receber essa funcao e o paramento para o 
// valorEmDolar de 100, ao rodar o usuario insere 5.70 como cotacao por exemplo, e a variavel recebe o valor de R$570.00 e é exibida
// no console.

// ex2. - é criada uma funcao wue recebe como parametors o tipo de investimento e um valor, que dependendo o tipo de investimento o calculo
// para o valor apos o investimento é feito de forma diferente, usando o switch, criando diferentes casos. E ao terminar retorna o valor
// atual do investimento. No primeiro caso, novoMontante os parametros sao Acoes e 150, a funcao vai rodar todos os casos ate chegar no caso
// das acoes que pega o valor 150 (segundo parametro) e mutiplica por 1.1 retornando um valor de 165 como valor apos investimento, como chegou
// no caso que precisava a o switch para de rodar gracas ao break que serve para poder parar o codigo de rodar ali. No segundo caso segundoMontante
// o codigo roda todos os casos, e como nao existe nenhum caso com o nome Tesouro Direto, ele da o brak no default. Retornando  a mensagem que 
// o tipo de investimento esta incorreto. Entao sao impressos nos console 165 e tipo de investimento incorreto.

// ex.3
// Sao criadas tres arrays, uma com alguns elementos dentro e outras duas vazias. Depois é rodado um loop o qual checa se cada numero dentro da
// array povoada é par ou impar e guarda eles numa nova variavel, caso o numero seja par, ele é colocado dentro da array 1, caso seja impar ele
// é colocado na array 2. No final é impresso no console o tamnho da array original, que é 14. E exibida logo em seguida o tamanho das novas arrays.
// A array 1 com tamanho igual a 6 e a array 2 com tamanho igual a 8.

// ex.4
// É declarado uma array com alguns elementos dentro, todos numeros. E declarado duas variaveis a de numero 1 com valor infinito e a de numero 2
// com o valor igual a 0. Após isso é criado um loop que pegar todos os numeros dentro da array e feito duas diferentes comparações dentro de dois
// diferentes if's. O primeiro diz que se o numero analisado for menor que o numero1 (infinito), esse numero infinito assume o valor desse numero que
// esta sendo analizado, e assim sucessivamente até chegar no ultimo elemento. O mesmo é feito embaixo porem a condicao de analise é diferente. A qual diz
// que se o numero analisado for maior que o numero 2 ( que tem como valor 0), esse numero 2 vai assumir o valor daquele numero.
// As respostas serao -10 e 1590.

// LÓGICA DE PROGRAMAÇÃO
// Ex. 1
function logicaUm(){
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    for(let i = 0; i < array.length; i++){
        console.log(array[i])
    }

    for(let numeros of array){
        console.log(numeros)
    }

    let i = 0

    while(i < array.length){
        console.log(array[i])
        i++
    }
}

logicaUm()

// Ex. 2
// false
// false
// true
// true
// true

// Ex. 3
// O codigo nao funcionava, pois a constante quantidadeDeNumeroPares nao recebia valor nenhum, implementacao logo abaixo.
function exibirPares(numero){
    const quantidadeDeNumerosPares = numero
    let i = 0;
    while(i < quantidadeDeNumerosPares){
        console.log(i*2)
        i++
    }
}
exibirPares(5)

// Ex. 4
function definirTipoTriangulo (a, b, c){
    if(a===b && a===c){
        console.log("Este triangulo é equilatero!")
    }else if((a===b && a!==c) || (a===c && a !==b) || (b === c && b !==a)){
        console.log("Este triangulo é isoceles")
    }else{
        console.log("Esse triangulo é escaleno")
    }
}
definirTipoTriangulo(3, 3, 3)
definirTipoTriangulo(3, 3, 1)
definirTipoTriangulo(3, 1, 3)
definirTipoTriangulo(1, 3, 3)
definirTipoTriangulo(3, 1, 2)

// Ex. 5
function compararNumeros(a, b){
    if(a > b){
        console.log(`O maior é: ${a}`)
    }else if(b>a){
        console.log(`O maior é: ${b}`)
    }else{
        console.log("Os numeros sao iguais.")
    }

    if(a%b === 0){
        console.log(`O numero ${a} é divisiel por ${b}`)
    }else{
        console.log(`O numero ${a} não é divisiel por ${b}`)
    }
    
    if(b%a === 0 ){
        console.log(`O numero ${b} é divisiel por ${a}`)
    }else{
        console.log(`O numero ${b} não é divisiel por ${a}`)
    }
    if(a-b > 0){
        console.log(`A diferença entre eles é: ${a-b}`)
    }else if(b - a > 0){
        console.log(`A diferença entre eles é: ${b-a}`)
    }else{
        console.log(`A diferença entre eles é: 0`)
    }
}

//FUNÇÕES
// Ex. 1
function sortFunction(a, b){
    return (a - b)
}
function arrumarArray(array){
    array.sort(sortFunction)

    console.log(`O segundo menor valor é: ${array[1]}`)
    console.log(`O segundo maior valor é: ${array[array.length - 2]}`)
}

arrumarArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 34, 68, 54, 23, 55, 90, 62, 44, 32, 36])

// Ex. 2
let showAlert = function(mensagem) {
    alert(mensagem)
}
showAlert("Hello Labenu")

// Objetos
// Ex. 1 - Objeto contem informacoes de variaveis, funcoes ou estrutura de dados. Ele guarda a maneira com qual os dados vao se comportar
// atraves dos atributos a ele dado. O qual podemor guaradar apos em uma array, a qual armazenará um objeto que contem varias informaçoes.

// Ex. 2
function createRectangle(sideA, sideB){
    let rectangle ={
        width: sideA,
        height: sideB,
        perimeter: 2*(sideA + sideB),
        area: (sideA * sideB)
    }

    return rectangle
}