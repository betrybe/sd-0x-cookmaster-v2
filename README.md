# Boas vindas ao projeto Cookmaster V2!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

---

## O que deverá ser desenvolvido

Você vai desenvolver seu app utilizando a arquitetura MSC!

Você já construiu o projeto cookmaster, uma aplicação de cadastro de receitas, onde era possível criar e visualizar receitas, seus ingredientes, e sua forma de preparo. Agora você vai implementar novas funcionalidades ao projeto anterior! Caso deseje, pode começar um novo projeto do zero.
Nesse novo projeto deverá ser possível fazer o cadastramento e login de usuário, onde apenas esse usúario poderá acessar, modificar e deletar as receitas que cadastrou.

---

## Desenvolvimento

Você vai desenvolver todas as camadas da aplicação (Models, Service e Controllers) a partir do seu código no projeto cookmaster.

Através dessa aplicação, será possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou `CRUD`, pros mais íntimos 😜).

Para realizar qualquer tipo de alteração no banco de dados (como cadastro, edição ou exclusão de receitas) será necessário autenticar-se. Além disso, os usuários devem poder ser clientes ou administradores. Os clientes apenas poderão disparar ações nas receitas que ele mesmo criou. Já um administrador pode disparar qualquer ação em qualquer receita.

A autenticação deverá ser feita via `JWT`.

O código para cadastro de usuários deve ser criado por você utilizando os conhecimentos adiquiridos nesse bloco.

Você deve utilizar o banco de dados `MongoDB` para gerenciar os dados.

Deverá ser possível adicionar imagem à uma receita, utilizando o upload de arquivos fornecido pelo `multer`.

⚠️ **Dica Importante** ⚠️:

- Não haverá front-end nesse projeto, portanto não se preocupe com a visualização, mas apenas com as funcionalidades e organização do código.

---

## Requisitos do projeto

### 1 - Todos os seus endpoints devem estar no padrão REST

- Use os verbos HTTP adequados para cada operação.

- Agrupe e padronize suas URL em cada recurso.

- Garanta que seus endpoints sempre retornem uma resposta, havendo sucesso nas operações ou não.

- Retorne os códigos de status corretos (recurso criado, erro de validação, autorização, etc).

### 2 - Crie um endpoint para o cadastro de usuários

- A rota deve ser (`/user`).

- Um usuário precisa ter os campos Email, Senha, Nome e Role.

- Todos os campos são obrigatórios, com exceção do Role.

- O campo Email deve ser único.

- Por padrão, as requisições pra esse endpoint devem adicionar um campo Role com o atributo _user_ ao usuário criado.

### 3 - Crie um endpoint para o login de usuários

- A rota deve ser (`/login`).

- A rota deve receber os campos Email e Senha e esses campos devem ser validados no banco de dados.

- Um token `JWT` deve ser gerado e retornado caso haja sucesso no login. No seu payload deve estar presente o id, email e role do usuário.

### 4 - Crie um endpoint para o cadastro de receitas

- A rota deve ser (`/recipes`).

- A receita só pode ser criada caso o usuário esteja logado e o token `JWT` validado.

- A receita deve ter os campos Nome, Ingredientes, Modo de preparo e Autor, que serão recebidos pela requisição.

- O campo dos ingredientes pode ser um campo de texto aberto.

- Deve existir também o campo userID, que terá o id relativo ao usuário logado. Lembre-se do campo `payload` do `JWT`.

### 5 - Crie um endpoint para a listagem de receitas

- A rota deve ser (`/recipes`).

- As receitas só podem ser acessadas caso o usuário esteja logado e o token `JWT` validado.

- Apenas as receitas pertencentes àquele usuário logado poderão ser listadas.

### 6 - Crie um endpoint para visualizar uma receita específica

- A rota deve ser (`/recipes/:id`).

- A receita só pode ser acessada caso o usuário esteja logado e o token `JWT` validado.

- A receita só pode ser retornada caso pertença ao usuário logado.

### 7 - Crie um endpoint para a edição de uma receita

- A rota deve ser (`/recipes/:id`).

- A receita só pode ser atualizada caso o usuário esteja logado e o token `JWT` validado.

- A receita só pode ser atualizada caso pertença ao usuário logado.

- O corpo da requisição deve ter os campos Nome, Ingredientes, Modo de preparo e Autor.

### 8 - Crie um endpoint para a exclusão de uma receita

- A rota deve ser (`/recipes/:id`).

- A receita só pode ser excluída caso o usuário esteja logado e o token `JWT` validado.

- A receita só pode ser excluída caso pertença ao usuário logado.


### 9 - Crie um endpoint para a adição de uma imagem a uma receita

- A rota deve ser (`/recipes/img/:id`).

- A receita só pode ser atualizada caso o usuário esteja logado e o token `JWT` validado.

- A receita só pode ser atualizada caso pertença ao usuário logado.

- O upload da imagem deverá ser feito utilizando o `Multer`.

### 10 - Permissões do usuário admin

- Por padrão, deve existir no banco de dados ao menos um usuário com a Role _admin_.

- Esse usuário tem o poder de criar, deletar, atualizar ou remover qualquer receita, independente de quem a cadastrou.

## Bônus

### 11 - Cadastramento de admin

- A rota deve ser (`/user/admin`).

- Só será possível adicionar um admin caso esta ação esteja sendo feita por outro admin, portanto, deve ser validado se há um admin logado.

- O corpo da requisição precisa ter os campos Email, Senha e Nome.

- Por padrão, as requisições pra esse endpoint devem adicionar a Role com o atributo _admin_ ao usuário criado.

---

## Instruções para entregar seu projeto:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  - `git clone git@github.com:tryber/sd-0x-blockxx-cookmaster-v2.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd sd-0x-blockxx-cookmaster-v2`

2. Instale as dependências
  - `npm install`

3. Crie uma branch a partir da branch `master`
  - Verifique que você está na branch `master`
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `master`
    - Exemplo: `git checkout master`
  - Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b joaozinho-cookmaster-v2`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  - Verifique que as mudanças ainda não estão no _stage_
    - Exemplo: `git status` (deve aparecer listado o arquivo alterado em vermelho)
  - Adicione o arquivo alterado ao _stage_ do Git
    - Exemplo:
      - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
      - `git status` (deve aparecer listado o arquivo adicionado em verde)
  - Faça o `commit` inicial
    - Exemplo:
      - `git commit -m 'Iniciando o projeto Cookmaster v2'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  - Usando o exemplo anterior: `git push -u origin joaozinho-cookmaster-v2`

6. Crie um novo `Pull Request` _(PR)_
  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-blockxx-cookmaster-v2/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-blockxx-cookmaster-v2/pulls) e confira que o seu _Pull Request_ está criado

---

### DURANTE O DESENVOLVIMENTO

- Faça `commits` das alterações que você fizer no código regularmente

- Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

- Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO

Para **"entregar"** seu projeto, siga os passos a seguir:

- Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-02`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### REVISANDO UM PULL REQUEST

⚠⚠⚠

À medida que você e os outros alunos forem entregando os projetos, vocês serão alertados **via Slack** para também fazer a revisão dos _Pull Requests_ dos seus colegas. Fiquem atentos às mensagens do _"Pull Reminders"_ no _Slack_!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.