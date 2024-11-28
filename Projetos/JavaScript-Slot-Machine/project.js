// Importa o módulo `prompt-sync`, que permite capturar entradas do usuário no terminal.
const prompt = require("prompt-sync")();

// Define constantes para o número de linhas e colunas da máquina caça-níquel.
const ROWS = 3;
const COLS = 3;

// Define o número de ocorrências de cada símbolo na roleta da máquina.
const SYMBOLS_COUNT = {
  A: 2, // Símbolo "A" aparece 2 vezes
  B: 4, // Símbolo "B" aparece 4 vezes
  C: 6, // Símbolo "C" aparece 6 vezes
  D: 8, // Símbolo "D" aparece 8 vezes
};

// Define os valores para cada símbolo (o valor que o jogador ganha ao acertar combinações).
const SYMBOL_VALUES = {
  A: 5, // O valor do símbolo "A" é 5 vezes a aposta
  B: 4, // O valor do símbolo "B" é 4 vezes a aposta
  C: 3, // O valor do símbolo "C" é 3 vezes a aposta
  D: 2, // O valor do símbolo "D" é 2 vezes a aposta
};

// Função para pedir ao jogador para inserir um valor de depósito.
const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    // Verifica se o valor é válido (um número maior que 0).
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again.");
    } else {
      return numberDepositAmount;
    }
  }
};

// Função para solicitar ao jogador o número de linhas em que deseja apostar.
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    // Verifica se o número de linhas é válido (entre 1 e 3).
    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, try again.");
    } else {
      return numberOfLines;
    }
  }
};

// Função para solicitar ao jogador o valor da aposta por linha.
const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet per line: ");
    const numberBet = parseFloat(bet);

    // Verifica se a aposta é válida (um número positivo e não maior que o saldo por linha).
    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      console.log("Invalid bet, try again.");
    } else {
      return numberBet;
    }
  }
};

// Função que simula o giro da máquina, criando uma matriz de símbolos em cada coluna.
const spin = () => {
  const symbols = [];

  // Adiciona cada símbolo várias vezes à lista `symbols` de acordo com `SYMBOLS_COUNT`.
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = []; // Inicializa um array para armazenar as colunas.
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    const reelSymbols = [...symbols]; // Cópia da lista de símbolos para cada coluna.

    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1); // Remove o símbolo para evitar duplicatas.
    }
  }

  return reels;
};

// Função que altera a disposição dos símbolos das colunas para linhas.
const transpose = (reels) => {
  const rows = [];

  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }

  return rows;
};

// Função que imprime o resultado dos símbolos após o giro.
const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};

// Função que calcula os ganhos do jogador ao verificar combinações de símbolos.
const getWinnings = (rows, bet, lines) => {
  let winnings = 0;

  // Para cada linha, verifica se todos os símbolos são iguais.
  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let allSame = true;

    // Verifica se todos os símbolos na linha são iguais.
    for (const symbol of symbols) {
      if (symbol != symbols[0]) {
        allSame = false;
        break;
      }
    }

    // Se todos os símbolos forem iguais, calcula os ganhos.
    if (allSame) {
      winnings += bet * SYMBOL_VALUES[symbols[0]];
    }
  }

  return winnings;
};

// Função principal do jogo, que controla o fluxo da partida.
const game = () => {
  let balance = deposit(); // Inicializa o saldo com o valor depositado pelo jogador.

  while (true) {
    console.log("You have a balance of $" + balance);
    const numberOfLines = getNumberOfLines();
    const bet = getBet(balance, numberOfLines);
    balance -= bet * numberOfLines; // Deduz o valor total da aposta do saldo.

    const reels = spin(); // Gira a máquina e obtém os símbolos.
    const rows = transpose(reels); // Organiza os símbolos em linhas.
    printRows(rows); // Imprime o resultado.

    const winnings = getWinnings(rows, bet, numberOfLines); // Calcula os ganhos.
    balance += winnings; // Atualiza o saldo com os ganhos.
    console.log("You won, $" + winnings.toString());

    // Verifica se o jogador tem saldo para continuar jogando.
    if (balance <= 0) {
      console.log("You ran out of money!");
      break;
    }

    // Pergunta se o jogador quer jogar novamente.
    const playAgain = prompt("Do you want to play again (y/n)? ");
    if (playAgain != "y") break;
  }
};

// Inicia o jogo chamando a função `game`.
game();
