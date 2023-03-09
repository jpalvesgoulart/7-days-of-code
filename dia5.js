var confirmacao = "sim";
var item = "";
var frutas = [];
var congelados = [];
var proteinas = [];
var doces = [];
var laticinios = [];

while(confirmacao != "não"){
    confirmacao = prompt("Gostaria de adicionar um item à sua lista de compra?", "sim ou não");
    while(confirmacao != "não" && confirmacao != "sim"){
        alert("Operação não reconhecida!");
        confirmacao = prompt("Gostaria de adicionar um item à sua lista de compra?", "sim ou não");
    }
    if(confirmacao === "não"){
        break;
    }
    item = prompt("Qual item gostaria de adicionar à lista?")
    categoria = prompt("Em qual categoria esse item se encaixa: 'frutas', 'congelados', 'proteinas', 'doces' ou 'laticinios'?")
    if(categoria === 'frutas'){
        frutas.push(item);
    }
        else if(categoria === 'congelados'){
            congelados.push(item);
        }
        else if(categoria === 'proteinas'){
            proteinas.push(item);
        }
        else if(categoria === 'doces'){
            doces.push(item);
        }
        else if(categoria === 'laticinios'){
            laticinios.push(item);
        }
    else{
        alert("Categoria não encontrada.")
    }
}
alert(`Lista de compras:\n Frutas: ${frutas}\n Congelados: ${congelados}\n Proteínas: ${proteinas}\n Doces: ${doces}\n Laticínios: ${laticinios}\n`)
