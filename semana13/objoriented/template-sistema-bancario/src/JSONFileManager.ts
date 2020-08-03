import fs from 'fs'

export default class JSONFileManager {

  private fileName: string

  constructor(fileName: string){
    this.fileName = fileName
  }

  readDatabase(): any {
    try {
      const fileData: string = fs.readFileSync(this.fileName).toString()
      return JSON.parse(fileData)
    } catch (error) {
      console.log("Erro ao ler a base de dados: " + error.message)
      return []
    }
  }
  
  writeToDatabase(data: any): void {
    try {
      const dataAsString: string = JSON.stringify(data, null, 2)
      fs.writeFileSync(this.fileName, dataAsString)
      console.log("Salvo com sucesso.")
    } catch (error) {
      console.log("Erro ao salvar os dados: " + error.message)
    }
  }
}