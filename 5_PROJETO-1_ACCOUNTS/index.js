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
          "Transferir",
          "Depositar",
          "Sacar",
          "Extrato",
          "Sair",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];

      if (action === "Criar Conta") {
        createAccount();
      } else if (action === "Consultar Saldo") {
        getAccountBalance();
      } else if (action === "Transferir") {
        transfer();
      } else if (action === "Depositar") {
        deposit();
      } else if (action === "Sacar") {
        withdraw();
      } else if (action === "Extrato") {
        showExtract();
      } else if (action === "Sair") {
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
};

const bildAccount = () => {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite um nome para sua conta: ",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      if (!fs.existsSync("accounts")) {
        //veriica se o diretório existe
        fs.mkdirSync("accounts");
      }

      if (fs.existsSync(`accounts/${accountName}.json`)) {
        //verifica se conta já existe
        console.log(chalk.bgRed.black("Esta conta já existe! Escolha outra."));
        bildAccount();
        return;
      }

      //cria um .json com os dados da conta
      fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance": 0, "extract": []}',
        (err) => console.log(err)
      );

      console.log(chalk.green("Parabéns a sua conta foi criada!!!"));
      operation();
    })
    .catch((err) => console.log(err));
};

//add an amount to user account
const deposit = () => {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite o nome da conta: ",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      if (!checkAccount(accountName)) {
        return deposit();
      }

      inquirer
        .prompt([
          {
            name: "amount",
            message: "Quanto você quer depositar? R$",
          },
        ])
        .then((answer) => {
          const amount = answer["amount"];

          //add an amount
          addAmount(accountName, amount);
          operation();
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

//verify if account exists
const checkAccount = (accountName) => {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(chalk.bgRed.black("Esta conta não existe, digite novamente!"));
    return false;
  }
  return true;
};

const addAmount = (accountName, amount) => {
  const accountData = getAccount(accountName);

  if (!amount) {
    console.log(
      chalk.bgRed.black("Ocorreu um erro, valor não digitado. Tente novamente!")
    );
    return;
  }

  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);
  accountData.extract.push(parseFloat(amount));
  AddDateAndTime(accountData);

  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    (err) => console.log(err)
  );

  console.log(chalk.green(`Foi depositado R$${amount} na sua conta.`));
};

const getAccount = (accountName) => {
  //pega o arquivo json em formato de texto
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: "utf8",
    flag: "r",
  });

  return JSON.parse(accountJSON); //converte para um arquivo json
};

const getAccountBalance = () => {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Qual o nome da sua conta? ",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      //verife account exists
      if (!checkAccount(accountName)) {
        return getAccountBalance();
      }

      const accountData = getAccount(accountName);

      console.log(
        chalk.bgBlue.black(
          `Olá, o saldo da sua conta é de R$${accountData.balance.toFixed(2)}`
        )
      );
      operation();
    })
    .catch((err) => console.log(err));
};

const withdraw = () => {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "De qual conta você deseja sacar? ",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      if (!checkAccount(accountName)) {
        return withdraw();
      }

      inquirer
        .prompt([
          {
            name: "amount",
            message: "Quanto você deseja sacar? R$",
          },
        ])
        .then((answer) => {
          const amount = answer["amount"];

          removeAmount(accountName, amount);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

const removeAmount = (accountName, amount) => {
  const accountData = getAccount(accountName);

  if (!amount) {
    console.log(
      chalk.bgRed.black("Ocorreu um erro, valor não digitado. Tente novamente!")
    );
    return withdraw();
  }

  if (amount > accountData.balance) {
    console.log(chalk.bgRed.black("Valor indisponível para essa conta!!!"));
    return withdraw();
  }

  accountData.balance = parseFloat(accountData.balance) - parseFloat(amount); //atualiza o JSON (com os valores da conta)
  accountData.extract.push(parseFloat(amount) * -1);
  AddDateAndTime(accountData);

  fs.writeFileSync(
    `accounts/${accountName}.json`, //salva a atualização
    JSON.stringify(accountData), //converte uma string JS para um JSON
    (err) => console.log(err)
  );

  console.log(chalk.bgBlue.black(`Foi sacado R$${amount} da sua conta.`));
  operation();
};

const transfer = () => {
  inquirer
    .prompt([
      {
        name: "accountNameRem",
        message: "De qual conta deseja tranferir?",
      },
    ])
    .then((answer) => {
      const accountNameRem = answer["accountNameRem"];

      if (!checkAccount(accountNameRem)) {
        return transfer();
      }

      inquirer
        .prompt([
          {
            name: "accountNameAdd",
            message: "Para qual conta será feita a tranferência?",
          },
        ])
        .then((answer) => {
          const accountNameAdd = answer["accountNameAdd"];

          if (!checkAccount(accountNameAdd)) {
            return transfer();
          }

          inquirer
            .prompt([
              {
                name: "amount",
                message: "Qual o valor deseja transferir? R$",
              },
            ])
            .then((answer) => {
              const amount = answer["amount"];
              const accountDataRem = getAccount(accountNameRem);
              const accountDataAdd = getAccount(accountNameAdd);

              if (!amount) {
                console.log(
                  chalk.bgRed.black(
                    "Ocorreu um erro, valor não digitado. Tente novamente!"
                  )
                );
                return transfer();
              }

              if (amount > accountDataRem.balance) {
                console.log(
                  chalk.bgRed.black("Valor indisponível para essa conta!!!")
                );
                return transfer();
              }

              inquirer
                .prompt([
                  {
                    type: "confirm",
                    name: "option",
                    message: `Será tranferido R$${amount} para a conta ${accountNameAdd}?`,
                  },
                ])
                .then((answer) => {
                  const option = answer["option"];

                  if (!option) {
                    console.log(chalk.bgRed.black("Transferência negada!!!"));
                    return operation();
                  }

                  accountDataRem.balance =
                    parseFloat(accountDataRem.balance) - parseFloat(amount);
                  accountDataRem.extract.push(parseFloat(amount) * -1);
                  AddDateAndTime(accountDataRem);

                  accountDataAdd.balance =
                    parseFloat(accountDataAdd.balance) + parseFloat(amount);
                  accountDataAdd.extract.push(parseFloat(amount));
                  AddDateAndTime(accountDataAdd);

                  fs.writeFileSync(
                    `accounts/${accountNameRem}.json`,
                    JSON.stringify(accountDataRem),
                    (err) => console.log(err)
                  );

                  fs.writeFileSync(
                    `accounts/${accountNameAdd}.json`,
                    JSON.stringify(accountDataAdd),
                    (err) => console.log(err)
                  );

                  console.log(
                    chalk.bgBlue.black(
                      `Foi tranferido R$${amount} da conta ${accountNameRem} para conta ${accountNameAdd}.`
                    )
                  );
                  operation();
                })
                .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

const AddDateAndTime = (accountData) => {
  const date = new Date();
  const [day, month, year, time] = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
    date.toLocaleTimeString(),
  ];

  //Faz com que o lenght do array extract tenha apenas as 5 ultimas movimentações
  if (accountData.extract.length > 10) {
    accountData.extract.splice(0, 2);
  }

  return accountData.extract.push(
    `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year} - ${time}`.toString()
  );
};

const showExtract = () => {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "De qual conta deseja ver o extrato? ",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];
      const accountData = getAccount(accountName);
      const accountExtract = accountData.extract;

      //formata e mostra o extrato na tela
      let extract = "";
      accountExtract.forEach((item, i) => {
        let negativo = false;
        if (i % 2 == 0) {
          if (item < 0) {
            negativo = true;
          }
          extract =
            extract +
            `${!negativo ? "" : "-"}R$${Math.abs(item)
              .toFixed(2)
              .toString()
              .padEnd(20, ".")} `;
        } else {
          extract = extract + `${item}\n`;
        }
      });

      console.log(
        `${"EXTRATO".padStart(25)}\n${"Últimas 5 movimentações".padStart(
          33
        )}\n${"-".repeat(50)}`
      );
      console.log(extract);
      console.log("-".repeat(50));
      console.log(
        chalk.bgBlue.black(`Saldo: R$${accountData.balance.toFixed(2)}`)
      );
      console.log("-".repeat(50));

      operation();
    })
    .catch((err) => console.log(err));
};
