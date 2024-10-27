// 1. Operadores Aritméticos
let a = 10; // A variável a recebe o valor 10
let b = 5;  // A variável b recebe o valor 5

// Adição (+)
let soma = a + b; // 10 + 5 = 15

// Subtração (-)
let subtracao = a - b; // 10 - 5 = 5

// Multiplicação (*)
let multiplicacao = a * b; // 10 * 5 = 50

// Divisão (/)
let divisao = a / b; // 10 / 5 = 2

// Módulo (%): Retorna o resto da divisão
let modulo = a % b; // 10 % 5 = 0

// Exponenciação (**): Eleva um número à potência de outro
let potencia = a ** b; // 10^5 = 100000

// Incremento (++): Aumenta o valor em 1
a++; // a agora é 11

// Decremento (--): Diminui o valor em 1
b--; // b agora é 4


// 2. Operadores de Atribuição
let x = 20; // A variável x recebe o valor 20

// Atribuição simples (=)
x = 10; // x agora é 10

// Atribuição de adição (+=)
x += 5; // x = x + 5 => x agora é 15

// Atribuição de subtração (-=)
x -= 3; // x = x - 3 => x agora é 12

// Atribuição de multiplicação (*=)
x *= 2; // x = x * 2 => x agora é 24

// Atribuição de divisão (/=)
x /= 4; // x = x / 4 => x agora é 6

// Atribuição de módulo (%=)
x %= 5; // x = x % 5 => x agora é 1

// Atribuição de exponenciação (**=)
x **= 3; // x = x ** 3 => x agora é 1 (porque 1^3 ainda é 1)


// 3. Operadores de Comparação
let y = 10; // A variável y recebe o valor 10
let z = 20; // A variável z recebe o valor 20

// Igual (==): Compara apenas valores
let igualdade = (y == z); // false, porque 10 não é igual a 20

// Estritamente igual (===): Compara valor e tipo
let estritamenteIgual = (y === '10'); // false, porque '10' é string e y é número

// Diferente (!=): Compara apenas valores
let diferente = (y != z); // true, porque 10 é diferente de 20

// Estritamente diferente (!==): Compara valor e tipo
let estritamenteDiferente = (y !== '10'); // true, porque 10 (número) e '10' (string) são diferentes

// Maior que (>)
let maiorQue = (z > y); // true, porque 20 é maior que 10

// Menor que (<)
let menorQue = (y < z); // true, porque 10 é menor que 20

// Maior ou igual (>=)
let maiorOuIgual = (y >= 10); // true, porque 10 é igual a 10

// Menor ou igual (<=)
let menorOuIgual = (z <= 30); // true, porque 20 é menor que 30


// 4. Operadores Lógicos
let p = true;  // A variável p é verdadeira
let q = false; // A variável q é falsa

// AND (&&): Retorna true se ambos forem verdadeiros
let and = (p && q); // false, porque q é false

// OR (||): Retorna true se um dos dois for verdadeiro
let or = (p || q); // true, porque p é true

// NOT (!): Inverte o valor booleano
let not = !p; // false, porque p era true

// 5. Operadores de String
let str1 = "Olá"; // A variável str1 contém a string "Olá"
let str2 = " Mundo"; // A variável str2 contém a string " Mundo"

// Concatenação (+): Junta duas strings
let concatenacao = str1 + str2; // "Olá Mundo"

// Operadores de String com atribuição (+=)
str1 += str2; // "Olá Mundo", agora str1 foi atualizado com a junção de str1 e str2


// 6. Operador Ternário (?:)
let idade = 18; // A variável idade recebe o valor 18

// Sintaxe: (condição) ? valorSeVerdadeiro : valorSeFalso
let podeDirigir = (idade >= 18) ? "Pode dirigir" : "Não pode dirigir"; 
// "Pode dirigir", porque idade é 18 ou mais


// 7. Operadores de Bits
let bitA = 5; // 5 = 0101 em binário
let bitB = 3; // 3 = 0011 em binário

// AND bit a bit (&)
let andBit = bitA & bitB; // 0101 & 0011 = 0001 (1 em decimal)

// OR bit a bit (|)
let orBit = bitA | bitB; // 0101 | 0011 = 0111 (7 em decimal)

// XOR bit a bit (^)
let xorBit = bitA ^ bitB; // 0101 ^ 0011 = 0110 (6 em decimal)

// NOT bit a bit (~)
let notBit = ~bitA; // ~0101 = 1010 (em binário) = -6 (em decimal)

// Deslocamento para a esquerda (<<)
let deslocaEsq = bitA << 1; // 0101 << 1 = 1010 (10 em decimal)

// Deslocamento para a direita (>>)
let deslocaDir = bitA >> 1; // 0101 >> 1 = 0010 (2 em decimal)


// 8. Operadores de Tipo
let nome = "Fernando"; // A variável nome contém a string "Fernando"
let numero = 123; // A variável numero é um número
let booleano = true; // A variável booleano é verdadeira

// typeof: Retorna o tipo da variável
console.log(typeof nome); // "string"
console.log(typeof numero); // "number"
console.log(typeof booleano); // "boolean"

// instanceof: Verifica se um objeto é de um tipo específico
let data = new Date(); // Cria um novo objeto de data
console.log(data instanceof Date); // true, porque data é um objeto Date
