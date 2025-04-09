const express = require ('express');
const estoque = require ('./estoque');
const app   = express ();

app.get('/', (req, res)=>{
    let html = '<h1>app_estoque</h1>';
    html    += '<h3>Rotas disponiveis:</h3>';
    html    += '<p>/adicionar/:id/:nome/:qtd</p>';
    html    += '<p>/listar</p>';
    html    += '<p>/remover/:id</P>';
    html    += '<p>/editar/:id/:qtd</p>';
    res.send()
});

// /adicionar/:id/:nome/:qtd
app.get('/adicionar/:id/:nome/:qtd', (req, res)=>{
    let item = {
        id: Number(req.params.id),
        nome: req.params.nome,
        qtd: Number(req.params.qtd)
    };
    let resultado = estoque.adicionar(item);
    res.send(resultado ? 'Item adicionado com sucesso!' : 'Erro ao adicionar item.');
});

// /listar
app.get('/listar', (req, res)=>{
    res.send(estoque.listar());
});

// /remover/:id
app.get('/remover/:id', (req, res)=>{
    let id = Number(req.params.id);
    let resultado = estoque.remover(id);
    res.send(resultado ? 'Item removido com sucesso!' : 'Erro ao remover item.');
})

// /editar/:id
app.get('/editar/:id/:qtd', (req, res)=>{
    let id = Number(req.params.id);
    let qtd = Number(req.params.qtd);
    res.send(estoque.editar(id, qtd));
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta' + PORT);
});