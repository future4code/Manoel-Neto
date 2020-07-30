export {}

const name: string = process.argv[2]
const age: number = Number(process.argv[3])

if (process.argv.length === 5){
  console.log(`Olá, \x1b[36m${name}\x1b[0m! Você tem \x1b[36m${age}\x1b[0m anos. Em sete anos voce terá \x1b[36m${age + 7}\x1b[0m. `)
} else {
  console.log('\x1b[31m', `Esperava 2 parametros e só recebi ${process.argv.length - 2}` )
}