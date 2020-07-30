const operation: string = process.argv[2]
const numberOne: number = Number(process.argv[3])
const numberTwo: number = Number(process.argv[4])

if (process.argv.length === 5){
  switch(operation){
    case 'sum':
      console.log('\x1b[31m', (numberOne + numberTwo).toString())
      break;
    case 'sub':
      console.log('\x1b[33m', (numberOne - numberTwo).toString())
      break;
    case 'mult':
      console.log('\x1b[36m',(numberOne * numberTwo).toString())
      break;
    case 'div':
      console.log('\x1b[35m', (numberOne / numberTwo).toString())
      break;
  
    default:
      console.log('Operação inválida.')
      break;
  
  }
} else {
  console.log('\x1b[31m', `Esperava 3 parametros e só recebi ${process.argv.length - 2}` )
}

