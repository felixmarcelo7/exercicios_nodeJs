//try catch: uma forma de evidenciar algo que deu errado em um bloco
//de código e exibe a mensagem de erro

const x = 10;

try {
    x = 2
}catch(err) {
    console.log(`Erro: ${err}`)
}
