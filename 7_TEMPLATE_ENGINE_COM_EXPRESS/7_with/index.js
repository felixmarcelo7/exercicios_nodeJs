//Utilizando With
//Ou seja, podemos acessar as propriedades sem nos referenciarmos
//sempre ao objeto antes
//A sintaxe é: {{#with objeto}}...{{/with}}
//Desta maneira nosso código fica ainda mais simples

const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine('handlebars', exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
    const itens = ["a", "b", "c"];

    res.render("dashboard", {itens});
});

app.get("/post", (req, res) => {

    const post = {
        title: "Aprender Node.js",
        category: "JavaScript",
        body: "Este artigo vai te ajudar a aprender Node.js...",
        comments: 4,
    }

    res.render("blogpost", {post});
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