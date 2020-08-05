import moment from 'moment'
import { readDatabase, writeToDatabase } from '.'

export type transactions = {
  value: number,
  date: string,
  description: string,
  processed: boolean
}

export type account = {
  name: string,
  dateOfBirth: string
  cpf: string,
  balance: number,
  statement: transactions[]
}

const cpfCheck = (cpf: string): number => {
  const accounts = readDatabase()
  let isRegistered = accounts.map((account: any) => account.cpf).indexOf(cpf)
  return isRegistered
}

const createAccount = (name: string, dateOfBirth: string, cpf: string) => {
  const balance = 0
  const statement: transactions[] = []
  const dob = moment(dateOfBirth, "DD/MM/YYYY")
  const age = moment().diff(dob, "years")
  const accounts = readDatabase()

  const newAccount: account = {
    name,
    dateOfBirth,
    cpf,
    balance,
    statement
  }

  if(age < 18){
    console.log("O usuario deve ser maior de 18 anos.")
  } else if(cpfCheck(cpf) !== -1){
    console.log("O cpf já existe no banco de dados.")
  } else{
    accounts.push(newAccount)
    writeToDatabase(accounts)
    console.log("Conta criada com sucesso.")
  }
}

createAccount("Walkiria Passos Queiroz", "29/08/1968", "555.555.555-55")