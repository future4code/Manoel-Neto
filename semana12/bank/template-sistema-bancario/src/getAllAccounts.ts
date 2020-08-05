import { readDatabase } from '.'
import moment from 'moment'
import { account } from './createAccount'

const getAllAccounts = () => {
  let accounts = readDatabase()
  
  accounts.forEach((account: any) => {
    console.log(`Nome: ${account.name}\nData de nascimento: ${account.dateOfBirth}\nCPF: ${account.cpf}\nSaldo: ${account.balance}\nTransações feitas: ${account.statement.length}`)
    console.log('--------------------------------------------------')
  })
}

getAllAccounts()