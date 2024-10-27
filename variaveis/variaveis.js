// string
let texto = "nome"; // Uma string armazena uma sequência de caracteres, por exemplo, "nome".

// number
let numeroInteiro = 5; // Um número inteiro, por exemplo, 5.
let numeroDecimal = 1.10; // Um número de ponto flutuante, por exemplo, 1.10.

// boolean
let teste = true; // Um valor booleano, que pode ser verdadeiro (true) ou falso (false), representando condições lógicas.

// array
let frutas = ["maçã", "banana", "cereja"]; // Um array armazena múltiplos valores em uma única variável.

// object
let pessoa = { 
    primeiroNome: "João", 
    sobrenome: "Silva", 
    idade: 25 
}; // Um objeto armazena múltiplas propriedades em pares chave-valor.

// null
let valorVazio = null; // Representa uma ausência intencional de qualquer valor de objeto.

// undefined
let naoDefinido; // Uma variável que foi declarada, mas ainda não foi atribuída a um valor.

// function
function cumprimentar(nome) {
    return "Olá, " + nome; // Uma função é um bloco de código projetado para realizar uma tarefa específica.
}

// if statement
if (teste) {
    console.log("O teste é verdadeiro"); // A instrução 'if' executa um bloco de código se uma condição especificada for verdadeira.
}

// else statement
if (!teste) {
    console.log("O teste é falso");
} else {
    console.log("O teste é verdadeiro"); // A instrução 'else' executa um bloco de código se a condição na instrução 'if' for falsa.
}

// for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Um loop 'for' repete um bloco de código um número especificado de vezes.
}

// while loop
let contagem = 0;
while (contagem < 5) {
    console.log(contagem);
    contagem++; // Um loop 'while' repete um bloco de código enquanto uma condição especificada for verdadeira.
}

// switch statement
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

// try-catch statement
try {
    let resultado = operacaoArriscada(); // Tenta executar um código que pode gerar um erro.
} catch (erro) {
    console.log("Ocorreu um erro: " + erro.message); // A instrução 'try-catch' permite lidar com erros que podem ocorrer no código.
}

// arrow function
let somar = (a, b) => a + b; // Uma função de seta (arrow function) é uma sintaxe mais curta para escrever expressões de função.

// class
class Carro {
    constructor(marca, modelo) {
        this.marca = marca; // A propriedade 'marca' é inicializada no construtor da classe.
        this.modelo = modelo; // A propriedade 'modelo' é inicializada no construtor da classe.
    }

    getDetalhes() {
        return this.marca + " " + this.modelo; // Método que retorna uma string com a marca e o modelo do carro.
    }
} // Uma classe é um modelo para criar objetos com propriedades e métodos predefinidos.
