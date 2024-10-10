//modulos externos
import chalk from "chalk";
import inquirer from "inquirer";

//modulos internos
import fs from "fs";

operation();

function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que você deseja fazer? ",
        choices: [
          "Criar Conta",
          "Consultar Saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];

      if(action === "Criar Conta") {
        createAccount();
      } else if(action === "Consultar Saldo") {
        
      } else if(action === "Depositar") {
        deposit();
      } else if(action === "Sacar") {

      } else if(action == "Sair") {
        console.log(chalk.bgBlue.black("Obrigado por usar o Account!"));
        process.exit(); //para finalizar o progrma
      }
    })
    .catch((err) => console.log(err));
}

//create account
const createAccount = () => {
  console.log(chalk.bgGreen.black("Parabéns por escolher nosso Banco!!!"));
  console.log(chalk.green("Defina as opções sua conta a seguir: "));

  bildAccount();
}

const bildAccount = () => {
  inquirer.prompt([
    {
      name: "accountName",
      message: "Digite um nome para sua conta: ",
    },
  ]).then((answer) => {
    const accountName = answer["accountName"];

    if(!fs.existsSync('accounts')) {//veriica se o diretório existe
      fs.mkdirSync('accounts');
    }

    if(fs.existsSync(`accounts/${accountName}.json`)) {//verifica se conta já existe
      console.log(chalk.bgRed.black("Esta conta já existe! Escolha outra."));
      bildAccount();
      return;
    }

    //cria um .json com os dados da conta
    fs.writeFileSync(`accounts/${accountName}.json`, '{"balence": 0}', (err) => console.log(err));

    console.log(chalk.green("Parabéns a sua conta foi criada!!!"));
    operation();
    
  }).catch((err) => console.log(err));
}

//add an amount to user account
const deposit = () => {
  inquirer.prompt([
    {
      name: "accountName",
      message: "Digite o nome da conta: ",
    },
  ]).then((answer) => {
    const accountName = answer["accountName"];
    
    if(!checkAccount(accountName)) {
      return deposit();
    }


  }).catch(err => console.log(err));
}

//verify if account exists
const checkAccount = (accountName) => {
  if(!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.black("Esta conta não existe, digite novamente!"));
    return false;
  }
  return true;
}