import { readDatabase, writeToDatabase } from "."
import { transactions } from "./createAccount"
import moment from 'moment'
import updateBalance from "./updateBalance"

const addBalance = (name: string, cpf: string, value: number) => {
  const accounts = readDatabase()
  let message

  accounts.find((account: any) => {

    const description = "Depósito de dinheiro"
    const date = moment().format("DD/MM/YYYY")

    const newTransaction: transactions = {
      value,
      date,
      description,
      processed: false
    }

    if(account.name === name && account.cpf === cpf){
      account.statement.push(newTransaction)
      writeToDatabase(accounts)
      updateBalance()
      return message = `Valor depositado com sucesso.`
    }
    return message =  "Dados não conferem."
  })
  
  console.log(message)
}


addBalance("Manoel Neto", "111.111.111-11", 1000.00)