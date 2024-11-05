// Variáveis globais do jogo
let altura = 0;    // Altura da tela do jogo
let largura = 0;   // Largura da tela do jogo
let vidas = 1;     // Contador de vidas (começa em 1 e vai até 3)
let tempo = 25;    // Tempo do jogo em segundos
let criaMosquitoTempo = 1500  // Tempo base entre criar cada mosquito (1.5 segundos)

// Pegando o nível de dificuldade da URL
// Exemplo: se a URL for "jogo.html?normal", pega a palavra "normal"
let nivel = window.location.search;  // Pega os parâmetros da URL
nivel = nivel.replace('?', '')       // Remove o ponto de interrogação

// Define a velocidade do jogo baseado no nível escolhido
if(nivel === 'normal') {
    criaMosquitoTempo = 1500    // Normal: 1.5 segundos entre cada mosquito
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000    // Difícil: 1 segundo entre cada mosquito
} else if (nivel === 'chucknorris') {
    criaMosquitoTempo = 750     // Chuck Norris: 0.75 segundos entre cada mosquito
}

// Função que pega o tamanho atual da tela
function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;   // Altura da janela do navegador
    largura = window.innerWidth;   // Largura da janela do navegador
}

// Chama a função pela primeira vez para inicializar
ajustaTamanhoPalcoJogo();

// Cronômetro do jogo
let cronometro = setInterval(function () {
    tempo -= 1;  // Diminui 1 segundo do tempo
    
    if (tempo < 0) {  // Se o tempo acabou
        clearInterval(cronometro);    // Para o cronômetro
        clearInterval(criaMosquito);  // Para de criar mosquitos
        window.location.href = "win.html";  // Redireciona para página de vitória
    } else {
        // Atualiza o tempo mostrado na tela
        document.querySelector("#cronometro").innerHTML = tempo;
    }
}, 1000);  // Executa a cada 1 segundo (1000 milissegundos)

// Função que cria e posiciona os mosquitos
function posicaoRandomica() {
    // Se já existe um mosquito na tela
    if (document.querySelector("#mosquito")) {
        document.querySelector("#mosquito").remove();  // Remove ele
        
        // Se perdeu todas as vidas (mais que 3 erros)
        if (vidas > 3) {
            window.location.href = "gameover.html";  // Vai para tela de game over
        }
        
        // Troca o coração cheio por vazio
        document.querySelector("#v" + vidas).src = "./assets/coracao_vazio.png";
        vidas++;  // Aumenta o contador de vidas perdidas
    }

    // Calcula posição aleatória para o mosquito
    let posicaoX = Math.floor(Math.random() * largura) - 90;  // 90 é o tamanho do mosquito
    let posicaoY = Math.floor(Math.random() * altura) - 90;
    
    // Corrige posições negativas
    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoX < 0 ? 0 : posicaoY;

    // Cria o elemento do mosquito
    let mosquito = document.createElement("img");
    mosquito.src = "./assets/mosquito.png";  // Define a imagem
    // Define classes para tamanho e lado aleatórios
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
    mosquito.style.left = posicaoX + "px";  // Posição horizontal
    mosquito.style.top = posicaoY + "px";   // Posição vertical
    mosquito.style.position = "absolute";    // Posicionamento absoluto na tela
    mosquito.id = "mosquito";               // ID para poder encontrar depois
    
    // Quando clicar no mosquito, ele é removido
    mosquito.onclick = function () {
        this.remove();
    };

    // Adiciona o mosquito na tela
    document.body.appendChild(mosquito);
}

// Função que retorna um tamanho aleatório para o mosquito
function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3);  // Número aleatório entre 0 e 2
    
    switch (classe) {
        case 0:
            return "mosquito1";  // Tamanho normal
        case 1:
            return "mosquito2";  // Tamanho maior
        case 2:
            return "mosquito2";  // Também tamanho maior
    }
}

// Função que retorna um lado aleatório para o mosquito
function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2);  // Número aleatório entre 0 e 1
    
    switch (classe) {
        case 0:
            return "ladoA";  // Mosquito olhando para esquerda
        case 1:
            return "ladoB";  // Mosquito olhando para direita
    }
}