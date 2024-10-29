// Variáveis em JavaScript

// 1. String
let texto = "nome"; // Uma string armazena uma sequência de caracteres, por exemplo, "nome".
let saudacao = "Olá, Mundo!"; // Uma saudação como uma string.

console.log(saudacao.length); // Acessa o comprimento da string (número de caracteres).
console.log(saudacao.toUpperCase()); // Converte a string para letras maiúsculas.
console.log(saudacao.replace("Mundo", "JavaScript")); // Substitui "Mundo" por "JavaScript".

// 2. Number
let numeroInteiro = 5; // Um número inteiro, por exemplo, 5.
let numeroDecimal = 1.10; // Um número de ponto flutuante, por exemplo, 1.10.
let numeroNegativo = -3; // Um número negativo.

console.log(numeroInteiro + numeroDecimal); // Soma de números.
console.log(numeroInteiro * numeroDecimal); // Multiplicação de números.
console.log(Math.pow(numeroInteiro, 2)); // Eleva um número ao quadrado (5^2).

// 3. Boolean
let teste = true; // Um valor booleano, que pode ser verdadeiro (true) ou falso (false), representando condições lógicas.
let condicao = false;

console.log(teste && condicao); // E lógico (false).
console.log(teste || condicao); // Ou lógico (true).
console.log(!teste); // Não lógico (false).

// 4. Array
let frutas = ["maçã", "banana", "cereja"]; // Um array armazena múltiplos valores em uma única variável.
let numeros = [1, 2, 3, 4, 5]; // Array de números.

console.log(frutas[0]); // Acessa o primeiro elemento do array ("maçã").
frutas.push("laranja"); // Adiciona "laranja" ao final do array.
console.log(frutas.length); // Acessa o comprimento do array (número de elementos).
console.log(frutas.pop()); // Remove o último elemento do array e o exibe.

let listaFrutas = frutas.join(", "); // Junta os elementos do array em uma string.
console.log(listaFrutas); // Exibe "maçã, banana, cereja, laranja"

// 5. Object
let pessoa = { 
    primeiroNome: "João", 
    sobrenome: "Silva", 
    idade: 25 
}; // Um objeto armazena múltiplas propriedades em pares chave-valor.

console.log(pessoa.primeiroNome); // Acessa a propriedade primeiroNome.
pessoa.idade = 26; // Atualiza a idade da pessoa.
console.log(pessoa); // Exibe o objeto atualizado.

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    detalhes: function() {
        return `${this.marca} ${this.modelo}, ${this.ano}`; // Método que retorna detalhes do carro.
    }
};
console.log(carro.detalhes()); // Exibe "Toyota Corolla, 2020"

// 6. Null
let valorVazio = null; // Representa uma ausência intencional de qualquer valor de objeto.
console.log(valorVazio); // Exibe null

// 7. Undefined
let naoDefinido; // Uma variável que foi declarada, mas ainda não foi atribuída a um valor.
console.log(naoDefinido); // Exibe undefined

// 8. Function
function cumprimentar(nome) {
    return "Olá, " + nome; // Uma função é um bloco de código projetado para realizar uma tarefa específica.
}
console.log(cumprimentar("Maria")); // Exibe "Olá, Maria"

// 9. If statement
if (teste) {
    console.log("O teste é verdadeiro"); // A instrução 'if' executa um bloco de código se uma condição especificada for verdadeira.
}

// 10. Else statement
if (!teste) {
    console.log("O teste é falso");
} else {
    console.log("O teste é verdadeiro"); // A instrução 'else' executa um bloco de código se a condição na instrução 'if' for falsa.
}

// 11. For loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Um loop 'for' repete um bloco de código um número especificado de vezes.
}

// 12. While loop
let contagem = 0;
while (contagem < 5) {
    console.log(contagem);
    contagem++; // Um loop 'while' repete um bloco de código enquanto uma condição especificada for verdadeira.
}

// 13. Switch statement
let dia = 3;
switch (dia) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    default:
        console.log("Outro dia"); // A instrução 'switch' avalia uma expressão e executa o código com base no caso correspondente.
}

// 14. Try-catch statement
try {
    let resultado = operacaoArriscada(); // Tenta executar um código que pode gerar um erro.
} catch (erro) {
    console.log("Ocorreu um erro: " + erro.message); // A instrução 'try-catch' permite lidar com erros que podem ocorrer no código.
}

// 15. Arrow function
let somar = (a, b) => a + b; // Uma função de seta (arrow function) é uma sintaxe mais curta para escrever expressões de função.
console.log(somar(2, 3)); // Exibe 5

// 16. Class
class Carro {
    constructor(marca, modelo) {
        this.marca = marca; // A propriedade 'marca' é inicializada no construtor da classe.
        this.modelo = modelo; // A propriedade 'modelo' é inicializada no construtor da classe.
    }

    getDetalhes() {
        return this.marca + " " + this.modelo; // Método que retorna uma string com a marca e o modelo do carro.
    }
}

let meuCarro = new Carro("Ford", "Fiesta"); // Cria uma instância da classe Carro.
console.log(meuCarro.getDetalhes()); // Exibe "Ford Fiesta"

// 17. Constantes
const PI = 3.14159; // Uma constante é um valor que não pode ser alterado após a sua definição.
console.log(PI); // Exibe 3.14159

// 18. Escopo de Variáveis
// var, let e const
var escopoGlobal = "Eu sou global"; // Global
let escopoLocal = "Eu sou local"; // Local ao bloco
const escopoConstante = "Eu sou uma constante"; // Não pode ser alterada

if (true) {
    var escopoVariavelVar = "Ainda sou global"; // A var não tem escopo de bloco
    let escopoVariavelLet = "Eu sou local"; // A let tem escopo de bloco
    console.log(escopoVariavelVar); // Acessa a variável var
    console.log(escopoVariavelLet); // Acessa a variável let
}

console.log(escopoVariavelVar); // Acessa a variável var fora do bloco
// console.log(escopoVariavelLet); // Isso causará um erro porque let tem escopo de bloco.

// 19. Desestruturação de Objetos
const pessoaDesestruturada = {
    nome: "Carlos",
    idade: 30,
    cidade: "São Paulo"
};

// Desestruturando objeto
const { nome, idade } = pessoaDesestruturada;
console.log(`Nome: ${nome}, Idade: ${idade}`); // Exibe "Nome: Carlos, Idade: 30"

// 20. Desestruturação de Arrays
const numerosDesestruturados = [10, 20, 30];

// Desestruturando array
const [primeiro, segundo] = numerosDesestruturados;
console.log(`Primeiro: ${primeiro}, Segundo: ${segundo}`); // Exibe "Primeiro: 10, Segundo: 20"

// 21. Template Literals
let nomeUsuario = "Ana";
let mensagem = `Olá, ${nomeUsuario}! Bem-vinda ao JavaScript.`; // Usando template literals para interpolação de strings.
console.log(mensagem); // Exibe a mensagem com o nome do usuário

// 22. Spread Operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Usando o spread operator para combinar arrays
const arrayCombinado = [...array1, ...array2];
console.log(arrayCombinado); // Exibe [1, 2, 3, 4, 5, 6]

// 23. Rest Operator
function somaTodos(...numeros) { // Usando o rest operator para receber múltiplos argumentos
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

console.log(somaTodos(1, 2, 3, 4)); // Exibe 10
