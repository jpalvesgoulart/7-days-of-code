var confirmacao = "sim";
var item = "";
var frutas = [];
var congelados = [];
var proteinas = [];
var doces = [];
var laticinios = [];
var remover = "";

while(confirmacao != "não"){
    confirmacao = prompt("Gostaria de adicionar um item à sua lista de compra?", "sim, não ou remover");
    while(confirmacao != "não" && confirmacao != "sim" && confirmacao != "remover"){
        alert("Operação não reconhecida!");
        confirmacao = prompt("Gostaria de adicionar um item à sua lista de compra?", "sim, não ou remover");
    }

    if(confirmacao === "não"){
        break;
    }

    if(confirmacao === "sim"){
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
    } else if(confirmacao === "remover"){
        if(frutas.length === 0 && congelados.length === 0 && proteinas.length === 0 && doces.length === 0 && laticinios.length === 0){
            alert("A lista está vazia!")
        }
        else{
            remover = prompt(`Lista de compras:\n Frutas: ${frutas}\n Congelados: ${congelados}\n Proteínas: ${proteinas}\n Doces: ${doces}\n Laticínios: ${laticinios}\n\n Qual item você gostaria de remover?`)
            if(frutas.indexOf(remover) != -1){
                frutas.splice(frutas.indexOf(remover), 1);
                alert("O item " + remover + " foi removido de sua lista.")
            } else if(congelados.indexOf(remover) != -1){
                congelados.splice(congelados.indexOf(remover), 1)
                alert("O item " + remover + " foi removido da sua lista")
            } else if(proteinas.indexOf(remover) != -1){
                proteinas.splice(proteinas.indexOf(remover), 1)
                alert("O item " + remover + " foi removido da sua lista")
            } else if(doces.indexOf(remover) != -1){
                doces.splice(doces.indexOf(remover), 1)
                alert("O item " + remover + " foi removido da sua lista")
            } else if(laticinios.indexOf(remover) != -1){
                laticinios.splice(laticinios.indexOf(remover), 1)
                alert("O item " + remover + " foi removido da sua lista")
            } else{
                alert("Item não encontrado!")
            }
        }
    }
}

alert(`Lista de compras:\n Frutas: ${frutas}\n Congelados: ${congelados}\n Proteínas: ${proteinas}\n Doces: ${doces}\n Laticínios: ${laticinios}\n`)
