// Manipulação do DOM em JavaScript

// O DOM (Document Object Model) é uma interface de programação que permite que scripts acessem e atualizem o conteúdo, estrutura e estilo de documentos HTML e XML.
// Abaixo, vamos demonstrar várias operações comuns que podemos realizar no DOM.

// 1. Acessando elementos do DOM
// Usamos o método getElementById() para acessar um elemento específico pelo seu ID.
let titulo = document.getElementById('titulo'); // Suponha que exista um elemento com id "titulo"
console.log('Título acessado pelo ID:', titulo.innerText); // Exibe o texto do título no console

// 2. Modificando o conteúdo de um elemento
// Mudamos o texto do título acessado.
titulo.innerText = 'Olá, Mundo!'; // Altera o texto do título para 'Olá, Mundo!'
console.log('Título modificado para:', titulo.innerText); // Exibe o novo texto no console

// 3. Alterando o estilo de um elemento
// Mudamos o estilo do título alterando suas propriedades CSS.
titulo.style.color = 'blue'; // Altera a cor do texto para azul
titulo.style.fontSize = '24px'; // Altera o tamanho da fonte para 24 pixels

// 4. Criando e adicionando novos elementos
// Vamos criar um novo elemento <p> e adicioná-lo ao body.
let novoParagrafo = document.createElement('p'); // Cria um novo elemento <p>
novoParagrafo.innerText = 'Este é um parágrafo adicionado dinamicamente!'; // Define o texto do parágrafo

// Para adicionar o novo parágrafo ao final do body:
document.body.appendChild(novoParagrafo); // Adiciona o parágrafo ao final do body
console.log('Novo parágrafo adicionado:', novoParagrafo.innerText); // Exibe o texto do novo parágrafo

// 5. Removendo elementos do DOM
// Vamos remover o parágrafo que acabamos de adicionar.
document.body.removeChild(novoParagrafo); // Remove o novo parágrafo do body
console.log('Parágrafo removido.');

// 6. Adicionando eventos
// Vamos adicionar um evento de clique a um botão (supondo que exista um botão com id "meuBotao").
let botao = document.getElementById('meuBotao'); // Acessa o botão pelo ID
botao.addEventListener('click', function() {
    alert('Botão clicado!'); // Exibe um alerta quando o botão é clicado
});

// 7. Alterando a classe de um elemento
// Podemos adicionar ou remover classes de um elemento para aplicar estilos CSS diferentes.
titulo.classList.add('destaque'); // Adiciona a classe 'destaque' ao título
console.log('Classe "destaque" adicionada ao título.');

// 8. Alterando o valor de um input
// Suponha que exista um input com id "meuInput". Vamos acessar e mudar seu valor.
let meuInput = document.getElementById('meuInput'); // Acessa o input pelo ID
meuInput.value = 'Texto alterado!'; // Altera o valor do input para 'Texto alterado!'
console.log('Valor do input alterado para:', meuInput.value); // Exibe o novo valor no console

// 9. Percorrendo todos os elementos de uma lista
// Suponha que exista uma lista não ordenada <ul> com id "minhaLista". Vamos percorrer os itens.
let lista = document.getElementById('minhaLista'); // Acessa a lista pelo ID
let itens = lista.getElementsByTagName('li'); // Acessa todos os itens <li> da lista

for (let i = 0; i < itens.length; i++) {
    console.log('Item da lista:', itens[i].innerText); // Exibe o texto de cada item no console
}
