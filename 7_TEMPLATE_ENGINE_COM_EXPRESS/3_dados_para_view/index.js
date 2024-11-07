//Passando dados para view
//Vamos passar os dados por meio do método render
//Enviamos um objeto por meio de chaves e valores
//E isso nos possibilita acessar estes dados no template
//Vamos utilizar asintaxe de {{dados}}
//E o dado será impresso!

const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine('handlebars', exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    const user = {
        name: "Marcelo",
        surname: "Felix",
        age: "26",
    }

    res.render("home", {user});
});

app.listen(3000, (req, res) => {
    console.log("App rodando");
});