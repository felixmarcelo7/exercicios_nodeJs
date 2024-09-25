//Para renomear um arquivo com o fs utilizamos o método rename
//precisamos passar o arquivo como parâmetro
//e também o novo nome!
//neste método também podemos verificar algum eventual erro, pela callback
//que pode ser ativdo quando o arquivo alvo não existe

const fs = require("fs");

const arqAntigo = "arquivo.txt";
const arqNovo = "novo.txt";

fs.rename(arqAntigo, arqNovo, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`O arquivo ${arqAntigo} foi renomeado pra ${arqNovo}!`);
});
