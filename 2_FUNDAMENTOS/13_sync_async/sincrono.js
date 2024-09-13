//No Node temos duas opções ao executar métodos
//conhecidas como sync(sincronos) e async(assincronos)
//sync: O código espera ser totalmente executado para prosseguir

const fs = require('fs');

console.log('Início');

fs.writeFileSync('arquivo1.txt', 'oi');

console.log('fim');// esse vai esperar a execução do anterior
