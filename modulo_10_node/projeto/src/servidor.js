const porta = 3003;


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bancoDeDados = require('./bancoDeDados');

app.use(bodyParser.urlencoded({ extend: true }));

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos());
})

app.get('/Produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto());
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // Converte para JSON
})

app.put('/produtos:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // Converte para JSON
})

app.delete('/produtos:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id);
    res.send(produto) // Converte para JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta: ${porta}`);
})
