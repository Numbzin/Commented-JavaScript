// Estruturas de Repetição em JavaScript

// 1. Estrutura for
// Usada quando você sabe quantas vezes deseja repetir um bloco de código.

console.log("Estrutura for:");
for (let i = 0; i < 5; i++) { // i começa em 0, vai até 4 (5 iterações)
    console.log("Iteração:", i);
}

// Exemplo: Somando números de 1 a 5
let soma = 0;
for (let j = 1; j <= 5; j++) { // j de 1 a 5
    soma += j; // Adiciona j à soma
}
console.log("Soma de 1 a 5:", soma); // 15

// Exemplo: Tabuada de um número
let numero = 3; // Número para a tabuada
console.log(`\nTabuada do ${numero}:`);
for (let k = 1; k <= 10; k++) {
    console.log(`${numero} x ${k} = ${numero * k}`);
}

// 2. Estrutura while
// Usada quando você não sabe quantas vezes deseja repetir um bloco de código. 
// A condição é verificada antes da execução.

console.log("\nEstrutura while:");
let l = 0;
while (l < 5) { // Enquanto l for menor que 5
    console.log("Iteração:", l);
    l++; // Incrementa l em 1
}

// Exemplo: Contagem regressiva
console.log("\nContagem regressiva:");
let contagem = 5;
while (contagem > 0) { // Enquanto contagem for maior que 0
    console.log("Contagem:", contagem);
    contagem--; // Decrementa contagem em 1
}
console.log("FIM!");

// 3. Estrutura do...while
// Semelhante ao while, mas garante que o bloco de código seja executado pelo menos uma vez.

console.log("\nEstrutura do...while:");
let m = 0;
do {
    console.log("Iteração:", m);
    m++; // Incrementa m em 1
} while (m < 5); // Verifica a condição após executar o bloco

// Exemplo: Gerar números aleatórios até obter um número específico
console.log("\nGerando número aleatório até obter 0:");
let numeroAleatorio;
do {
    numeroAleatorio = Math.floor(Math.random() * 10); // Gera um número aleatório de 0 a 9
    console.log("Número gerado:", numeroAleatorio);
} while (numeroAleatorio !== 0); // Continua até gerar 0
console.log("Zero gerado!");

// 4. Estruturas de Repetição com Arrays
// Usando um loop for para percorrer um array.

console.log("\nPercorrendo um array:");
const frutas = ["maçã", "banana", "laranja", "uva", "abacaxi", "kiwi"];

// Usando for
for (let n = 0; n < frutas.length; n++) {
    console.log("Fruta:", frutas[n]); // Acessa cada fruta pelo índice
}

// Usando for...of
console.log("\nUsando for...of:");
for (const fruta of frutas) {
    console.log("Fruta:", fruta); // Acessa diretamente cada fruta
}

// Usando forEach
console.log("\nUsando forEach:");
frutas.forEach((fruta) => {
    console.log("Fruta:", fruta); // Acessa cada fruta com uma função callback
});

// 5. Estruturas de Repetição Aninhadas
// Usadas para trabalhar com matrizes (arrays multidimensionais).

console.log("\nEstruturas de Repetição Aninhadas:");
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let linha = 0; linha < matriz.length; linha++) { // Percorre as linhas
    for (let coluna = 0; coluna < matriz[linha].length; coluna++) { // Percorre as colunas
        console.log("Elemento:", matriz[linha][coluna]); // Acessa cada elemento
    }
}

// Exemplo: Criando uma matriz 3x3 com valores
console.log("\nCriando uma matriz 3x3:");
let novaMatriz = [];
for (let a = 0; a < 3; a++) {
    novaMatriz[a] = []; // Cria uma nova linha
    for (let b = 0; b < 3; b++) {
        novaMatriz[a][b] = a + b; // Atribui a soma dos índices
    }
}
console.log("Nova Matriz:", novaMatriz);

// 6. Controle de Repetição: break e continue
// break: encerra o loop; continue: pula a iteração atual.

console.log("\nControle de Repetição: break e continue");
for (let o = 0; o < 10; o++) {
    if (o === 5) {
        console.log("Saindo do loop quando o é 5.");
        break; // Sai do loop quando o é 5
    }
    console.log("Iteração:", o);
}

console.log("\nPulando número 5:");
for (let p = 0; p < 10; p++) {
    if (p === 5) {
        console.log("Pulando 5.");
        continue; // Pula para a próxima iteração quando p é 5
    }
    console.log("Iteração:", p);
}

// 7. Usando for para criar um contador
console.log("\nContador usando for:");
let contador = 0;
for (let q = 0; q < 20; q++) {
    contador += 2; // Adiciona 2 ao contador
}
console.log("Contador final:", contador); // 40

// 8. Contagem de caracteres em uma string
console.log("\nContando caracteres em uma string:");
let texto = "Olá, Mundo!";
let contagemCaracteres = 0;

for (let r = 0; r < texto.length; r++) {
    if (texto[r] !== " ") { // Ignora espaços
        contagemCaracteres++;
    }
}
console.log("Número de caracteres (sem espaços):", contagemCaracteres); // 10

// 9. Contagem de vogais em uma string
console.log("\nContando vogais em uma string:");
let frase = "JavaScript é incrível!";
let contadorVogais = 0;

for (let s = 0; s < frase.length; s++) {
    const char = frase[s].toLowerCase(); // Converte para minúscula
    if ("aeiou".includes(char)) { // Verifica se é uma vogal
        contadorVogais++;
    }
}
console.log("Número de vogais na frase:", contadorVogais); // 8

// 10. Multiplicação em um loop aninhado
console.log("\nMultiplicação em um loop aninhado:");
for (let t = 1; t <= 5; t++) {
    let resultado = ""; // Armazena o resultado da multiplicação
    for (let u = 1; u <= 5; u++) {
        resultado += t * u + " "; // Multiplica t por u
    }
    console.log(`Resultados da multiplicação por ${t}: ${resultado}`); // Exibe o resultado
}
