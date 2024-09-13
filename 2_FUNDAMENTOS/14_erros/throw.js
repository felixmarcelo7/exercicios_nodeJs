//temos duas formas principais para gerar ou evidenciar erros em Node.js: throw e try catch
//throw: uma forma de encerrar o programa, gerando um novo erro

const x = '10';

//checa se x é um número
if (!Number.isInteger(x)) {
    throw new Error("O valor de x não é um número inteiro");
};

console.log('Continuando o códiigo...');
