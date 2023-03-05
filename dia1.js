/* Este primeiro dia é super importante! Ao final dele, você terá um novo conhecimento que é essencial para os próximos desafios.

Existe uma situação super comum para quem utiliza o Javascript: problemas com os tipos de variáveis na hora de comparar os valores de duas variáveis entre si. Eu já passei muito por isso!

Em linguagens de programação compiladas, como Java e C#, esse problema é detectado em tempo de compilação, e você que está desenvolvendo o código tem um aviso claro do erro.

Já no Javascript, esses erros passam despercebidos, já que o código não passa por um compilador. Ou seja, os erros só aparecem em tempo de execução. 

A parte mais confusa para quem está começando a aprender lógica com Javascript é a operação de igualdade entre valores. Dependendo de como você escrever o seu código, o Javascript fará uma conversão de tipo para um tipo booleano de maneira implícita (automática), e isso afetará variáveis que eram Strings, Numbers, Object, etc….

Isso causa alguns comportamentos estranhos, como todos esses exemplos aqui abaixo retornando true:

console.log( false == '0' );
console.log( null == undefined );
console.log( " \t\r\n" == 0 );
console.log( ' ' == 0 );

O que não faz necessariamente muito sentido.

(Você pode testar tudo isso indo no seu navegador, clicando com o botão direito, escolhendo a opção "Inspecionar" e a aba "Console". Nessa aba, basta copiar e colar cada uma das linhas acima para confirmar que todas realmente retornam true).

Sendo assim, a sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros: */

let numero1 = 1
let string1 = '1'
let numero2 = 30
let string2 = '30'
let numero3 = 10
let string3 = '10'

if (numero1 == string1 && numero1 !== string1) {
  console.log('Os valores ', numero1, ' e ',  string1, ' têm o mesmo valor, mas tipos diferentes.')
}   else if (numero1 === string1) {
        console.log('Os valores ', numero1, ' e ', string1, ' têm o mesmo valor e tipos iguais.')   
}   else {
        console.log('Os valores ', numero1, ' e ', string1, ' não têm o mesmo valor.')
}

if (numero2 == string2 && numero2 !== string2) {
  console.log('Os valores ', numero2, ' e ',  string2, ' têm o mesmo valor, mas tipos diferentes.')
}   else if (numero2 === string2) {
        console.log('Os valores ', numero2, ' e ', string2, ' têm o mesmo valor e tipos iguais.')   
}   else {
        console.log('Os valores ', numero2, ' e ', string2, ' não têm o mesmo valor.')
}

if (numero3 == string3 && numero3 !== string3) {
  console.log('Os valores ', numero3, ' e ',  string3, ' têm o mesmo valor, mas tipos diferentes.')
}   else if (numero3 === string3) {
        console.log('Os valores ', numero3, ' e ', string3, ' têm o mesmo valor e tipos iguais.')   
}   else {
        console.log('Os valores ', numero3, ' e ', string3, ' não têm o mesmo valor.')
}

