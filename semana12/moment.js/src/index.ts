import * as moment from 'moment'
import * as fs from 'fs'
import { deserialize } from 'v8'

const fileData: string = fs.readFileSync("./events.json").toString()
let events

try {
  events = JSON.parse(fileData)
} catch (error) {
  events = []
  console.log("Erro ao ler a base de dados: " + error.message)
}

moment.locale("pt_br")
//meu computador foi comprado na irlanda, por isso usando o pt_br aqui.

// se declararia moment.locale("en_gb")
console.log(events)

events.forEach((item: any) => {
  let start = moment(item.startDate)
  let end = moment(item.endDate)
  let durationMinutes = end.diff(start, "minutes")
  let durationHours = end.diff(start, "hours")
  let duration = Number(durationMinutes) > 60 ? durationHours + " horas" : durationMinutes + " minutos"
  let daysUntilEvent = end.diff(moment(), "days")

  console.log(`
    Nome: ${item.name}
    Início: ${start.format('dddd, DD [de] MMMM [de] YYYY, HH:mm')}
    Início: ${end.format('dddd, DD [de] MMMM [de] YYYY, HH:mm')}
    Descrição: ${item.description}
    Duração: ${duration}
    Dias até o evento: ${daysUntilEvent}
    ----------------------------------------
  `)
})

type event = {
  name: string,
  description: string,
  startDate: moment.Moment,
  endDate: moment.Moment
}

const newEvent: event = {
  name: process.argv[2],
  description: process.argv[3],
  startDate: moment(process.argv[4], "DD/MM/YYYY HH:mmZ"),
  endDate: moment(process.argv[5], "DD/MM/YYYY HH:mmZ")
}

const addEvent = (newEvent: any) : void => {
  if(!newEvent.name || !newEvent.description || !newEvent.startDate || !newEvent.endDate){
    console.log('Valores inválidos.')
    return;
  }
  if(newEvent.startDate < moment() && newEvent.endDate < moment()){
    console.log("A data nao pode ser anterior à data de hoje.")
  }
  if(process.argv.length !== 6){
    console.log(`Esperava 4 argumentos, no entanto recebemos ${process.argv.length - 2} `)
  }

  try{
    const event: string = JSON.stringify(newEvent, null, 2)
    fs.writeFileSync("./events.json", event)
  } catch(error){
    console.log("Erro ao atualizar.")
  }
}

addEvent(newEvent)