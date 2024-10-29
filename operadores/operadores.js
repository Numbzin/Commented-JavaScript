// Operadores em JavaScript

// 1. Operadores Aritméticos
// Usados para realizar operações matemáticas.

let a = 10; // A variável 'a' recebe o valor 10
let b = 5;  // A variável 'b' recebe o valor 5

// Adição (+)
let soma = a + b; // Soma: 10 + 5 = 15
console.log("Soma:", soma);

// Subtração (-)
let subtracao = a - b; // Subtração: 10 - 5 = 5
console.log("Subtração:", subtracao);

// Multiplicação (*)
let multiplicacao = a * b; // Multiplicação: 10 * 5 = 50
console.log("Multiplicação:", multiplicacao);

// Divisão (/)
let divisao = a / b; // Divisão: 10 / 5 = 2
console.log("Divisão:", divisao);

// Módulo (%): Retorna o resto da divisão
let modulo = a % b; // Módulo: 10 % 5 = 0 (resto da divisão)
console.log("Módulo:", modulo);

// Exponenciação (**): Eleva um número à potência de outro
let potencia = a ** b; // Exponenciação: 10^5 = 100000
console.log("Potência:", potencia);

// Incremento (++): Aumenta o valor em 1
a++; // Incremento: a agora é 11
console.log("Valor de a após incremento:", a);

// Decremento (--): Diminui o valor em 1
b--; // Decremento: b agora é 4
console.log("Valor de b após decremento:", b);


// 2. Operadores de Atribuição
// Usados para atribuir valores a variáveis.

let x = 20; // A variável 'x' recebe o valor 20

// Atribuição simples (=)
x = 10; // x agora é 10
console.log("Valor de x após atribuição simples:", x);

// Atribuição de adição (+=)
x += 5; // Atribuição de adição: x = x + 5 => x agora é 15
console.log("Valor de x após atribuição de adição:", x);

// Atribuição de subtração (-=)
x -= 3; // Atribuição de subtração: x = x - 3 => x agora é 12
console.log("Valor de x após atribuição de subtração:", x);

// Atribuição de multiplicação (*=)
x *= 2; // Atribuição de multiplicação: x = x * 2 => x agora é 24
console.log("Valor de x após atribuição de multiplicação:", x);

// Atribuição de divisão (/=)
x /= 4; // Atribuição de divisão: x = x / 4 => x agora é 6
console.log("Valor de x após atribuição de divisão:", x);

// Atribuição de módulo (%=)
x %= 5; // Atribuição de módulo: x = x % 5 => x agora é 1
console.log("Valor de x após atribuição de módulo:", x);

// Atribuição de exponenciação (**=)
x **= 3; // Atribuição de exponenciação: x = x ** 3 => x agora é 1 (porque 1^3 ainda é 1)
console.log("Valor de x após atribuição de exponenciação:", x);


// 3. Operadores de Comparação
// Usados para comparar valores e retornar true ou false.

let y = 10; // A variável 'y' recebe o valor 10
let z = 20; // A variável 'z' recebe o valor 20

// Igual (==): Compara apenas valores, ignorando o tipo
let igualdade = (y == z); // false, porque 10 não é igual a 20
console.log("Igualdade (y == z):", igualdade);

// Estritamente igual (===): Compara valor e tipo
let estritamenteIgual = (y === '10'); // false, porque '10' é string e y é número
console.log("Estritamente igual (y === '10'):", estritamenteIgual);

// Diferente (!=): Compara apenas valores, ignorando o tipo
let diferente = (y != z); // true, porque 10 é diferente de 20
console.log("Diferente (y != z):", diferente);

// Estritamente diferente (!==): Compara valor e tipo
let estritamenteDiferente = (y !== '10'); // true, porque 10 (número) e '10' (string) são diferentes
console.log("Estritamente diferente (y !== '10'):", estritamenteDiferente);

// Maior que (>)
let maiorQue = (z > y); // true, porque 20 é maior que 10
console.log("Maior que (z > y):", maiorQue);

// Menor que (<)
let menorQue = (y < z); // true, porque 10 é menor que 20
console.log("Menor que (y < z):", menorQue);

// Maior ou igual (>=)
let maiorOuIgual = (y >= 10); // true, porque 10 é igual a 10
console.log("Maior ou igual (y >= 10):", maiorOuIgual);

// Menor ou igual (<=)
let menorOuIgual = (z <= 30); // true, porque 20 é menor que 30
console.log("Menor ou igual (z <= 30):", menorOuIgual);


// 4. Operadores Lógicos
// Usados para combinar expressões booleanas.

let p = true;  // A variável 'p' é verdadeira
let q = false; // A variável 'q' é falsa

// AND (&&): Retorna true se ambos forem verdadeiros
let and = (p && q); // false, porque q é false
console.log("AND (p && q):", and);

// OR (||): Retorna true se um dos dois for verdadeiro
let or = (p || q); // true, porque p é true
console.log("OR (p || q):", or);

// NOT (!): Inverte o valor booleano
let not = !p; // false, porque p era true
console.log("NOT (!p):", not);


// 5. Operadores de String
// Usados para manipular strings.

let str1 = "Olá"; // A variável 'str1' contém a string "Olá"
let str2 = " Mundo"; // A variável 'str2' contém a string " Mundo"

// Concatenação (+): Junta duas strings
let concatenacao = str1 + str2; // "Olá Mundo"
console.log("Concatenação (str1 + str2):", concatenacao);

// Operadores de String com atribuição (+=)
str1 += str2; // "Olá Mundo", agora str1 foi atualizado com a junção de str1 e str2
console.log("Valor de str1 após concatenação:", str1);


// 6. Operador Ternário (?:)
// Uma maneira simplificada de escrever um if-else.

let idade = 18; // A variável 'idade' recebe o valor 18

// Sintaxe: (condição) ? valorSeVerdadeiro : valorSeFalso
let podeDirigir = (idade >= 18) ? "Pode dirigir" : "Não pode dirigir"; 
console.log("Resultado do operador ternário:", podeDirigir);
// "Pode dirigir", porque idade é 18 ou mais


// 7. Operadores de Bits
// Usados para realizar operações em nível de bits.

let bitA = 5; // 5 = 0101 em binário
let bitB = 3; // 3 = 0011 em binário

// AND bit a bit (&): Retorna 1 se ambos os bits forem 1
let andBit = bitA & bitB; // 0101 & 0011 = 0001 (1 em decimal)
console.log("AND bit a bit (bitA & bitB):", andBit);

// OR bit a bit (|): Retorna 1 se pelo menos um dos bits for 1
let orBit = bitA | bitB; // 0101 | 0011 = 0111 (7 em decimal)
console.log("OR bit a bit (bitA | bitB):", orBit);

// XOR bit a bit (^): Retorna 1 se os bits forem diferentes
let xorBit = bitA ^ bitB; // 0101 ^ 0011 = 0110 (6 em decimal)
console.log("XOR bit a bit (bitA ^ bitB):", xorBit);

// NOT bit a bit (~): Inverte todos os bits
let notBit = ~bitA; // ~0101 = 1010 (em binário) = -6 (em decimal)
console.log("NOT bit a bit (~bitA):", notBit);

// Deslocamento para a esquerda (<<): Move todos os bits para a esquerda
let deslocaEsq = bitA << 1; // 0101 << 1 = 1010 (10 em decimal)
console.log("Deslocamento para a esquerda (bitA << 1):", deslocaEsq);

// Deslocamento para a direita (>>): Move todos os bits para a direita
let deslocaDir = bitA >> 1; // 0101 >> 1 = 0010 (2 em decimal)
console.log("Deslocamento para a direita (bitA >> 1):", deslocaDir);


// 8. Operadores de Tipo
// Usados para verificar tipos de dados.

let nome = "Fernando"; // A variável 'nome' contém a string "Fernando"
let numero = 123; // A variável 'numero' é um número
let booleano = true; // A variável 'booleano' é verdadeira

// typeof: Retorna o tipo da variável
console.log("Tipo de nome:", typeof nome); // "string"
console.log("Tipo de numero:", typeof numero); // "number"
console.log("Tipo de booleano:", typeof booleano); // "boolean"

// instanceof: Verifica se um objeto é de um tipo específico
let data = new Date(); // Cria um novo objeto de data
console.log("data é uma instância de Date:", data instanceof Date); // true, porque data é um objeto Date
