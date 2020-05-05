// 1.
// a) []
// b) (6) [0, 1, 0, 1, 2, 3]
// c) (12) [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

// 2.
// a)0
// // 2
// // undefined
// b) Sim funcionaria perfeitamente, pois o codigo javscript entende que os parametros da funcao mudaram, e passa a buscar
// por parametros do mesmo tipo

// 3.
// Para obter o resultado A o loop passa por todos os elementos da Array, somando cada um e colocando o resultado final na nova Array.
// Já em BarProp, o loop passa por todos os elementos da array mutiplicando eles e depois coloando os na nova array.

// somarMutiplicarArray(array)

4.
a) function calcularIdadeHumanaCachorro(idadeHumana){
   return idadeCachorro = idadeHumana * 7
}
b) function apresentarHumano(nome, idade, endereco, estudante){
    if(estudante === true){
        return(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou estudante.`)
    } else{
        return(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e não sou estudante.`)
    }
}

5. 

function calcularRomanos(ano){
    let seculoDecimal

    if(ano%100===0){
        seculoDecimal = ano/100
    }else {
        seculoDecimal = (Math.floor(ano/100))+1
    }

    const decimais = [10, 9, 5, 4, 1]
    const romanos = ["X", "IX", "V", "IV", "I"]
    
    let i = 0
    let seculoRomano = ""

    while( seculoDecimal > 0){
        if(seculoDecimal >= decimais[i]){
            seculoRomano += romanos[i]
            seculoDecimal -= decimais[i]
        }else{
            i++
        }
    }
    return seculoRomano
}

6.
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

a) function calcularElementos(array){
    arrayLength = array.length

    return arrayLength
}

calcularElementos(array)

b) function calcularParidade(numero){
    if(numero%2 === 0){
        return true
    }
    else{
        return false
    }
}

calcularParidade(10)

c) function calcularParidadeEmArray(array){
    let a = 0
    for(let i = 0; i < array.length; i++){
        if(array[i]%2 === 0){
            a++
        }
    } return a
}

calcularParidadeEmArray(array)

d) function calcularQuantidadePar(array){
    let a = 0
    for(let i = 0; i < array.length; i++){
        if(calcularParidade(array[i])){
            a++
        }
    } return a
}

calcularQuantidadePar(array)

