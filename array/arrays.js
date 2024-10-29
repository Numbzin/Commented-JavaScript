// Arrays em JavaScript

// Um array é uma estrutura de dados que permite armazenar múltiplos valores em uma única variável.
// É como uma lista que pode conter elementos de diferentes tipos (números, strings, objetos, etc.).

// Aqui estamos criando um array chamado 'frutas' com alguns elementos (frutas).
let frutas = ['Banana', 'Maçã', 'Morango', 'Uva'];

// Exibindo o array no console para ver seus elementos
console.log('Array original:', frutas);

// Acessando elementos do array:
// O índice do primeiro elemento é 0, o segundo é 1, e assim por diante.
console.log('Primeira fruta:', frutas[0]); // Exibe 'Banana'
console.log('Segunda fruta:', frutas[1]); // Exibe 'Maçã'

// Adicionando uma nova fruta ao final do array usando o método push()
frutas.push('Pera'); 
// O método push() adiciona um novo elemento ao final do array.
console.log('Array após adicionar Pera:', frutas); // ['Banana', 'Maçã', 'Morango', 'Uva', 'Pera']

// Removendo a última fruta do array usando o método pop()
let frutaRemovida = frutas.pop();
// O método pop() remove o último elemento do array e o retorna.
console.log('Fruta removida:', frutaRemovida); // Exibe 'Pera'
console.log('Array após remover a última fruta:', frutas); // ['Banana', 'Maçã', 'Morango', 'Uva']

// Adicionando uma fruta no início do array usando o método unshift()
frutas.unshift('Laranja');
// O método unshift() adiciona um novo elemento no início do array.
console.log('Array após adicionar Laranja no início:', frutas); // ['Laranja', 'Banana', 'Maçã', 'Morango', 'Uva']

// Removendo a primeira fruta do array usando o método shift()
frutaRemovida = frutas.shift();
// O método shift() remove o primeiro elemento do array e o retorna.
console.log('Fruta removida do início:', frutaRemovida); // Exibe 'Laranja'
console.log('Array após remover a primeira fruta:', frutas); // ['Banana', 'Maçã', 'Morango', 'Uva']

// Encontrando o índice de uma fruta usando o método indexOf()
let indiceMorango = frutas.indexOf('Morango');
// O método indexOf() retorna a posição do elemento procurado ou -1 se não encontrar.
console.log('Índice da fruta Morango:', indiceMorango); // Exibe 2

// Verificando se uma fruta está no array usando o método includes()
if (frutas.includes('Maçã')) {
    console.log('A fruta Maçã está no array.'); // Essa mensagem será exibida
} else {
    console.log('A fruta Maçã não está no array.');
}

// Percorrendo o array com um loop for
console.log('Frutas no array:');
for (let i = 0; i < frutas.length; i++) {
    // Exibe a fruta e sua posição no array
    console.log('Fruta na posição', i, ':', frutas[i]);
}

// Usando forEach para percorrer o array
frutas.forEach(function(fruta, index) {
    // O método forEach() executa uma função para cada elemento do array.
    console.log('Fruta na posição', index, ':', fruta);
});

// Transformando todos os nomes das frutas para maiúsculas usando map()
let frutasMaiusculas = frutas.map(function(fruta) {
    // O método map() cria um novo array com os resultados da chamada da função para cada elemento.
    return fruta.toUpperCase(); // Retorna a fruta em letras maiúsculas
});
console.log('Frutas em maiúsculas:', frutasMaiusculas); // Exibe ['BANANA', 'MAÇÃ', 'MORANGO', 'UVA']

// Filtrando frutas que têm mais de 5 letras usando filter()
let frutasLongas = frutas.filter(function(fruta) {
    // O método filter() cria um novo array com todos os elementos que passam no teste da função.
    return fruta.length > 5; // Retorna true se a fruta tiver mais de 5 letras
});
console.log('Frutas com mais de 5 letras:', frutasLongas); // Exibe ['Banana', 'Morango']

// Reduzindo o array para contar o total de letras em todas as frutas usando reduce()
let totalLetras = frutas.reduce(function(total, fruta) {
    // O método reduce() aplica uma função contra um acumulador e cada elemento do array (da esquerda para a direita) para reduzi-lo a um único valor.
    return total + fruta.length; // Soma o comprimento de cada fruta ao total
}, 0); // O segundo argumento é o valor inicial do acumulador (0 neste caso).
console.log('Total de letras em todas as frutas:', totalLetras); // Exibe a soma total de letras
