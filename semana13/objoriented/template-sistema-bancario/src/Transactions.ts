export default class Transaction {
  private date: string
  private value: number
  private description: string

  constructor(
    date: string,
    value: number,
    description: string
  ){
    console.log("Chamando as transações")
    this.date = date,
    this.value = value,
    this.description = description
  }
}