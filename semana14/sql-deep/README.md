## Exercício 1

a) Esse comando exclui a coluna salary

b) Troca o nome da coluna gender para sex

c) Altera o tamanho da VARCHAR que gender pode receber de 6 para 255

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

---

## Exercício 2

a) UPDATE Actor SET name = "Manoel Neto", birth_date = "1993-06-13" WHERE id = "003";

b) UPDATE Actor SET name = "MANOEL NETO" WHERE name = "Manoel Neto";

c) UPDATE Actor
SET 
		name = "Manoel Neto",
		birth_date = "1993-06-13",
    salary = 1000000,
    gender = "male"
WHERE id = "005";

d) A atualização acontece porem nenhuma linha é afetada pelo fato de essa id nao existir.

---

## Exercício 3

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

---

## Exercicio 4

a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor WHERE gender = "female";

c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

d) SELECT SUM(salary) FROM Actor;

---

## Exercicio 5

a) Ela conta a quantidade de atores, e agrupa a quantidade por genero. O gender logo apos de COUNT na query é pra voltar os diferentes generos encontados na tabela.

b) SELECT id, name FROM Actor ORDER BY name DESC;

c) SELECT * FROM Actor ODER BY salary;

d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;

---

## Exercicio 6

a) ALTER TABLE Movie ADD playing_limit_date DATE;

b) ALTER TABLE Movie CHANGE rating rating FLOAT;

c) UPDATE Movie SET playing_limit_date = "2020-08-30";
   UPDATE Movie SET playing_limit_date = "2020-05-30";

d) DELETE FROM Movie WHERE id = "002";

---

## Exercício 7

a) SELECT COUNT(*) FROM Movie WHERE rating > 7.5;

b) SELECT AVG(rating) FROM Movie;

c) SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();

d) SELECT COUNT(*) FROM Movie WHERE release-date < CURDATE();

e) SELECT MAX(rating) FROM Movie;

f) SELECT MIN(rating) FROM Movies;

---

## Exercício 8

a) SELECT * FROM Movie ORDER BY name;

b) SELECT * FROM Movie ORDER BY name LIMIT 5;

c) SELECT * FROM Movie WHERE release_date < CURDATE() ORDER BY release_date DESC LIMIT 3;

d) SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;