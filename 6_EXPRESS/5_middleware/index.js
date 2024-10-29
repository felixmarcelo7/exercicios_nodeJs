//Middlewares são códigos que podem ser executados no meio/entre (middle) de alguma ação e outra
//Por exemplo: verificar  se usuário está logado, podemos ter um para esta verificação
//O método que nos da acesso a utilizar middlewares é o .use no Express

const express = require("express");
const app = express();
const port = 3000; //variavel ambiente

const path = require("path");

const basePath = path.join(__dirname, "template");

//middleware
const chackAuth = (req, res, next) => {
    req.authStatus = true;

    if(req.authStatus) {
        console.log("Está logado, pode continuar");
        next();
    } else {
        console.log("Não está logado, faça o login pra continuar");
        next();
    }
}

app.use(chackAuth)
//
app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});

