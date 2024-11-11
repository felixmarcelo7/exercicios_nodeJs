//Utilizando o else
//Utilizando  no handlebars para exibição de outra  parte do layout, caso a condição seja alsa
//Isso nos dá mais flexibilidade ainda

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
    const approved = true;

    res.render("home", {user, auth, approved});
});

app.listen(3000, (req, res) => {
    console.log("App rodando");
});