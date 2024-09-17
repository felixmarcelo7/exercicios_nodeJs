//O MÓDULO HTTP
//Podemos criar um servidor HTTP com este módulo
//Ou seja, receber uma requisição e enviar código HTML como resposta, por exemplo
//Vamos utilizar alguns métodos como createServer, para cração do servidor
//E também o listen, para determinar a porta

const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.write("Hello, World!!!");
    res.end();
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
