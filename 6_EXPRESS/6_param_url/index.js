//Podemos resgatar os parâmetros da URL por meio do req
//Acessamos req.params.<nome>
//Onde nome deve ser o que está definido na URL do Express
//que fica desta forma: /users/:id
//neste caso estaríamos buscando o usuário no bando de dados pelo id
//e o parâmetro vem pela URL

const express = require("express");
const app = express();
const port = 3000; //variavel ambiente

const path = require("path");

const basePath = path.join(__dirname, "template");

app.get("/users/:id", (req, res) => {
    const id = req.params.id;

    //leitura da tabela users, resgatar um usuário do banco
    console.log(`Estamos buscando pelo usuário: ${id}`);

    res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});

