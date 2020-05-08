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