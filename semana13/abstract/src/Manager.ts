import { Client } from "./Client"
import { JSONFileManager } from "./JSONFileManager";
import { ResidentialClient } from "./ResidentialClient";

export class Manager {
  private clients: Client[] = []
  
  // demais implementações
  public getClientsQuantity(): number {
    return this.clients.length;
  }
  
  public registerClient(client: Client): void {
    this.clients.push(client)
  }

  public calculateClientBill(regNumber: number): number {
    const foundClient = this.clients.find((client: Client) => {
      return client.registrationNumber === regNumber
    })

    if(foundClient){
      return foundClient.calculateBill();
    }

    return 0;
  }

  public calculateTotalIncome(): number {
    let total: number = 0;
    this.clients.forEach((client) => {
      total += client.calculateBill()
    })
    return total;
  }
  
}