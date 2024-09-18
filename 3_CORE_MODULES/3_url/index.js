//O módulo url serve para decompor uma URL que passamos para o método parse
//Podemos resgatar: host, path, search, query e etc
//A partir dessa informações podemos alterar a lógica do nosso código

const url = require('url');
const address = 'https://www.meusite.com.br/catalogo?produtos=cadeira';
const parsedUrl = new url.URL(address);

console.log(parsedUrl);

console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.searchParams.get('produtos'));
