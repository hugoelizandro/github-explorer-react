# GitHub Explorer React

Um web app para buscar usuários no Github.

## Executando localmente

Você deve ter o [Node.js](http://nodejs.org/) instalado.

``` bash
# instalar dependências
$ npm install

# start do servidor
$ npm start

# build para produção
$ npm run build
```

Seu app deve estar executando em [localhost:3000](http://localhost:3000/).

## Informações importantes

- Pesquisar um usuário por **username** e ver o resultado na mesma página (**ok**)
- Gostaria de fazer anotações de observação referente ao usuário pesquisado (**ok**)
- Gostaria de fazer paginação dos repositórios do usuário pesquisado (**ok**)
- Gostaria de quando um usuário não existir, que seja exibida uma página 404 (**ok**)

Adicionado na listagem de repositórios a busca pela última issue do repositório caso houver.
As anotações referentes aos usuário pesquisados estão sendo salvas no Local Storage.

O projeto está online em [githubexplorerappreact.herokuapp.com](https://githubexplorerappreact.herokuapp.com/)

Deploy automático sempre que é feito um push para o ramo master está ativado.

Bônus:

Projeto em Vue.js [github.com/hugoelizandro/github-explorer](https://github.com/hugoelizandro/github-explorer)  :)