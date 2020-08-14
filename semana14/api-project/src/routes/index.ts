import app from "../server";
import connection from "../modules";
import { Request, Response } from "express";
import moment from 'moment'

function stringDate(date: any) {
  const newDate = moment(date, "YYYY-MM-DD").format("DD/MM/YYYY")
  return newDate
}

function databaseDate(date: string ) {
  const newDate = moment(date, "DD/MM/YYYY").format("YYYY-MM-DD")
  return newDate
}

//1. criar usuário
async function createUser(body: any): Promise<void> {
  await connection.insert(body).into('Tasks')
}

app.put('/user', async (req: Request, res: Response) => {
  try {
    await createUser(req.body)
    res.status(200).send({ message: 'sucess'})
  } catch(err) {
    res.status(400).send({ message: 'something went wrong'})
  }
});

//2. pegar usuario pela id
async function getUserById(id: any): Promise<any>{
  const result = await connection('Users'). where({id});

  return result[0];
}

app.get('/user/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const user = await getUserById(id)

    if(!user){
      res.status(404).send({ message: 'User not found'})
    }
    
    res.status(200).send(user)
  } catch (err) {
    res.status(500).send({ message: 'something went wrong.'})
  }
})

//3. editar usuário pelo id
async function editUserById(id: any, update: any): Promise<any>{
  let updated: boolean = false
  const result = await connection('Users').where({id}).update(update);

  if(result) {
    updated = true
  }

  return updated;
}
app.post('/user/edit/:id', async (req: Request, res: Response) => {
  
  try {
    const id = req.params.id;
    const result = editUserById(id, req.body)

    if(result){
      res.status(200).send({ message: 'sucess' })
    }
    
    res.status(404).send({ message: 'user not found' })
  } catch (err) {
    res.status(500).send({ message: 'something went wrong.'})
  }
})

//4. Criar tarefa
async function createTask(body: any): Promise<void> {
  await connection.insert(body).into('Tasks')
}

app.put('/task', async (req: Request, res: Response) => {
  try {
    req.body.limit_date = databaseDate(req.body.limit_date)
    await createTask(req.body)
    res.status(200).send({ message: 'success'})
  } catch(err) {
    res.status(500).send({ message: 'something went wrong' + err.message})
  }
});

//5. pegar tarefa pela id
async function getTaskById(id: any): Promise<any>{
  const result = await connection('Tasks'). where({id});

  return result[0];
}

app.get('/task/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if(!id) {
      res.status(400).send({ message: 'Please provide an id'})
    }

    const task = await getTaskById(id)

    if(!task){
      res.status(404).send({ message: 'Task not found'})
    }

    task.limit_date = stringDate(task.limit_date)
    res.status(200).send(task)
  } catch (err) {
    res.status(500).send({ message: 'something went wrong.'})
  }
})