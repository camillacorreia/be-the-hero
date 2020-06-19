const express = require ('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

app.listen(3333);

// Rota - Recurso

//Métodos HTTP =>
//GET: Buscar/Listar uma informação do backend;
//POST: Criar uma informação no backend;
//PUT: Alterar uma informação no backend;
//DELETE: Deletar uma informação no backend;

//Tipos de parâmetros =>
//Query Params: './users?name=Diego&idade=22' Parâmetros nomeados enviados na rota após "?" (Filtros, paginação);
//Route Params: './users/:id' Parâmetros utilizados para identificar recursos, buscar dados de um único usuário;
//Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.

//Request: Guarda todos os dados que vem através da requisição do usuário // 'request.example'
//Response: Retorna uma resposta para o usuário

//SQL: MySQL, SQLite, PostgreSQL, Oracle, etc.
//NoSQL: MongoDB, CouchDB, etc.

//Driver: SELECT * FROM users
//Query Builder: table('users').select('*').where()