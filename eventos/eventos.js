// Trabalhando com Eventos em JavaScript

// Eventos são ações que ocorrem em um documento HTML, como cliques, movimentos do mouse, teclas pressionadas, entre outros.
// Neste arquivo, vamos demonstrar como manipular eventos usando JavaScript.

// 1. Acessando um elemento
// Vamos assumir que temos um botão com o id "meuBotao" e um input com o id "meuInput".
let botao = document.getElementById('meuBotao'); // Acessa o botão pelo ID
let meuInput = document.getElementById('meuInput'); // Acessa o input pelo ID

// 2. Adicionando um evento de clique a um botão
botao.addEventListener('click', function() {
    alert('Botão clicado!'); // Exibe um alerta quando o botão é clicado
});

// 3. Evento de entrada no input
// Vamos adicionar um evento que reage a alterações no valor do input.
meuInput.addEventListener('input', function() {
    console.log('Novo valor do input:', meuInput.value); // Exibe o novo valor do input no console
});

// 4. Evento de passagem do mouse
// Adicionando um evento que é ativado quando o mouse passa sobre um elemento.
botao.addEventListener('mouseover', function() {
    botao.style.backgroundColor = 'lightblue'; // Altera a cor de fundo do botão quando o mouse passa sobre ele
});

// 5. Evento de saída do mouse
// Revertendo a cor do botão quando o mouse sai do elemento.
botao.addEventListener('mouseout', function() {
    botao.style.backgroundColor = ''; // Remove a cor de fundo do botão
});

// 6. Evento de tecla pressionada
// Vamos adicionar um evento que reage quando uma tecla é pressionada enquanto o input está focado.
meuInput.addEventListener('keypress', function(event) {
    console.log('Tecla pressionada:', event.key); // Exibe a tecla pressionada no console
});

// 7. Usando um evento para prevenir o comportamento padrão
// Supondo que temos um formulário com o id "meuFormulario".
let formulario = document.getElementById('meuFormulario'); // Acessa o formulário pelo ID

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
    alert('Formulário enviado!'); // Exibe um alerta ao invés de enviar o formulário
});

// 8. Removendo um evento
// Supondo que queremos remover o evento de clique do botão.
function minhaFuncao() {
    alert('Esta função não será mais chamada!');
}

botao.addEventListener('click', minhaFuncao); // Adiciona a função de alerta ao clique

// Para remover o evento, usamos removeEventListener
botao.removeEventListener('click', minhaFuncao); // Remove o evento de clique
console.log('Evento de clique removido do botão.');

// 9. Encadeando eventos
// Podemos adicionar vários eventos a um mesmo elemento. Por exemplo, vamos adicionar um evento de clique que altera o texto do botão.
botao.addEventListener('click', function() {
    botao.innerText = 'Clicado!'; // Muda o texto do botão após o clique
});
