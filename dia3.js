let subclasse;
let lvlup;
let habilidades = [];
let resposta = "s";

let classe = prompt("Escolha sua classe:", ["guerreiro ou mago"]);

if(classe == "guerreiro"){
    subclasse = prompt("Escolha sua especialização:", ["barbaro ou cavaleiro"]);
}   else if(classe == "mago"){
        subclasse = prompt("Escolha sua especialização:", ["feiticeiro ou bruxo"]);
}

if(subclasse == "barbaro" || "cavaleiro" || "feiticeiro" || "bruxo"){
    lvlup = prompt("Você gostaria de uma multiclasse?", ["com multiclasse ou sem multiclasse"]);
}

if(lvlup == "s" && classe == "guerreiro"){
    alert("Parabéns, você adquiriu a multiclasse Mago!");
}    else if(lvlup == "s" && classe == "mago"){
        alert("Parabéns, você adquiriu a multiclasse Guerreiro!");
}

while(resposta == "s"){
    var adicionarHabilidades = habilidades.push(prompt("Qual habilidade você gostaria de ter?"));
    resposta = prompt("Você gostaria de acrescentar mais habilidades?", ["s ou n"]);
}

alert("Você é um " + classe + " com a especialização " + subclasse + ", " + lvlup + " e com as habilidades: " + habilidades)