ikariambot
==========

//script criado usando phantonjs.

objetivo do programa é coletar dados do ikariam, é possível também concatenar o uso do bot com os serviços do TOR.

exemplo de comando 

se você usa o TOR BROWSER poderá utilizar a mesma porta de saída configurada para o TOR no caso do exemplo.
assim apenas abrindo navegador tor e executando o comando exemplo abaixo.
//comando para usar rede TOR
//phantomjs --proxy=127.0.0.1:9150 --proxy-type=socks5 navegandov12.js

no cabeçalho você poderá adicionar ids das ilhas que deseja fazer pesquisa. exemplo.
var a = ["290"];
var a = ["5069", "290", "510","2563"];

o bot vai navegar entre as páginas das ilhas configuradas, com login e senha que pode ser editada em:
logname.value = "yourusername";
senha.value = "yourpassword";

dentro das páginas será coletado o conteúdo do arquivo JSON interno da página, com os dados das ilhas.

Esse não é o método mais eficiente, mas é percursor para criação de outros projetos como http://ikamaster.com
com descrições de desenvolvedor em http://desenvolvedor.ikamaster.com
