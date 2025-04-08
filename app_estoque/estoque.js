let itens = [];

function adicionar(item){
    itens.push(item);
    return true;
}

function listar(){
    return itens;
}

function editar(id, qtd){
    itens.forEach(item_cadastrado => {
        if(item_cadastrado.id == id){
            item_cadastrado.qtd = qtd;
        } 
    });
    return true;
}

module.exports = {
    adicionar,
    listar,
    editar
};
