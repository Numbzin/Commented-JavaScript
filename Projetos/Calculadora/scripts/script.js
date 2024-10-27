// function calcular(tipo, valor) {
//     if (tipo === 'acao'){
//         if (valor === 'c') {
//             //Info: limpar o visor
//             document.getElementById('resultado').value = ''
//         }
//         if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
//             document.getElementById('resultado').value += valor
//         } if (valor === '=') {
//             let valor_campo = eval(document.getElementById('resultado').value)
//             document.getElementById('resultado').value = valor_campo
//         }
//     } else if (tipo === 'valor'){
//         document.getElementById('resultado').value += valor
//     }
// }

function calcular(tipo, valor) {
    const resultado = document.getElementById('resultado');

    if (tipo === 'acao') {
        switch (valor) {
            case 'c':
                // Info: Limpar o visor
                resultado.value = '';
                break;
            case '+':
            case '-':
            case '*':
            case '/':
            case '.':
                resultado.value += valor;
                break;
            case '=':
                try {
                    //Note: Usa Function em vez de eval para avaliar a expressão
                    resultado.value = new Function('return ' + resultado.value)();
                } catch (error) {
                    resultado.value = 'Erro';
                }
                break;
        }
    } else if (tipo === 'valor') {
        //Info: Adiciona números ao visor
        resultado.value += valor;
    }
}
