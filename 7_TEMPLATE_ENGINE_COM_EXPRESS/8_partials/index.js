//Conhecendo os partials
//Os partials são como mini templates, que precisam ser repetidos em diversas partes da nossa aplicação
//Precisamos realizar algumas modifficações na implementação do Handlebars
//Os oartials geralmente ficam em views/partials
//E utilizamos a sintaxe: {{> partial}} para chamá-lo no projeto

const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

//configurações para usar o partials
const hbs = exphbs.create({
  partialsDir: ["views/partials"],
});
app.engine("handlebars", hbs.engine);
///////
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
  const itens = ["a", "b", "c"];

  res.render("dashboard", { itens });
});

app.get("/post", (req, res) => {
  const post = {
    title: "Aprender Node.js",
    category: "JavaScript",
    body: "Este artigo vai te ajudar a aprender Node.js...",
    comments: 4,
  };

  res.render("blogpost", { post });
});

app.get("/blog", (req, res) => {
  const posts = [
    {
      title: "Aprender Node.js",
      category: "JavaScript",
      body: "Este artigo vai te ajudar a aprender Node.js...",
      comments: 4,
    },
    {
      title: "Aprender Java",
      category: "Java",
      body: "Este artigo vai te ajudar a aprender Java...",
      comments: 4,
    },
    {
      title: "Aprender HTML",
      category: "HTML",
      body: "Este artigo vai te ajudar a aprender HTML...",
      comments: 4,
    },
    {
      title: "Aprender CSS",
      category: "CSS",
      body: "Este artigo vai te ajudar a aprender CSS...",
      comments: 4,
    },
  ];

  res.render("blog", { posts });
});

app.get("/", (req, res) => {
  const user = {
    name: "Marcelo",
    surname: "Felix",
    age: "26",
  };

  const auth = true;
  const approved = true;

  res.render("home", { user, auth, approved });
});

app.listen(3000, (req, res) => {
  console.log("App rodando");
});
