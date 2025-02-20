const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

//pega o body em .json
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

//referencia a pasta public para renderizar os estilos
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});

//faz o poste dos dados do corpo da requisição
app.post("/books/insertbook", (req, res) => {
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  const sql = `INSERT INTO books (title, pageqty) VALUES ("${title}","${pageqty}")`;

  //conecta a query e verifica erro
  conn.query(sql, function (err) {
    if (err) {
      console.log(err);
      return;
    }
    res.redirect("/");
  });
});

//recupera os dados do banco
app.get("/books", (req, res) => {
  const sql = "SELECT * FROM books";

  conn.query(sql, function (err, data) {
    if (err) {
      console.log(err);
      return;
    }

    const books = data;

    console.log(books);

    res.render("books", { books });
  });
});

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodemysql2",
});

conn.connect(function (err) {
  if (err) {
    console.log(err);
  }

  console.log("Conectou ao MySQL!");

  app.listen(3000);
});
