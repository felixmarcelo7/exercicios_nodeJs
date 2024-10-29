//Precisamos toda vez reiniciar oservidor para receber as atualizações, isso é muito custoso;
//Vamos então instalar o módulo Nodemon;
//que a cada vez que o arquivo é salvo reinicia o projeto, facilitando nossa vida
//Vamos salvar como dependencia de desenvolvimento (--save-dev); 

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

