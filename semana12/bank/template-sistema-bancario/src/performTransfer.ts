import { readDatabase, writeToDatabase } from "."
import { transactions } from "./createAccount"
import moment from 'moment'
import updateBalance from "./updateBalance"

const performTransfer = async(fromName: string, fromCPF: string, toName: string, toCPF: string, value: number) => {
  const accounts = readDatabase()
  let foundSender = false
  let foundReceiver = false
  let message = "Dados não conferem."
  let balance: number = 0

  const sender: any = accounts.find((account: any)=> {
    if(account.name === fromName && account.cpf === fromCPF){
      foundSender = true
      balance = account.balance
      return account;
    }
    return;
  })

  const receiver = accounts.find((account: any) => {
    if(account.name === toName && account.cpf === toCPF){
      foundReceiver = true
      return account;
    }
    return;
  })

  let newTransaction: transactions = {
    date: moment().format("DD/MM/YYYY"),
    value,
    description: "",
    processed: false
  }

  if(foundSender && foundReceiver){
    if(balance - value >= 0){
      sender.statement.push({...newTransaction, description: `Transferência feita para ${toName}`})
      receiver.statement.push({...newTransaction, description: `Transferência recebida de ${fromName}`})
      writeToDatabase(accounts)
      updateBalance()
      message = 'Transferência realizada com sucesso.'
    } else {
      message = "Saldo insuficiente"
    }
  }
  console.log(message)
}

performTransfer("Lísia Faleiros", "333.333.333-33", "Walkiria Passos Queiroz", "444.444.444-44", 200)