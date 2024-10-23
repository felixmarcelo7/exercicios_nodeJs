//Para enviar HTML como resposta utilizamos o método sendFile
//Isso faz com que o arquivo seja renderizado no navegador
//Precissamos acessar o arquivo por meio do diretório base, isso requer o módulo path;
const express = require("express");
const app = express();
const port = 3000; //variavel ambiente

const path = require("path");

const basePath = path.join(__dirname, "template");

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});

