let itens = [];

function adicionar(item){
    let item_valido = true;

    if(
        !is_numerico(item.id) ||
        is_id_cadastrado(item.id) ||
        item.id <= 0 ||
        !is_numerico(item.qtd) ||
        item.qtd < 0 ||
        item.nome.length <= 0
    ){
        item_valido = false
    }


    if(item_valido){
        itens.push(item);
    }
    return true;
}

function listar(){
    return itens;
}

function remover(id) {
    if (!is_numerico(id) || !is_id_cadastrado(id)) {
        return false;
    }
    itens = itens.filter(item => item.id != id);
    return true;
}

function editar(id, qtd){
    let item_valido = true;

    if(
        !is_numerico(id) ||
        !is_id_cadastrado(id) ||
        !is_numerico(qtd)
    ){
        item_valido = false;
    }
    
    if(item_valido){
        itens.forEach(item_cadastrado => {
        if(item_cadastrado.id == id){
            item_cadastrado.qtd = qtd;
        } 
    });
    }

    return item_valido;
}

module.exports = {
    adicionar,
    listar,
    editar,
    remover
};

function is_id_cadastrado(id) {
    return itens.some(item => item.id == id);
}

function is_numerico(n){
    if(isNaN(n) || n == null){
        return false;
    }
    return true;
}