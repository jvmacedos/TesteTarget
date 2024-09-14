// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

function isFibonacci(num) {
    let a = 0, b = 1, next = 0;

    if (num === 0 || num === 1) return true;

    while (next < num){
        next = a + b;
        a = b;
        b = next;
    }

    return next === num;
}

// Testando: Um número pertence ao Fibonacci e outro não.

//const num = 21; // É Fibo!
//console.log(`O número ${num} ${isFibonacci(num) ? 'pertence' : 'não pertence'} à sequência de Fibonacci.`);

const num = 4; // Não é Fibo!
console.log(`O número ${num} ${isFibonacci(num) ? 'pertence' : 'não pertence'} à sequência de Fibonacci.`);