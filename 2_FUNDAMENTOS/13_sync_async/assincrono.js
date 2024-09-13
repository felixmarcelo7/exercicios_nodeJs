//No Node temos duas opções ao executar métodos
//conhecidas como sync(sincronos) e async(assincronos)
//async: o código continua prossegindo e em um ponto futuro obtém a resposta
//da execução assíncrona

const fs = require('fs');

console.log('inicio');

fs.writeFile('arquivo2.txt', 'oi', function(err) {
    setTimeout(function() {
        console.log('Arquivo criado!');
    }, 2000);
});

console.log('Fim'); //vai ser executado em paralelo
