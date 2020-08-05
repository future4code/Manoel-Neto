import { readDatabase, writeToDatabase } from "."
import { transactions } from "./createAccount"
import moment from 'moment'

const payBill = (name: string, cpf: string, billDesc: string, value: number, paymentDate?: string) => {
  const accounts = readDatabase()
  
  let message

  accounts.find((account: any) => {

    const description = billDesc
    const date = paymentDate || ""

    const newTransaction: transactions = {
      value,
      date,
      description
    }

    const diff = moment(date, "DD/MM/YYYY").diff(moment(), "days")
    const balanceDiff = account.balance - value

    if(account.name === name && account.cpf === cpf && diff >= 0 && balanceDiff >= 0){
      if(date === ""){
        account.balance -= value
      } else {
        account.balance = account.balance
      }
      account.statement.push(newTransaction)
      writeToDatabase(accounts)
      return message = `Saldo disponível: ${account.balance.toFixed(2)}`
    }
    if (diff < 0) {
      return message = 'A data escolhida nao pode ser anterior à de hoje'
    }
    if (balanceDiff < 0){
      return message = 'Saldo indisponível.'
    }
    return message =  "Dados não conferem."
  })

  console.log(message)
}
