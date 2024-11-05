// ================================
// Objeto principal do jogo de Mosquito
// ================================
const JogoMosquito = {
    altura: 0,    // Armazena a altura atual da tela do jogo
    largura: 0,   // Armazena a largura atual da tela do jogo
    vidas: 1,     // Contador de vidas do jogador (inicia com 1)
    tempo: 25,    // Tempo total do jogo em segundos
    criaMosquitoTempo: 1500,  // Intervalo base (em milissegundos) entre a criação de cada mosquito

    // ================================
    // Função de inicialização do jogo
    // ================================
    iniciar() {
        // Define a dificuldade do jogo com base no nível especificado na URL
        this.definirDificuldade();

        // Ajusta as variáveis de altura e largura com base no tamanho da tela atual
        this.ajustarTamanhoPalcoJogo();

        // Inicia o cronômetro do jogo para contagem regressiva do tempo
        this.iniciarCronometro();

        // Começa a criar mosquitos na tela em intervalos regulares
        this.criarMosquito();

        // Atualiza o tamanho do palco do jogo quando a tela é redimensionada
        window.addEventListener('resize', () => this.ajustarTamanhoPalcoJogo());
    },

    // ================================
    // Define a dificuldade do jogo
    // ================================
    definirDificuldade() {
        // Obtém o nível de dificuldade a partir dos parâmetros da URL
        const nivel = new URLSearchParams(window.location.search).get('nivel');

        // Define intervalos de criação de mosquito para cada nível de dificuldade
        const dificuldades = {
            'normal': 1500,        // Intervalo de 1.5 segundos no nível "normal"
            'dificil': 1000,       // Intervalo de 1 segundo no nível "difícil"
            'chucknorris': 750     // Intervalo de 0.75 segundos no nível "chucknorris"
        };

        // Define o intervalo com base na dificuldade; usa 1.5 segundos se o nível não for reconhecido
        this.criaMosquitoTempo = dificuldades[nivel] || 1500;
    },

    // ================================
    // Ajusta o tamanho do palco do jogo
    // ================================
    ajustarTamanhoPalcoJogo() {
        // Atualiza as variáveis com as dimensões da tela
        this.altura = window.innerHeight;
        this.largura = window.innerWidth;
    },

    // ================================
    // Inicia o cronômetro do jogo
    // ================================
    iniciarCronometro() {
        const cronometro = setInterval(() => {
            this.tempo--;  // Reduz o tempo em 1 segundo a cada intervalo

            // Se o tempo chegar a zero, o jogador ganha o jogo
            if (this.tempo < 0) {
                clearInterval(cronometro);            // Para o cronômetro
                clearInterval(this.intervaloMosquito); // Para a criação de mosquitos
                window.location.href = "win.html";     // Redireciona para a tela de vitória
            } else {
                // Atualiza o elemento HTML do cronômetro com o tempo restante
                document.querySelector("#cronometro").innerHTML = this.tempo;
            }
        }, 1000);  // Intervalo de 1 segundo
    },

    // ================================
    // Função para criar mosquitos em posições aleatórias
    // ================================
    criarMosquito() {
        // Configura a criação de mosquitos em intervalos de tempo baseados na dificuldade
        this.intervaloMosquito = setInterval(() => this.posicaoRandomica(), this.criaMosquitoTempo);
    },

    // ================================
    // Gera posição aleatória para o mosquito e o coloca na tela
    // ================================
    posicaoRandomica() {
        // Verifica se já existe um mosquito na tela
        const mosquitoExistente = document.querySelector("#mosquito");
        if (mosquitoExistente) {
            mosquitoExistente.remove();  // Remove o mosquito anterior, se houver
            
            // Verifica se o jogador perdeu todas as vidas
            if (this.vidas > 3) {
                // Se sim, redireciona para a tela de game over
                window.location.href = "gameover.html";
            }

            // Troca o ícone do coração para vazio, indicando uma vida perdida
            document.querySelector("#v" + this.vidas).src = "./assets/coracao_vazio.png";
            this.vidas++;  // Incrementa o contador de vidas perdidas
        }

        // Gera posições X e Y aleatórias, garantindo que fiquem dentro dos limites da tela
        const posicaoX = Math.max(Math.floor(Math.random() * this.largura) - 90, 0);
        const posicaoY = Math.max(Math.floor(Math.random() * this.altura) - 90, 0);
        
        // Cria o elemento do mosquito e o posiciona na tela
        const mosquito = this.criarElementoMosquito(posicaoX, posicaoY);
        document.body.appendChild(mosquito); // Adiciona o mosquito ao corpo do documento
    },

    // ================================
    // Cria o elemento de imagem do mosquito com tamanho e posição específicos
    // ================================
    criarElementoMosquito(x, y) {
        const mosquito = document.createElement("img");  // Cria um novo elemento de imagem
        mosquito.src = "./assets/mosquito.png";          // Define a imagem do mosquito
        mosquito.className = this.tamanhoAleatorio() + " " + this.ladoAleatorio(); // Aplica classes para tamanho e direção
        mosquito.style.left = x + "px";  // Define a posição horizontal
        mosquito.style.top = y + "px";   // Define a posição vertical
        mosquito.style.position = "absolute";  // Define a posição como absoluta para localização específica na tela
        mosquito.id = "mosquito";               // Define o ID para facilitar a remoção
        mosquito.onclick = () => mosquito.remove(); // Remove o mosquito ao ser clicado
        return mosquito; // Retorna o elemento criado
    },

    // ================================
    // Retorna uma classe para o tamanho aleatório do mosquito
    // ================================
    tamanhoAleatorio() {
        // Retorna "mosquito1", "mosquito2" ou "mosquito3" para tamanhos variados
        return `mosquito${Math.floor(Math.random() * 3) + 1}`; 
    },

    // ================================
    // Retorna uma classe para a direção aleatória do mosquito
    // ================================
    ladoAleatorio() {
        // Retorna "ladoA" (olhando para a esquerda) ou "ladoB" (olhando para a direita)
        return Math.random() < 0.5 ? "ladoA" : "ladoB"; 
    }
};

// Inicializa o jogo quando a página carrega
window.onload = () => JogoMosquito.iniciar();
