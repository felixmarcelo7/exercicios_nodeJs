//Utilizando condicionais
//Utilizar estrutura condicional nos permite mais flexibilidade no layout
//Podemos utilizar o if no handlebars
//A sintaxe é {{#if alguma_coisa}}...{{/if}}
//Só imprime  o que está entre as condicionais, se o resultado dela for verdadeiro
//precisamos encaminhar o dado a ser validado pelo backend

const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine('handlebars', exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
    res.render("dashboard");
});

app.get("/", (req, res) => {
    const user = {
        name: "Marcelo",
        surname: "Felix",
        age: "26",
    }

    const auth = true;

    res.render("home", {user, auth});
});

app.listen(3000, (req, res) => {
    console.log("App rodando");
});