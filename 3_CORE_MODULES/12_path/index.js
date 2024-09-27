//Com o path conseguimos extrair diversas informações sobre caminhos e arquivos
//algumas informações possíveis são: nome do diretório, nome do arquivo, extenção do arqivo e etc

const path = require("path");

const customPath = "/relatorios/marcelo/relatorio01.pdf";

console.log(path.dirname(customPath));
console.log(path.basename(customPath));
console.log(path.extname(customPath));
