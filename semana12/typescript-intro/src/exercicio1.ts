const myString: string = 'Manoel'
// Não aceita um numero, porque o mesmo não é um string.

const myNumber: number|string = 27
//para tambem aceitar uma string é só colocar uma | e o novo tipo
enum Colors {
  RED = 'Red',
  ORANGE = 'Orange',
  YELLOW = 'Yellow',
  GREEN = 'Green',
  BLUE = 'Blue',
  INDIGO = 'Indigo',
  VIOLET = 'Violet'
}
type person = {
  name: string, 
  age: number,
  favouriteColor: Colors
}

const manoel: person = {
  name: 'Manoel',
  age: 27,
  favouriteColor: Colors.ORANGE
}

const kevin: person = {
  name: 'Kevin',
  age: 26,
  favouriteColor: Colors.GREEN
}

const lisia: person = {
  name: 'Lísia',
  age: 24,
  favouriteColor: Colors.VIOLET
}