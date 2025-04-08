let itens = [];

function adicionar(item){
    itens.push(item);
    return true;
}

function listar(){
    return itens;
}

module.exports = {
    adicionar,
    listar
};
