//Para retornar HTML precisamos implementar mais recursos
//Podemos adicionar um status code no retorno, com a propriedade status code
//Mudar os headers para text/html
//E retornar o HTML pelo o método end do http

const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Contenty-Type', 'text/html');
    res.end('<h1>Hello World!!!</h1>');
});

server.listen(port, () => {
    console.log(`Servidor rodando na prota ${port}`);
});

