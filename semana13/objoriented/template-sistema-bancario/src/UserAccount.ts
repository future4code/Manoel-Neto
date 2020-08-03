import Transaction from "./Transactions";
import JSONFileManager from "./JSONFileManager";

export default class UserAccount {
  private name: string;
  private cpf: string;
  private dateOfBirth: string;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
    name: string,
    cpf: string,
    dateOfBirth: string,
  ) {
    this.name = name;
    this.cpf = cpf;
    this.dateOfBirth = dateOfBirth;
  }

  public getBalance = (): number => this.balance
  public getDateOfBirth = (): string => this.dateOfBirth
  public addBalance(name: string, cpf: string, value: number): void {
    this.balance += value
  }
}


// const checkBalance = (users: any, name: string, cpf: string): number | string => {

//   let balance: any = ''

//   users.find((user: any) => {
//     if(user.name === name && user.cpf === cpf){
//       return balance =  user.balance.toFixed(2)
//     }
//     return  balance = 'Os dados nao conferem.'
//   })

//   return balance;
// }
