// a entrada é uma array, e a saída é um objeto.

type dadosEstastiticas = {
  maior: number,
  menor: number,
  media: number
}

function obterEstatisticas(numeros: number[]): dadosEstastiticas{

    const numerosOrdenados = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([1, 2, 3, 4, 5]))

type amostras = {
  numeros: number[],
  obterEstatisticas: (numeros: number[]) => dadosEstastiticas
}

const amostraDeIdades: amostras = {
  numeros: [21, 18, 65, 44, 15, 18],
  obterEstatisticas: (numeros: number[]) => obterEstatisticas(numeros)
}

console.log(amostraDeIdades)
