// Antigamente
var listaantiga = Array();

// Novo
let lista = [];
console.log(lista);

// Adicionando um ítem
lista.push(`Carvão`);
lista.push(`Carne`);
lista.push(`Cerveja sem alcool`);
lista.push(10);
console.log(lista);


// Que todo array começa com zero;
console.log(lista[0]);

// O pop sempre remove o ultimo ítem da lista
console.log(lista.pop())
console.log(lista);
console.log(lista.splice(1,0,'Alcool'));
// primeiro parametro - começa
// segundo parametro - deleta itens
// terceiro parametro adiciona itens
console.log(lista.splice(0,1));

// adicionar item em posição específica
// utilizando filter
// filtrando informações
//console.log(lista.splice0,0''elemento''));
console.log(lista.filter(e => e === 'Cerveja'));

// Buscando informação com o find
console.log('Utilizando Find');
console.log(lista.find(v => v === 'Carne'));


// Verifivar tamanho da lista
console.log('Tamanho da lista');
console.log(lista.length)

console.log(lista);


let numeros = [1,2,3,4,5,6,7,8,9,10];
const resultado = numeros.map(Math.sqrt)
console.log('Utilizando Raiz queadrada')
console.log(resultado)
