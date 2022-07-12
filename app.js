import readlineSync from "readline-sync";

//Array que vai guardar os valores CSS no final
let array = []

//Loop de repetição para inserir os valores dos inputs no array
while (true) {
    //Utilização da biblioteca para conseguir inserir input no node.js
    let input = readlineSync.question('Insira a propriedade do CSS: ');
    //Break para caso o input seja igual a "sair"
    if (input.toLowerCase() === 'sair') {
        break;
    }
    array.push(input);
}
//Retorno do console para o resultado final de forma ordenada utilizando o método sort()
console.log(array.sort());