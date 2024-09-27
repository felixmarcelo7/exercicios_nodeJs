//com a função resolve é possível saber qual o path completo até o arquivo alvo
//e com a função join é possível formar um path dinâmico, com variáveis e valores fixos

const path = require('path');

//path absoluto
console.log(path.resolve('teste.txt'));

//formar path
const midFolder = 'relatorios';
const fileName = 'marcelo.txt';

const finalPath = path.join('/', 'arqiovos', midFolder, fileName);

console.log(finalPath);
