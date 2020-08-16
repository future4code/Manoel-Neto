## Exercicio 1

a) A resposta recebida é tudo o que a database envia.

b) Função
```
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
``` 

c) Função
```
async function countActorsByGender(gender: string): Promise<any> {
  try {
    const result = await connection.raw(`
      SELECT COUNT(gender) as count FROM Actors WHERE gender = '${gender}'
    `)
    console.log(result[0][0])
  } catch (e) {
    console.log(e.message)
  }
}
```

---

## Exercicio 2

a) Função
```
async function updateSalary(id: string, salary: number): Promise<any> {
  await connection('Actors').update({
    salary
  }).where('id', id)
}
```

b) Função 
```
async function deleteActorById(id: string): Promise<any> {
  await connection('Actors').delete().where('id', id)
}
```

c) Função
```
async function avgByGender(gender: string): Promise<any> {
  const result = await connection('Actors')
    .avg('salary as average')
    .where({gender})

  return result[0].average
}
```

---

## Exercicio 3

a) para que a requisicao receba o parametro da url.

b) As útlimas linhas indicam o que sera feito caso a requisicao seja bem ou má sucedida.

c) Endpoint: 
```
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
```

---

## Exercicio 4

a) Endpoint
```
app.post('/actor', async(req: Request, res: Response) => {
  try{
    await updateSalary(
      req.body.id,
      req.body.salary
    )

    res.status(200).send('Sucesso')
  } catch (e) {
    console.log(e.message)
  }
})
```

b) Endpoint
```
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
```

---

## Exercicio 5

Endpoint
```
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
```

---

## Exercicio 6

Endpoint
```
app.get('/movie/all', async(req: Request, res: Response) => {
  try {
    const movies = await getAllMovies()
    
    res.status(200).send({movies: movies})
  } catch(e) {
    res.status(400).send({message: e.message})
  }
})
```

---

## Exercicio 7

Endpoint
``` 
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
```
