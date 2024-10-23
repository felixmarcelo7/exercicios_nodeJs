//O setup inicial do Express é simples, mas precisamos seguir alguns passos;
//importar o Express e invocá-lo;
//Definir uma porta base para a aplicação;
//Criar uma rota (URL que será acessada);
//Executar o método listen na porta especificada

const express =  require("express");
const app = express();
const port = 3000; //variavel ambiente

app.get("/", (req, res) => {
    res.send("Olá, Mundo!!");
});

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
});
