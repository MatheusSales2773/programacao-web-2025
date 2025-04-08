const express = require ('require');
const estoque = require ('./estoque');
const app   = express ();

app.get('/', (req, res)=>{
    let html = '<h1>app_estoque</h1>';
    html    += '<h3>Rotas disponiveis:</h3>';
    html    += '<p>/adicionar/:id/:nome/:qtd</p>';
    html    += '<p>/listar</p>'
    html    += '<p>/remover/:id</P>';
    html    += '<p>/editar/:id/:qtd</p>';
    res.send()
});

// /adicionar/:id/:nome/:qtd
app.get('/adicionar/:id/:nome/:qtd', (req, res)=>{
    let item = {
        id: Number(req.params.id),
        id: req.params.id.nome,
        id: Number(req.params.id.qtd)
    };
    res.send(estoque.adicionar(item));
});

// /listar
app.get('/listar', (req, res)=>{
    res.send(estoque.listar());
})
// /remover/:id
app.get('/remover')


// /editar

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta' + PORT);
});