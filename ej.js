const prompt = require('prompt-sync')();

let numero;
while (true) {
    numero = prompt("Por favor, ingresa un número: ");
    numero = Number(numero);

    if (!isNaN(numero) && numero > 0) {
        break; 
    } else {
        console.log("Error: Debes ingresar un número válido.");
    }
}

let serie = [];
for (let i = 0; i < numero; i++) {
    if (i === 0) {
        serie.push(0);
    } else if (i === 1) {
        serie.push(1);
    } else {
        serie.push(serie[i - 1] + serie[i - 2]);
    }
}

console.log(`Serie de Fibonacci: ${serie.join(", ")}`);
