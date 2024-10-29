//Para envir dados vamos precisar criar um form e mandar os dados via POST paa alguma URL
//No Express precisamos colocar alguns middlewares como o express.json para ler os dados do body
//e Também uma rota que vai receber estes dados, utilizando o método post do Express 

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

app.use(express.json());

const basePath = path.join(__dirname, "template");

app.use("./users", users);

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});
