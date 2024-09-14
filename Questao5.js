// Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada? 

// Não sei se era para fazer com programação a lógica do processo, mas acabei fazendo

// interruptores.js

function descobrirInterruptores() {
    let lampada1 = { ligada: false, quente: false };
    let lampada2 = { ligada: false, quente: false };
    let lampada3 = { ligada: false, quente: false };

    // Fazendo cada ação:

    // Ligando o interruptor 1 por um tempo e depois desliga
    console.log("Ligando o interruptor 1...");
    lampada1.ligada = true;
    lampada1.quente = true;

    // Desligando o interruptor 1 e liga o interruptor 2
    console.log("Desligando o interruptor 1 e ligando o interruptor 2...");
    lampada1.ligada = false;
    lampada2.ligada = true;

    // Ir até a sala para verificar as lâmpadas
    console.log("Indo para a sala para verificar as lâmpadas...");

    // Verificação das lâmpadas
    if (lampada1.ligada) {
        console.log("Lâmpada 1 está acesa.");
    } else if (lampada1.quente) {
        console.log("Lâmpada 1 está apagada, mas está quente.");
    } else {
        console.log("Lâmpada 1 está apagada e fria.");
    }

    if (lampada2.ligada) {
        console.log("Lâmpada 2 está acesa.");
    } else {
        console.log("Lâmpada 2 está apagada.");
    }

    console.log("Lâmpada 3 está apagada e fria.");
}

// Testando: 
descobrirInterruptores();
