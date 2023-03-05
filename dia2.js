const nome = prompt("Qual o seu nome?");
const idade = prompt("Qual a sua idade?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");

alert("Olá " + nome + ". Você tem " + idade + " anos e já está aprendendo " + linguagem + "!");

const gostaEstudar = prompt("Você gosta de estudar " + linguagem + "? [S/N]");

if (gostaEstudar === "S") {
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
}
else{
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}