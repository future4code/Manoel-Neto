import { readDatabase } from "."
import moment from 'moment'

export const getBalance = (name: string, cpf: string)=> {
  const accounts = readDatabase()
  let message

  accounts.find((account: any) => {
    if(account.name === name && account.cpf === cpf){
      return message = `Saldo disponível: ${account.balance.toFixed(2)}`
    }
    return message =  "Dados não conferem."
  })

  console.log(message)
}

getBalance("Manoel Neto", "222.222.222-22")