import * as fs from 'fs'

const fileName: string = process.argv[2]
const newTask: string = process.argv[3] + '\n'

try{
  fs.appendFileSync(fileName, newTask)
  console.log('Tarefa adicionada com sucesso.')
} catch (error) {
  console.log('Houve um erro ao atualizar a base de dados.' + error.message)
}