//Podemos criar e escrever um arquivo também, utilizando o metodo writeFile;
//esta escrita pode estar associada a um conjunto de operações
//Como o envio de informações de um usuário, pro exemplo

const http = require("http");
const fs = require("fs");

const prot = 3000;

const server = http.createServer((req, res) => {
  const urlInfo = require("url").parse(req.url, true);
  const name = urlInfo.query.name;

  if (!name) {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  } else {
    fs.writeFile("arquivo.txt", name, (err, data) => {
      res.writeHead(302, {
        location: "/",
      });
      return res.end();
    });
  }
});

server.listen(prot, () => console.log(`Servidor rodndo na porta ${prot}`));
