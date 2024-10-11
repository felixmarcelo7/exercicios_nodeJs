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
        getAccountBalance();
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
    fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', (err) => console.log(err));

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

    inquirer.prompt([
      {
        name: "amount",
        message: "Quanto você quer depositar? R$",
      },
    ]).then((answer) => {
      const amount = answer["amount"];

      //add an amount
      addAmount(accountName, amount);
      operation();

    }).catch(err => console.log(err));


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

const addAmount = (accountName, amount) => {
  const accountData = getAccount(accountName);

  if(!amount) {
    console.log(chalk.bgRed.black("Ocorreu um erro, valor não digitado. Tente novamente!"));
    return;
  }

  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);

  fs.writeFileSync(`accounts/${accountName}.json`,
    JSON.stringify(accountData),
    (err) => console.log(err)
  );

  console.log(chalk.green(`Foi depositado R$${amount} na sua conta.`))
}

const getAccount = (accountName) => { //pega o arquivo json em formato de texto
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: "utf8",
    flag: "r",
  })

  return JSON.parse(accountJSON); //converte para um arquivo json
}

const getAccountBalance = () => {
  inquirer.prompt([
    {
      name: "accountName",
      message: "Qual o nome da sua conta? ",
    },
  ])
  .then(answer => {
    const accountName = answer["accountName"];

    //verife account exists
    if(!checkAccount(accountName)) {
      return getAccountBalance();
    }

    const accountData = getAccount(accountName);

    console.log(chalk.bgBlue.black(
      `Olá, o saldo da sua conta é de R$${(accountData.balance).toFixed(2)}`)
    );
    operation();
  })
  .catch(err => console.log(err))

}