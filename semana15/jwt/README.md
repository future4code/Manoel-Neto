## Exercício 1

a) Eu acho que usar string como id é muito melhor que numero pelos fato de possibiliatar combinações muito maiores do que apenas números, e assim tornando a id em algo completamente única.

b) Classe criada no programa.

---

## Exercicio 2

a) Esta sendo feita a conexao com a database através do knex, e apos isso está sendo definido o metodo de criar um usuário.

b)CREATE TABLE User (
		id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    nickname VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL  
  );