//Podemos saber mais sobre os arquivos que temos acesso
//utilizamos o metodo stat de fs
//com ele temos informações de: tamanho, data de criação, se é arquivo ou diretório e etc

const fs = require('fs');

fs.stat('novoarquivo.txt', (err, stats) => {
    if(err) {
        console.log(err);
        return;
    }

    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isSymbolicLink());
    console.log(stats.ctime);
    console.log(stats.size);
});