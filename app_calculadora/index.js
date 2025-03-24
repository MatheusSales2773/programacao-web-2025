const calc = require('./calculadora');
const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('Hello, World!');
});

app.get('/somar/:a/:b', (req, res)=>{
    res.send('Hello, World!');
});

app.get('/subtrair/:a/:b', (req, res)=>{
    res.send('Hello, World!');
});

app.get('/multiplicar/:a/:b', (req, res)=>{
    res.send('Hello, World!');
});

app.get('/dividir/:a/:b', (req, res)=>{
    res.send('Hello, World!');
});

app.get('/ola/:nome', (req, res)=>{
    res.send(`Olá, ${req.params.nome}!`);
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta' + PORT);
});
