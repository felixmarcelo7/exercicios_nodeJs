//Pra criiar uma página 404, ou seja, quando o usuário acessa uma página que não existe
//Basta criar um novo middleware abaixo de tods as rotas, que restoinde com esse status
//E envia um arquivo de template referente a esta página

const express = require("express");
const app = express();
const port = 3000; //variavel ambiente

const path = require("path");

const users = require("./users")

//ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
);

//arquivos estáticos
app.use(express.static("public"));

app.use(express.json());

const basePath = path.join(__dirname, "template");

app.use("./users", users);

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

//404 page
app.use((req, res, next) => {
    res.status(404).sendFile(`${basePath}/404.html`);
})
//

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});
