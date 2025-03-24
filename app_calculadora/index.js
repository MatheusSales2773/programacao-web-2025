const calc = require('./calculadora');
const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('Hello, World!');
});

app.get('/somar/:a/:b', (req, res)=>{
    const { a, b } = req.params;
    res.send('Resultado: ${calc.somar(Number(a), Number(b))}');
});

app.get('/subtrair/:a/:b', (req, res)=>{
    const { a, b } = req.params;
    res.send('Resultado: ${calc.subtrair(Number(a), Number(b))}');
});

app.get('/multiplicar/:a/:b', (req, res)=>{
    const { a, b } = req.params;
    res.send('Resultado: ${calc.multiplicar(Number(a), Number(b))}');
});

app.get('/dividir/:a/:b', (req, res)=>{
    const { a, b } = req.params;
    res.send('Resultado: ${calc.dividir(Number(a), Number(b))}');
});

app.get('/ola/:nome', (req, res)=>{
    res.send(`Olá, ${req.params.nome}!`);
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta' + PORT);
});
