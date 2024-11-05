const express = require("express");
const app = express();
const port = 5000;

const projectsRouter = require("./projects");

app.use(express.static('public'))

app.use("/home", projectsRouter);

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`);
})

