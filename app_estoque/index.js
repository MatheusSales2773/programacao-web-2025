const express = rqeuire ('require');
const app   = express ();

app.get('/', (req, res)=>{
    let html = '<h1>app_estoque</h1>';
    html    += '<h3>Rotas disponiveis:</h3>';
    html    += '<p>/adicionar/:id/:nome/:qtd</p>';
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
    res.send(item);
});
// /remover/:id
app.get('/remover')
// /editar

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta' + PORT);
});