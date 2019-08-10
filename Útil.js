// Repetir
const abc = 'abc';
console.log(abc.repeat(2));

// Replace
let frase = ' Hoje o dia esta bonito!';
console.log('Utilizando Replace');
console.log(frase
    .replace('dia','noite')
    .replace('bonito','bonita')
    .replace(' o ',' a '));

    // Caracter no final da frase
    console.log('Utilizando endswith');
    console.log(frase.endsWith('o!'));

    // Caracter no inicio da frase
    console.log('Utilizando startWith')
    console.log(frase.startsWith('0!'));

    // Convertendo para minúsculo
    let fraseM = 'HOJE O DIA ESTA BONITO';
    console.log('Utilizando tolowerCase');
    console.log(fraseM.toLowerCase());

    // Convertendo para maiúsculo
    let fraseMi = 'hoje o dia esta bonito';
    console.log('Utilizando toUpperCase');
    console.log(fraseMi.toUpperCase());

