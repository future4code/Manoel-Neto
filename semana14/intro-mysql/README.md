### Exercicio 1
a) Definições
```
VARCHAR(x) - aceitar string de tamanho até x caracteres;
PRIMARY KEY - chave primária, unico para cada linha.
NOT NULL - por mais que receba valores em branco, salva como algo, nao pode ser nullo.
DATE - indica ser uma data.
```
b) Definições
```
SHOW DATABASES - mostra a database que está sendo usada no momento
SHOW TABLES - mostra as tabelas que existem dentro daquela database
```
c) Definições
```
DESCRIBE Actor - descreve o modo no qual a database foi criada e suas configurações.
```
---

### Exercicio 2
a) Query:
```
INSERT INTO Actors (id, name, salary, birth_date, gender) values 
(
  "002",
  "Glória Pires",
  1200000,
  "1963-08-23",
  "female"
)
```
b) Erro:
```
O erro diz que existe um dado duplicado, ele existe porque o id é uma primary key, e primary keys sao valores unicos, ou seja, nao se repetem.
```
c) Erro
```
O erro ocorre porque estao faltando dados dos quais foram definidos na criacao da tabela.
```
d) Erro
```
Caso o nome nao seja passado ele pode ser salvo, porem nesse caso nao existe um default, entao ele da um erro acusando a falta desse valor padrao caso o nome nao esteja declarado e nem um valor passado.
```
e) Erro
```
O valor da data foi passado de forma incorreta, o mesmo tem que estar entre aspas.
```
f) Atores
```
Atores criados na database.
```
---

### Exercicio 3
a) Query
```
SELECT * FROM Actors WHERE gender = "female"; ou
SELECT * FROM Actors WHERE gender != "male";
```
b) Query
```
SELECT salary FROM Actors WHERE name = "Tony Ramos";
```
c) SELECT * FROM Actors WHERE gender = "invalid";
```
Retorna uma linha com os valores todos null
```
d) Erro
```
Não vai retornar nada porque a coluna da tabela foi criada como "name" e não "nome"
```
---
### Exercicio 4
a) Explicação
```
Será selecionado tudo dentro da tabela de Atores que contenham a primeira letra do nome A ou J e que tenham os salarios maiores que 300000
```
b) Query
```
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000
```
c) Query
```
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%")
```
d) Erro
```
SELECT * FROM Actor
WHERE (name LIKE "%G%" OR name LIKE "%g%") OR (name LIKE "%A%" OR name LIKE "%a%") AND salary BETWEEN 350000 AND 900000
```
---

### Exercicio 5
a) TEXT
```
Aceita valores com mais de 255 caracteres.
```
---

### Exercicio 6
a) Query
```
SELECT id, name, rating FROM Movies WHERE id = "002"
```
b) Query
```
SELECT * FROM Movies WHERE name = "Se Eu Fosse Você";
```
c) Query
```
SELECT id, name, sinopse FROM Movies WHERE rating >= 7;
```
---

### Exercicio 7
a) Query
```
SELECT * FROM Movies WHERE name LIKE "%vida%"
```
b) Query
```
SELECT * FROM Movies WHERE name LIKE "%termo%" OR sinopse LIKE "%termo%"
```
c) Query
```
SELECT * FROM Movies WHERE release_date < CURDATE();
```
d) Query
```
SELECT * FROM Movies WHERE release_date < CURDATE() AND 
(name LIKE "%termo%" OR sinopse LIKE "%termo%") AND rating > 7;
```
---
