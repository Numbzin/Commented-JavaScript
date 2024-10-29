// Estrutura de controle switch
// O switch é usado para executar diferentes ações com base no valor de uma expressão.
// Ele é útil quando temos várias condições a verificar, substituindo múltiplos if-else.

let dia = 4; // Vamos supor que dia seja 4, representando um dia da semana.

switch (dia) {
    case 1:
        console.log("Segunda-feira"); // Se dia for 1, imprime "Segunda-feira".
        break; // O break interrompe a execução do switch.
    case 2:
        console.log("Terça-feira"); // Se dia for 2, imprime "Terça-feira".
        break;
    case 3:
        console.log("Quarta-feira"); // Se dia for 3, imprime "Quarta-feira".
        break;
    case 4:
        console.log("Quinta-feira"); // Se dia for 4, imprime "Quinta-feira".
        break;
    case 5:
        console.log("Sexta-feira"); // Se dia for 5, imprime "Sexta-feira".
        break;
    case 6:
        console.log("Sábado"); // Se dia for 6, imprime "Sábado".
        break;
    case 7:
        console.log("Domingo"); // Se dia for 7, imprime "Domingo".
        break;
    default:
        console.log("Dia inválido"); // Se dia não for de 1 a 7, imprime "Dia inválido".
}

// Exemplo de switch com string
let cor = "vermelho";

switch (cor) {
    case "azul":
        console.log("Você escolheu a cor azul.");
        break;
    case "vermelho":
        console.log("Você escolheu a cor vermelho."); // Aqui o código será executado
        break;
    case "verde":
        console.log("Você escolheu a cor verde.");
        break;
    default:
        console.log("Cor não reconhecida.");
}

// Exemplo com múltiplos casos
let fruta = "maçã";

switch (fruta) {
    case "banana":
    case "maçã": // Ambos os casos vão para a mesma ação
        console.log("Você escolheu uma fruta amarela ou vermelha.");
        break;
    case "laranja":
        console.log("Você escolheu uma fruta laranja.");
        break;
    default:
        console.log("Fruta desconhecida.");
}

// Exemplo de switch sem break (cascata)
let numero = 2;

switch (numero) {
    case 1:
        console.log("Número 1");
        // Nota: não há break aqui, então continuará para o próximo case.
    case 2:
        console.log("Número 2"); // Também será impresso.
        // O mesmo acontece aqui se não houver break.
    case 3:
        console.log("Número 3");
        break;
    default:
        console.log("Número não reconhecido.");
}

// Exemplo de switch para avaliar a situação do clima
let clima = "nublado";

switch (clima) {
    case "ensolarado":
        console.log("Ótimo dia para um piquenique!"); // Se o clima for ensolarado.
        break;
    case "nublado":
        console.log("Pode ser que chova, leve um guarda-chuva!"); // Aqui será executado.
        break;
    case "chuvoso":
        console.log("Fique em casa e aproveite um filme!");
        break;
    default:
        console.log("Clima desconhecido.");
}
