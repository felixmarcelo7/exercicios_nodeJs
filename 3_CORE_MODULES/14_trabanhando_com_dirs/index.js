//Como o módulo fs também podemos trabalhar com diretórios
//o método exists pode evidenciar se um diretório existe ou não
//e o método mkdir cria um diretório

const fs = require('fs');

if(!fs.existsSync('./minhapasta')) {
    console.log('Não existe');
    fs.mkdirSync('minhapasta');
} else {
    console.log('Diretório existe');
}
