//O módulo fs(File System) serve para trabalhar com arquivos e diretórios
//Este é também um Core Module
//Podemos ler e escrever um arquivo, por exemplo
//Uma utilização interessante: logs do sistema

const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('mensagem.html', (err, data) => {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        return res.end();
    });
});

server.listen(port, () => console.log(`Servidor rodando na porta ${port}`));