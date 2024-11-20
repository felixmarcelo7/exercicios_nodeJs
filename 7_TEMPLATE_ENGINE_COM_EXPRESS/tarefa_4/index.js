const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

const products = [
  {
    id: 1,
    title: "Livro",
    price: 20.99,
  },
  {
    id: 2,
    title: "Caderno",
    price: 15.99,
  },
  {
    id: 3,
    title: "Mochila",
    price: 200.99,
  },
];

app.get("/product/:id", (req, res) => {
  const product = products[parseInt(req.params.id) - 1];

  res.render("product", { product });
});

app.post("/", (req, res) => {
  req.body.id = products.length + 1;
  products.push(req.body);

  res.render("home", { products });
});

app.get("/", (req, res) => {
  res.render("home", { products });
});

app.listen(3000, () => {
  console.log("App rodadno");
});
