// Inicializa as variáveis 'a', 'b' e 'c' com valores específicos
let a = 10; // A variável 'a' recebe o valor 10
let b = 20; // A variável 'b' recebe o valor 20
let c = null; // A variável 'c' é inicializada como null (sem valor)

 // Exibe os valores atuais das variáveis 'a', 'b' e 'c' no documento
document.write('A: ' + a + '<br />'); // Exibe o valor de 'a'
document.write('B: ' + b + '<br />'); // Exibe o valor de 'b'
document.write('C: ' + c + '<br />'); // Exibe o valor de 'c' (null)

document.write('<hr />'); // Adiciona uma linha horizontal para separação visual

// Inversão dos valores entre as variáveis 'a' e 'b'
c = a; // Armazena o valor de 'a' em 'c' (c agora é 10)
a = b; // Atribui o valor de 'b' a 'a' (a agora é 20)
b = c; // Atribui o valor de 'c' a 'b' (b agora é 10)
c = null; // Reinicializa 'c' como null

// Exibe os novos valores das variáveis 'a', 'b' e 'c' após a inversão
document.write('A: ' + a + '<br />'); // Exibe o novo valor de 'a' (20)
document.write('B: ' + b + '<br />'); // Exibe o novo valor de 'b' (10)
document.write('C: ' + c + '<br />'); // Exibe o valor de 'c' (null)
