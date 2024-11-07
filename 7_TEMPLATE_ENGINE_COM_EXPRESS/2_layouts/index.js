//Criando lyouts
//podemos criar layouts para reapoveitar código entre páginas
//vamos criar uma passta chamana layouts em views
//e nela criamos o template que será repetido
//Colocamos uma tag especial {{{body}}}
//para que nesse local o escopo do site seja inserido
//em todas as novas views agora o layout é repetido

const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine('handlebars', exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(3000, (req, res) => {
    console.log("App rodando");
});