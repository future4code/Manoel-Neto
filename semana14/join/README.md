## Exercicio 1

a) Uma foreign key pega um atributo de outra tabela para fazer a relaçao dela com a tabela em qual ela foi declarada.

b) Criado

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`mello_manoel_neto`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

Falhou ao procurar a foreign key, por isso nao podia ser criado.

d) Alterado

e)Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`mello_manoel_neto`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

Não pode apagar, porque ele possue uma restricao, ligado a outra tabela.

---

## Exercicio 2

a) Esse tabela apenas armazena as id dos filmes e a ids do atores que fizeram aquele filme, porque atores podem ter participado de muito filmes e o filmes pode ser estrelado por varios atores.

b) CRIADO

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`mello_manoel_neto`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

Há uma restição com foreign key que falha, porque esse filme ou ator, ele deve existir.

d) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`mello_manoel_neto`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actors` (`id`))

Nao pode deletar uma tabela pai que esta referenciando outra, por causa da constraint de foreign key.

---

## Exercicio 3

a) O operador apenas retorna todos os dados correspondentes nas duas tabelas, no caso dessa query, ele vai devolver tudo de Movie e Rating onde o id do Movie é igual ao movie_id dentro da tabela Rating.

b) Query
```
SELECT mov.id as movie_id, rate.rate as rating FROM Movies mov INNER JOIN Rating rate ON mov.id = rate.movie_id;
```

---

## Exercicio 4

a) Query
```
SELECT m.id as movie_id, m.name, r.rate as rating, r.comment as rating_comment FROM Movies m LEFT JOIN Rating r ON m.id = r.movie_id;
```

b) Query
```
SELECT m.id as movie_id, m.name, mc.id as actor_id FROM Movies m RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
```

c) Query
```
SELECT AVG(r.rate), m.id, m.name FROM Movies m LEFT JOIN Rating r ON m.id = r.movie_id GROUP BY m.id;
```

---

## Exercicio 5

a) A necessidades de dois joins é porque duas tabelas vao se unir primeiro, e apos essa uniao, ela vai fazer outro join com outra tabela.

b) Query
```
SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

c) Ela nao rodaria, porque a query nao associa de qual tabela esta esperando o m, que no caso nem existe, e de qual tabela esta buscando o titulo. Para consertar era so colocar m.title

d) Query
``` 
SELECT m.id as movie_id, m.name, a.id as actor_id, a.name, r.rate, r.comment FROM Movies m LEFT JOIN Rating r ON r.movie_id = m.id 
LEFT JOIN MovieCast mc ON m.id = mc.movie_id 
JOIN Actors a ON a.id = mc.actor_id;
```

---

## Exercicio 6

a) Essa relação é many to many. porque muitos filmes podem ter ganhado muitos oscars e muitos oscar podem ter sido premiados pra muitos filmes.

b) Foram criadas duas tabelas.
```
1 - Oscar - contendo o nome e a id do Oscar.
2) - AwardedOscar - contendo a id da premiacao, a data da premiação, o id do filme ganhador e o id do tipo de oscar ( melhor direcao, melhor filme, etc).
```

c) Criado

d) Query
```
SELECT m.id as movie_id, m.name, o.id as oscar_id, o.name FROM Movies m LEFT JOIN AwardedOscar ao ON m.id = ao.movie_id JOIN Oscar o ON ao.oscar_id = o.id;
````

---
