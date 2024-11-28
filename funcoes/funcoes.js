// Funções em JavaScript

// As funções são blocos de código que realizam uma tarefa específica.
// Elas podem ser definidas de várias maneiras, receber parâmetros e retornar valores.

// 1. Definindo uma Função Simples
// Esta função exibe uma mensagem no console.
function exibirMensagem() {
  console.log("Olá, bem-vindo ao JavaScript!"); // Exibe uma mensagem
}

// Chamando a função
exibirMensagem(); // Chama a função para executar seu código

// 2. Função com Parâmetros
// Podemos passar informações para a função através de parâmetros.
function somar(a, b) {
  return a + b; // Retorna a soma de a e b
}

// Chamando a função com argumentos
let resultado = somar(5, 3); // Passa 5 e 3 como argumentos
console.log("Resultado da soma:", resultado); // Exibe o resultado: 8

// 3. Função com Parâmetros Opcionais
// Podemos definir parâmetros opcionais usando valores padrão.
function saudacao(nome = "Visitante") {
  console.log("Olá, " + nome + "!"); // Exibe uma saudação com o nome fornecido ou 'Visitante'
}

// Chamadas da função
saudacao("Maria"); // Exibe: Olá, Maria!
saudacao(); // Exibe: Olá, Visitante!

// 4. Funções Anônimas
// Funções podem ser definidas sem um nome, chamadas de funções anônimas.
const multiplicar = function (x, y) {
  return x * y; // Retorna o produto de x e y
};

// Chamando a função anônima
console.log("Resultado da multiplicação:", multiplicar(4, 2)); // Exibe: 8

// 5. Funções de Flecha (Arrow Function)
// A sintaxe de funções de flecha é uma forma mais concisa de escrever funções.
const dividir = (numerador, denominador) => {
  return numerador / denominador; // Retorna a divisão
};

// Chamando a função de flecha
console.log("Resultado da divisão:", dividir(10, 2)); // Exibe: 5

// 6. Funções com Retorno
// Podemos usar o retorno para passar valores de volta ao chamador.
function calcularQuadrado(num) {
  return num * num; // Retorna o quadrado do número
}

// Chamando a função
let quadrado = calcularQuadrado(5);
console.log("O quadrado de 5 é:", quadrado); // Exibe: 25

// 7. Funções Recursivas
// Funções podem chamar a si mesmas, o que é chamado de recursão.
function fatorial(n) {
  if (n === 0) {
    return 1; // Condição base: o fatorial de 0 é 1
  } else {
    return n * fatorial(n - 1); // Chama a função de forma recursiva
  }
}

// Chamando a função recursiva
console.log("Fatorial de 5 é:", fatorial(5)); // Exibe: 120

// 8. Funções que Aceitam Funções como Argumento
// Podemos passar funções como parâmetros para outras funções.
function operar(a, b, operacao) {
  return operacao(a, b); // Chama a função de operação com a e b
}

// Chamando a função com uma função de soma como argumento
let soma = operar(10, 5, somar); // Usa a função 'somar'
console.log("Resultado da operação:", soma); // Exibe: 15
