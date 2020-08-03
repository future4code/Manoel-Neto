import UserAccount from './UserAccount'
import Transactions from './Transactions'
import Bank from './Bank'
import JSONFileManager from './JSONFileManager'
import moment from 'moment'

// é um método especial parar a criação e inicialização de um objeto cruado a partir de uma classe.
//constructor([argumentos]) { ... }
//foi impressa apenas uma vez.
//através dos metodos get

const fileManager = new JSONFileManager('./data.json')
const accountsList = fileManager.readDatabase()

const bank = new Bank(accountsList, fileManager)

const newAccount = new UserAccount(process.argv[2], process.argv[3], process.argv[4])
// bank.createAccount(newAccount)

// const all = bank.getAllAccounts()
// console.log(all)

const findAccount = bank.getAccountByCpfAndName(process.argv[2], process.argv[3])
// console.log(findAccount)


const checkBalance = newAccount.getBalance()
const addBalance = newAccount.addBalance(200)



