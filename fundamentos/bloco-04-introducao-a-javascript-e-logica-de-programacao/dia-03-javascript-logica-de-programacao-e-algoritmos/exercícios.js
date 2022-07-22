// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

let dezFatorial = 10

for (let i = 9; i >= 1; i -=1) {
    dezFatorial = dezFatorial * i
}

console.log(dezFatorial)



// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra.

let word = "tryber";
let wordInverted = "";

for (let i = 1; i <= word.length; i += 1) {
    wordInverted += word[word.length-i]
}

console.log(wordInverted);



// 3- Considere o array de strings abaixo:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor.
// Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css']
let maiorPalavra = array[0]
let menorPalavra = array[0]

for (let i = 0; i < array.length; i +=1) {
    if (array[i].length > maiorPalavra.length) {
        maiorPalavra = array[i]
    }
}

for (let i = 0; i < array.length; i +=1) {
    if (array[i].length < menorPalavra.length) {
        menorPalavra = array[i]
    }
}

console.log("A maior palavra é " + maiorPalavra + ", e a menor palavra é " + menorPalavra + ".");



// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo.
// Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

maiorNumeroPrimo = 0

for (let i = 2; i <= 50; i += 1) {
    let ehPrimo = true;
    for (let divisor = 2; divisor < i; divisor += 1) {
        if (i % divisor == 0) {
            ehPrimo = false;
        }
    }
    if (ehPrimo) {
        maiorNumeroPrimo = i
    }
}

console.log(maiorNumeroPrimo);



// BÔNUS
// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};



// Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.


let size = 5;
let symbol2 = '*';
let inputLine2 = '';

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  console.log(inputLine2);
  inputLine2 = inputLine2 + symbol2;
}