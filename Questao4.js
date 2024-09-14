//Descubra a lógica e complete o próximo elemento:
//a) 1, 3, 5, 7, ___ (Somando 2)
//b) 2, 4, 8, 16, 32, 64, ____ (Multiplica por 2)
//c) 0, 1, 4, 9, 16, 25, 36, ____ (Ao quadrado)
//d) 4, 16, 36, 64, ____ (Ao quadrado - somente pares)
//e) 1, 1, 2, 3, 5, 8, ____ (Fibonacci)
//f) 2,10, 12, 16, 17, 18, 19, ____ (Números que começam com "D")

// Letra A
function sequenceA() {
    let sequence = [];
    for (let i = 1; i <= 9; i += 2) {
        sequence.push(i);
    }
    return sequence;
}

// Letra B

function sequenceB() {
    let sequence = [];
    let value = 2;
    for (let i = 0; i < 7; i++) {
        sequence.push(value);
        value *= 2;
    }
    return sequence;
}

// Letra C

function sequenceC() {
    let sequence = [];
    for (let i = 0; i <= 7; i++) {
        sequence.push(i * i);
    }
    return sequence;
}

// Letra D

function sequenceD() {
    let sequence = [];
    for (let i = 2; i <= 10; i += 2) {
        sequence.push(i * i);
    }
    return sequence;
}

// Letra E

function sequenceE() {
    let sequence = [1, 1];
    for (let i = 2; i < 7; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}

// Letra F

function sequenceF() {
    let sequence = [2, 10, 12, 16, 17, 18, 19, 200];
    return sequence;
}

// Testando:

console.log(`Sequência A: ${sequenceA()}`);
console.log(`Sequência B: ${sequenceB()}`);
console.log(`Sequência C: ${sequenceC()}`);
console.log(`Sequência D: ${sequenceD()}`);
console.log(`Sequência E: ${sequenceE()}`);
console.log(`Sequência F: ${sequenceF()}`);