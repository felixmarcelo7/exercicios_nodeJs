//Estrutura de repetição
//As estruturas de repetição no Handlebars são feitas pelo operador each
//A sintaxe é {{#each}}...{{/each}}
//Em um array podemos chamar os itens com: {{this}}
//Então cada um dos itens é acessado na view
//Como o Handlebars prega um template mais limpo, devemos mandar apenas
//o necessário para o front-end

const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine('handlebars', exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
    const itens = ["a", "b", "c"];

    res.render("dashboard", {itens});
});

app.get("/", (req, res) => {
    const user = {
        name: "Marcelo",
        surname: "Felix",
        age: "26",
    }

    const auth = true;
    const approved = true;

    res.render("home", {user, auth, approved});
});

app.listen(3000, (req, res) => {
    console.log("App rodando");
});