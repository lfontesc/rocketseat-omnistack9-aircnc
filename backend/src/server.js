//importação do express 
const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

// GET, POST, PUT, DELETE
const app = express();
app.use(cors())
//mongoose.connect('mongodb+srv://fontes:fontes@cluster0-10dpy.mongodb.net/semana09?retryWrites=true&w=majority',{
//  useNewUrlParser: true,
//  useUnifiedTopology: true,
//})

mongoose.connect('mongodb://localhost/aircnc'
, { useNewUrlParser: true, useUnifiedTopology: true})

//req.query = Acessar query params (para filtros)
//req.params.id = Acessar o id pela router params( para edição/delete),url
//req.body = Acessar corpo da requisição (para criação/edição)
//req.headers = Acessar o campo que está no headers da api

// utilizando json para o express com o req.body
app.use(express.json());

//rotas da aplicação
app.use('/files',express.static(path.resolve(__dirname,'..','uploads')))
app.use(routes);

//porta que o servidor escuta
console.log('Servidor Online na porta 3333')
app.listen(3333);