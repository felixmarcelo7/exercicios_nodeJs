//Para remover um arquivo com o fs utilizamos o método unlink
//precisamos passar o arquivo como prâmetro
//temos a possiibilidade de checar se houve algum erro, a partir da callback retornada

const fs = require('fs');

fs.unlink('arquivo.txt', (err) => {
    if(err) {
        console.log(err);
        return;
    }

    console.log('Arquivo removido!!!');
});