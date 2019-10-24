# Desafio Mobile Delfosim
> Apresentando o projeto criado, estrutura, bibliotecas usadas, falhas a serem resolvidas e erros pertinentes a serem tratados

![DELFOSIM Logo](https://raw.githubusercontent.com/eliveltonsf/mobile-test-01/master/images/delfos_Intelligent_maintenance.png "DELFOSIM Logo")

## Como foi criado o Projeto

Foi usado o Expo-Cli (<i> Expo init "nome do projeto"</i>) para a execução do projeto, repassando o template basico do Expo e as demais dependencias do projeto.

 - [Expo](https://github.com/expo/expo)
 - [Expo-cli](https://github.com/expo/expo-cli)

> como executar o projeto no Expo

Executar o comando <i> yarn start </i> dentro da pasta do projeto, automaticamente iniciara no navegador a tela de execução e debug do projeto expo com diversas configurações e um QR-Code de execução do projeto em despositivo mobile fisico

 **Emuladores**

- Ao abrir o emulador, na tela do projeto expo executar a opção <i>Run on Android device/emulador</i>
  
  Instalando o Client da expo no emulador e executando o projeto no mesmo

**Dispositivo físico**

- Instalar o applicativo do Expo diretamente da Appstore ou Playstore</i>
  
  Na tela do projeto expo terá um QR-Code, a ser lido pelo aplicativo no disposito, assim executando o projeto

## Descrição

O app criado tem as seguintes telas: Login e Dashboard, a tela de Login não estar autenticando usuario, contendo apenas a transição da tela para Dashboard que em sua composição foi criada como pagina principal, contendo menu e botão para adição do grafico desejado.

![Projeto Desafio](https://i.pinimg.com/originals/88/8a/42/888a42bec70c7cbd79d56ffe030f6b7f.png)

> Para a navegação e o menu foi usado as seguinte dependências

- [Navigation](https://reactnavigation.org/en/)
- [React-Native-Elements](https://react-native-elements.github.io/react-native-elements/)
- [Native-base](https://nativebase.io)

## Desenvolvendo a Dashboard

> Tela responsavel pela inclussão, edição e exclusão dos graficos

Ao entrar no aplicativo e apertar o botão "+", abrirá um modal no top da tela para ser inserido o valor como o exemplo que input sugere:
<i>Ex: 10;20;30;40;50... </i>

![Projeto Desafio](https://i.pinimg.com/originals/9a/9d/0d/9a9d0d12841d66e10c328662a8042025.png)

> Funcionamento da tela

O modal aparece na tela para inserir diversos graficos, porem para retornar a tela de menu para analisar e verificar os graficos você precisa fechar o modal.

> Para as ações do usuário e tratação dos dados foi usado Redux

- [redux](https://github.com/reduxjs/redux)
- [react-redux](https://github.com/reduxjs/react-redux)

## O que faltou desenvolver

- Menu popup dos gráficos
- Editar e Excluir o gráfico

## Erros a ser tratado

- Modal deveria fechar a cada adicionar
- Tipo dos dados a ser inserido no input
- Botão "+" deveria estar sobre tela toda, porem estar em uma View oculpando um flex da tela no rodape.

## Desafio

### Tive dificuldade em criar as telas, e pensar em todo processo?
  
- Não, pensar em como faria as telas e criá-las foi empolgante!

- Entender o projeto e buscar a formar de desenvolver tudo que precisaria funcionar, foi bem desafiador.

### Por que não terminei o projeto:

- O desafio é muito bom, me fez apreender bastente coisa sobre react native e ate mesmo javascript, principalmente entender bastante como funciona o Redux e aplicação dele no projeto.

- Como Redux é algo novo, fiz a Action de adicionar os dados, tentando segui toda pureza que o redux defente, tratando os dados apenas onde devem ser tratados, como não conseguir implementar o menu das ações de editar e excluir não dei continuidade as Actions restantes pois devido ao curto prazo que tenho para a entrega do TCC, vou precisar focar no projeto do mesmo.

## Agradecimento

Agradeço desde de já pela oportunidade de tentar quebrar a cabeça com esse desafio, foi ótimo superar várias dificuldade e desafios próprios, sei que não concluir o desafio, porem a Delfosim não só me lançou um desafio como me deu a oportunidade de crescer e decidir com toda certeza o que realmente quero seguir como carreira, o mundo mobile, obrigado e peço total sinceridade e rigorosidade no que foi feito do desafio.