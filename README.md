# ionic-login
##Cenario utilizado deste exemplo, existe um software de gestão utilizado e quero colocar uma app realizar alguma tarefa e quero utilizar o mesmo user e senha o usuário já utiliza neste software sendo assim enviar o usuário e senha e valida se parte as credenciais com os estão gravados neste bando de dados do software se sim valida a entrada do usuário no APP...no meu ponto de vista ao enviar isso para a API seria uma dado sensivel e assim gostaria de enviar o mesmo criptogravado.
<br><br>
Pensando em segurança estou mostrando como enviar um usuário e senha seguros para um api enviando os dados cryptografados com uma senha secreta

<p align="center">
  <img src="/img/Enviando senha para api.png" width="750" title="hover text">
</p>
o login com criptografia ao enviar o usuário e senha não envia o texto puro e sim um texto criptografado com aes com uma senha.
depois de logado pode ser usado o JWT (JSON Web Token) pra asegurar as outras requisições.
<br><br>
link do cripto-js sua documentação (nas pasta do ionicTeste tem arquivo leiame explicando detalhes fazer no ionic) 
https://www.npmjs.com/package/crypto-js
<br><br>
<p align="center">
  <img src="/img/mosta chegou o user e senha cryptografado no api.png" width="750" title="hover text">
</p>

na API ao chegar os dados de login os mesmos são descriptografados e autenticados, no exemplo retornei a hash que é gerada do user e senha e retornei tb os dados do usuário pra confirmar os dados.

<br><br>
*pode não ser uma medida muito segura por ficar a senha de criptografia no lado do cliente mais pode-se tentar ocultar este dado algum lugar seguro (salvo no banco de dados local usando ionic/storage) mais ainda acho seja mais seguro do que mandar o texto puro na hora do login .....depois de autenticado e logado ai já fica a cargo do JWT ficar validando as outras rotas vão ser consumidas.
