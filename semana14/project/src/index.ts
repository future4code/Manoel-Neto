import connection from './connection'
import app from './server'
import { Request, Response } from 'express';
import { create } from 'domain';

async function getAllActors(): Promise<void> {
  try {
    const result = await connection.raw(`
      SELECT * FROM Actors
    `)
    console.log(result[0])
  } catch (e) {
    console.log(e.message)
  }
}

async function getActorById(name: string): Promise<any> {
  try {
    const result = await connection.raw(`
      SELECT * FROM Actors WHERE name = '${name}'
    `)
    console.log(result[0][0])
  } catch (e) {
    console.log(e.message)
  }
}

async function countActorsByGender(gender: string): Promise<any> {
  try {
    const result = await connection.raw(`
      SELECT COUNT(gender) as count FROM Actors WHERE gender = '${gender}'
    `)
    return result[0]
  } catch (e) {
    return e.message
  }
}

async function deleteActorById(id: string): Promise<any> {
  await connection('Actors').delete().where('id', id)
}

async function avgByGender(gender: string): Promise<any> {
  const result = await connection('Actors')
    .avg('salary as average')
    .where({gender})

  return result[0].average
}

app.get('/actor', async(req: Request, res: Response) => {
  try {
    const count = await countActorsByGender(req.query.gender as string);
    res.status(200).send({
      quantity: count
    });
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
});

async function createActor(id: string, name: string, salary: number, birth_date: Date, gender: string) {
  try {
    await connection.insert({
      id,
      name,
      salary,
      birth_date,
      gender
    }).into('Actors')

    console.log("Sucesso")
  } catch (e) {
    console.log(e.message)
  }
}

app.put('/actor', async(req: Request, res: Response) => {
  try{
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.dateOfBirth),
      req.body.gender
    );

    res.status(200).send('Criado com sucesso')
  } catch(e) {
    res.status(400).send(e.message)
  }
})


async function updateSalary(id: string, salary: number): Promise<any> {
  await connection('Actors').update({
    salary
  }).where('id', id)
}

app.post('/actor', async(req: Request, res: Response) => {
  try{
    await updateSalary(
      req.body.id,
      req.body.salary
    )

    res.status(200).send('Sucesso')
  } catch (e) {
    res.status(400).send(e.message)
  }
})

app.delete('/actor/:id', async(req: Request, res: Response) => {
  try {
    await deleteActorById(
      req.params.id
    )
    res.status(200).send('Excluido')
  } catch (e) {
    res.status(400).send(e.message)
  }
})

async function createMovie(id: string, name: string, sinopse: Text, release_date: Date, rating: number, playing_limit_date: Date){
  try {
    await connection.insert({
      id,
      name,
      sinopse,
      release_date,
      rating,
      playing_limit_date
    }).into('Movies')
    console.log('Criado com sucesso')
  } catch (e) {
    console.log(e.message)
  }
}

app.post('/movie', async(req: Request, res: Response) => {
  try{
    await createMovie(
      req.body.id,
      req.body.name,
      req.body.sinopse,
      new Date(req.body.release_date),
      req.body.rating,
      new Date(req.body.playing_limit_date)
    )
    res.status(200).send({message: 'Sucess'})
  } catch(e) {
    res.status(400).send({message: 'Error'})
  }
})

async function getAllMovies(): Promise<any> {
  const result = await connection.select("*").from('Movies')

  return result
}

app.get('/movie/all', async(req: Request, res: Response) => {
  try {
    const movies = await getAllMovies()
    
    res.status(200).send({movies: movies})
  } catch(e) {
    res.status(400).send({message: e.message})
  }
})

async function searchMovie(search: string){
  const result = await connection.select('*')
    .from('Movies')
    .where('name', 'like', `%${search}%`)
    .orWhere('sinopse', 'like', `%${search}%`)

    return result
}

app.get('/movie/search', async(req: Request, res: Response) => {
  try {
    const result = await searchMovie(req.query.query as string)

    res.status(200).send(result)
  } catch(e) {
    res.status(400).send({
      message: e.message
    })
  }
})