let meuArray = [];
//Declarando Array vazio

let frutas = ["melancia", "uva", "jamelao"];
//Declarando array com valores iniciais


//Usando construct

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function imrpimirMatriz(A){
    for(let i = 0; i < A.length; i++){
        let linha = "";
        for(let j = 0; j < A[i].length; j++){
            linha += A[i][j] + "\t";
        }
        console.log(linha);
    }
}

//imrpimirMatriz(matriz);


//declarando objetos:
let capitais =  {
    DF: "Brasília", //DF é um atributo
    SP: "São Paulo",
    DDD_SP: 11,
    RJ: "Rio de Janeiro",
    DDD_RJ: 21
};

//console.log(capitais.RJ + " - " + capitais.DDD_RJ);

for(key in capitais){
    console.log(key + "=" + capitais [key]);
}

function verificarParidade(n){
    if(n % 2 == 0){
        return true;
    }
    return false;
}