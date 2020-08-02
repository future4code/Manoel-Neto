import { readDatabase, writeToDatabase } from "."
import moment from 'moment'


const updateBalance = () => {
  const accounts = readDatabase()
  
  accounts.forEach((account: any) => {

    account.statement.forEach((bill: any) => {
      const dateDiff = moment(bill.date, "DD/MM/YYYY").diff(moment(), "days")
      if(!bill.processed && dateDiff <= 0 ) {
        if(bill.description.match(/Depósito/i) || bill.description.match(/Transferência recebida/i)) {
          account.balance += bill.value
        } else{
          account.balance -= bill.value
        }
          bill.processed = true
      }
    })
    writeToDatabase(accounts)
  })
}
export default updateBalance

updateBalance()