import axios from 'axios'

//get /subscribers/all
//async function getSubscribers(): Promise<any[]> {...}

const api = axios.create({
  baseURL: "https://us-central1-labenu-apis.cloudfunctions.net/labenews",
});

// api.get(`/subscribers`)
//     .then((response) => { 
//         console.log(response.data);
//     })
//     .catch((error) => { //deu tudo errado
//         console.log(error);
//     });

// async function getSubscribers(): Promise<any> {
  
//   try{
//     const subs = await api.get("/subscribers/all")
//     return subs.data;
//   } catch (error) {
//     return console.log('Algo deu errado: ' + error.message)
//   }
// }

// getSubscribers().then(res => {
//   console.log(res)
// })

type Subscriber = {
  id: string,
  name: string,
  email: string
}

const getAllSubscribers = async(): Promise<Subscriber[]> => {
  const subs = await api.get('/subscribers/all')
  return subs.data.map((sub: any) => {
    return {
      id: sub.id,
      name: sub.name, 
      email: sub.email
    }
  })
}

// getAllSubscribers().then(res => {
//   console.log(res)
// })

async function createNews(title: string, content: string): Promise<void> {
  try{
    await api.put('/news', {
      title,
      content,
      date: Date.now()
    })
  } catch(error) {
    console.log("Houve um erro: " + error.message)
  }
}

// createNews("hello world", "hello world")

//O forEach rodaria por toda a array sem esperar a resposta da promise, ou seja,
//ia acabar sendo rejeitada. Se fosse pra usar um forEach é aconselhavel a usar
// um setTimeout para que a cada iteracao ele espere um pouco antes de passar pra
//próxima.

const sendNotification = async(subs: Subscriber[], message: string): Promise<void> => {
  const promiseArray: Promise<any>[] = []
  for(let sub of subs){
    promiseArray.push(
      api.post("/notifications/send", {
        subscriberId: sub.id,
        message: message
      })
    )
  }

  await Promise.all(promiseArray)
}

//Promise.all retorna uma promise que é resolvida quando todas as promises
//no argumento lista forem resolvidas ou rejeitada assim que uma promise da lista
//for rejeitada.
//Porque ela continua rodando enquanto as outras promises forem bem sucedidas,
//em caso de uma ser rejeitada, ela para de rodar.

const createSubscriber = async(name: string, email: string) => {
  await api.put('/subscribers', {
    name,
    email
  })
}

// createSubscriber("hello", "helloworld@hello.com")

// const createAndSendNotifications = async() => {
//   try {
//     await createNews(
//       "Promises",
//       "Olha as promises ai minha gente."
//     )

//     const subs = await getAllSubscribers()

//     await sendNotification(subs, "Testando a mensagem gente!")

//   }catch (e) {
//     console.log(e.message)
//   }
// }

// createAndSendNotifications()

const getAllNotifications = async(): Promise<any> => {
  const subs = await getAllSubscribers()

  const notificationPromises: Promise<any>[] = []

  for (let sub of subs){
    notificationPromises.push(
      api.get(`/subscribers/${sub.id}/notifications/all`)
    )
  }

  const result = await Promise.all(notificationPromises)

  const dataFromResult = result.map(res => res.data)
  return dataFromResult
}

const showMessage = (message: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof message !== 'string'){
        reject('Não é uma string.')
      }
      resolve(message)
    }, 5000)
  })
}