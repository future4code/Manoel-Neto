import UserAccount from "./UserAccount";
import JSONFileManager from "./JSONFileManager";
import moment from 'moment'

export default class Bank {
  private accounts: UserAccount[];
  private fileManager: JSONFileManager;

  constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
    this.accounts = accounts;
    this.fileManager = fileManager
  }

  public createAccount(userAccount: UserAccount): void {
    //lógica de criar conta aqui
    let message: string = 'O usuário deve ser maior de 18.'
    let age: number = moment().diff(moment(userAccount.getDateOfBirth(), "DD/MM/YYYY"), "years")
  
    if(age >= 18){
      this.accounts.push(userAccount)
      this.fileManager.writeToDatabase(this.accounts)
      message = "Criado com sucesso."
    }
    console.log(message)
  }

  public getAllAccounts(): UserAccount[] {
    //lógica de pegar todas as contas aqui
    let accounts = this.accounts.map((account: any) => {
      return account
    }) 

    return accounts
  }

  public getAccountByCpfAndName(cpf: string, name: string): 
		UserAccount | string {
      // lógica de pegar conta pelo CPF e Nome aqui
      let result: UserAccount | string = 'Dados nao conferem'
      this.accounts.find((account: any) => {
        if(account.name === name && account.cpf === cpf){
          result = account
        }
      })
      return result
	}
}