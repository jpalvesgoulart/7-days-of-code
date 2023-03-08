function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

var numeroResposta = getRandomInt(1, 11);
var tentativas = 3
var confirmaJogar = prompt('Você gostaria de jogar? [s/n]')

if(confirmaJogar == 's'){

    getRandomInt(1, 11)

    for(var i = 0; i < 3; i++){
        var numero = prompt('Digite um número de 1 a 10: ');
        if(numero == numeroResposta){
            alert('Parabéns! Você acertou o número sorteado.')
            break
        }
        else{
            tentativas -= 1;
            alert('Que pena, você errou! Você ainda tem ' + tentativas + ' tentativas.')
        }
    }

    if(tentativas == 0){
        alert('Suas tentativas acabaram! Tente novamente.')
    }
}
