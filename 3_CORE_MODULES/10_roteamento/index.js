//Podemos criar um sistema de roteamento simples com Node.js e seus Core Modules
//As rotas são basicamente as páginas que acessamos nos sites
//A ideia é identificar os arquivos acessados pela URL e retorná-los, se existirem

const http = require("http");
const fs = require("fs");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const filename = q.pathname.substring(1);

  if (filename.includes("html")) {
    if (fs.existsSync(filename)) {
      fs.readFile(filename, (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      fs.readFile("404.html", (err, data) => {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  }
});

server.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
