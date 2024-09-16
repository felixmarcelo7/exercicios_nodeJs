const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([
    {
        name: "nome",
        message: "Qual o seu nome? "
    },
    {
        name: "idade",
        message: "Qual a sua idade? "
    }

]).then((answers) => {
    const {nome, idade} = answers;
    if(!nome || !idade) {
        throw new Error(chalk.bgRed("Nome e idade são obrigatórios!!"));
    } else if(isNaN(idade)) {
        throw new Error(chalk.bgRed("Insira uma valor váldo para idade!"));
    }
    console.log(chalk.bgYellow.black(`O nome do usuário é ${nome} e sua idade é ${idade}`));
}).catch(err => console.log(err));