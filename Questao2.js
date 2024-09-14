// Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.
function countLetterA(str) {
    const regex = /a/gi;
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

// Testando:

const str = "Eu gosto de programar em JavaScript e Python";
console.log(`A letra 'a' aparece ${countLetterA(str)} vezes na string.`);