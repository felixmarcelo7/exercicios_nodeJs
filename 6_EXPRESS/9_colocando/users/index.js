//Podemos unir árias rotas em um módulo, isso vai deixar nosso código mas orgnizado
//Normalmente criamos uma pasta ou arquivoque contém estas rotas
//Que representam uma entidade em comum, como users
//Vmos utilizar um novo objeto chamado Router, e colocar as rotas nele
//depois precisamos exportá-lo e importar no arquivo principal

const express = require("express");
const router = express.Router();

const path = require("path");

const basePath = path.join(__dirname, "../template");


router.get("/add", (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
});

router.post("/save", (req, res) => {
    console.log(req.body)

    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome do usuário é ${name} e sua idade é ${age}`);

    res.sendFile(`${basePath}/userform.html`);
});

router.get("/:id", (req, res) => {
    const id = req.params.id;

    //leitura da tabela users, resgatar um usuário do banco
    console.log(`Estamos buscando pelo usuário: ${id}`);

    res.sendFile(`${basePath}/users.html`);
});

module.exports = router;