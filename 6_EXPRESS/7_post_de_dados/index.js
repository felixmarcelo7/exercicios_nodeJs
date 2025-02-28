//Para envir dados vamos precisar criar um form e mandar os dados via POST paa alguma URL
//No Express precisamos colocar alguns middlewares como o express.json para ler os dados do body
//e Também uma rota que vai receber estes dados, utilizando o método post do Express 

const express = require("express");
const app = express();
const port = 3000; //variavel ambiente

const path = require("path");

//ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

const basePath = path.join(__dirname, "template");

app.get("/users/add", (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
});

app.post("/users/save", (req, res) => {
    console.log(req.body)

    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome do usuário é ${name} e sua idade é ${age}`);

    res.sendFile(`${basePath}/userform.html`);
});

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
