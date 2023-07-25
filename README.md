<h1 align="center">:file_cabinet: API de Gerenciamento de Usuários e Contatos</h1>

## :memo: Descrição
A API de Gerenciamento de Usuários e Contatos é uma poderosa ferramenta desenvolvida para simplificar e agilizar a criação, leitura, atualização e exclusão de informações de usuários e seus respectivos contatos. Essa API foi projetada para oferecer uma interface simples e segura, permitindo que aplicativos e sistemas possam facilmente interagir com os dados de usuários e suas listas de contatos.

## :books: Funcionalidades
* <b>Cadastro de Usuários </b>: Permite que aplicativos criem novos registros de usuários com informações essenciais, como nome completo, endereço de e-mail, telephone e outras informações relevantes.
* <b>Recuperação de Usuários </b>: Possibilita a leitura dos detalhes de um usuário específico apenas.
* <b>Atualização de Usuários </b>: Permite a atualização dos dados de um usuário existente, como nome, sobrenome, endereço, entre outros campos.
* <b>Exclusão de Usuários </b>: Caso necessário, a API possibilita a exclusão de usuários, garantindo a gestão adequada e a conformidade com a legislação de proteção de dados.
* <b>Cadastro de Contatos </b>: Além das funcionalidades de usuários, a API permite que contatos sejam associados a um usuário, com detalhes como nome, número de telefone, e-mail, entre outros.
* <b>Consulta de Contatos </b>: Os desenvolvedores podem recuperar os contatos associados a um usuário específico.
* <b>Atualização de Contatos </b>: É possível atualizar os registros de contatos vinculados aos usuários, garantindo a precisão das informações.
* <b>Exclusão de Contatos </b>: Se necessário, os contatos podem ser excluídos, mantendo o banco de dados organizado e livre de informações obsoletas.
* <b>Autenticação e Segurança </b>: A API de CRUD de Usuários e Contatos é projetada com segurança em mente. Ela oferece recursos robustos de autenticação, permitindo que apenas usuários autorizados acessem e manipulem os dados. Utiliza protocolos seguros, como HTTPS, para proteger as comunicações entre os clientes e o servidor.
## :wrench: Tecnologias utilizadas
* Typescript;
* NodeJs;
* Express;
* TypeORM;
* Zod;
* Cors;
* Pg;
* Dotenv;
* BcryptJs;
* Jsonwebtoken;
* express-async-errors;
* reflect-metadata;
* E seus types localizados no arquivo package.json.

## :rocket: Rodando o projeto
Para rodar o repositório é necessário clonar o mesmo, dar o seguinte comando ao iniciar o projeto para instalar todas as dependências necessárias:
```
npm install

```

Em seguida para rodar o projeto o seguinte comando:

```
npm run dev

```

## :soon: Endpoints:

A API tem um total de 9 endpoints, sendo em volta principalmente do usuário - podendo cadastrar seu perfil, fazer login e cadastrar seus contatos.

## Rotas que não precisam de autenticação

<h2 align ='center'> Criação de usuário </h2>

`POST /users - FORMATO DA REQUISIÇÃO`

```json
{
  "fullName": "Roger Magalhães",
	"email": "roger@mail.com",
	"password": "123456",
	"telephone": "031999999999"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /users - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"id": "882f1abe-0f4e-4da8-ad79-9a6cf2bf87c2",
	"fullName": "Roger Magalhães",
	"email": "roger@mail.com",
	"telephone": "031999999999",
	"createdAt": "2023-07-24"
}
```
<h2 align = "center"> Login </h2>

`POST /sessions - FORMATO DA REQUISIÇÃO`

```json
{
  "email": "roger@mail.com",
  "password": "123456"
}
```

Caso dê tudo certo, a resposta será assim:

`POST /login - FORMATO DA RESPOSTA - STATUS 201`

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJvZ2VyQG1haWwuY29tIiwiaWF0IjoxNjkwMjUxMDcxLCJleHAiOjE2OTAzMzc0NzEsInN1YiI6Ijg4MmYxYWJlLTBmNGUtNGRhOC1hZDc5LTlhNmNmMmJmODdjMiJ9.1Z-TC0ohIf3Xm_6D7ykilk_FPRdznzxVpc-I0oGxOeA",
	"user": {
		"id": "882f1abe-0f4e-4da8-ad79-9a6cf2bf87c2",
		"fullName": "Roger Magalhães",
		"email": "roger@mail.com",
		"telephone": "031999999999",
		"createdAt": "2023-07-24"
	}
}
```

## Rotas que necessitam de autorização

Rotas que necessitam de autorização deve ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

Após o usuário estar logado, ele deve conseguir cadastrar seus contatos.

<h2 align ='center'> Buscar Perfil do usuário logado (token) </h2>

`GET /users - FORMATO DA REQUISIÇÃO`

<blockquote>Na requisição apenas é necessário o TOKEN, a aplicação ficará responsável em buscar o id do usuário no token e retorna ele.</blockquote>

<br>

`GET /users - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "882f1abe-0f4e-4da8-ad79-9a6cf2bf87c2",
	"fullName": "Roger Magalhães",
	"email": "roger@mail.com",
	"telephone": "031999999999",
	"createdAt": "2023-07-24"
}
```

<h2 align ='center'> Atualizando os dados do perfil </h2>

<blockquote>Na requisição apenas é necessário o TOKEN e o corpo de requisição, a aplicação ficará responsável em buscar o id do usuário no token e retorna ele.</blockquote>

`PATCH /users - FORMATO DA REQUISIÇÃO`

```json
{
	"fullName": "Roger Magalhães",
  "email": "rogermferr@mail.com",
  "password": "12345678",
	"telephone": "031999999910"
}
```

Caso dê tudo certo, a resposta será assim:

`PATCH /users - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "882f1abe-0f4e-4da8-ad79-9a6cf2bf87c2",
	"fullName": "Roger Magalhães",
	"email": "roger@mail.com",
	"telephone": "031999999999",
	"createdAt": "2023-07-24"
}
```


<h2 align ='center'> Deletar Perfil do usuário logado (token) </h2>

`DELETE /users - FORMATO DA REQUISIÇÃO`

<blockquote>Na requisição apenas é necessário o TOKEN, a aplicação ficará responsável em buscar o id do usuário no token e retorna ele.</blockquote>

<br>

`DELETE /users - FORMATO DA RESPOSTA - STATUS 204`

Não possui corpo de resposta.

<h2 align ='center'> Criar contatos para o seu perfil </h2>

`POST /contacts - FORMATO DA REQUISIÇÃO`

```json
{
	"fullName": "Roger Magalhães",
	"telephone": "031999999999"
}
```

Caso dê tudo certo, a resposta será assim:

`PATCH /users - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"id": "882f1abe-0f4e-4da8-ad79-9a6cf2bf87c2",
	"fullName": "Roger Magalhães",
	"telephone": "031999999999",
	"createdAt": "2023-07-24"
}
```

<h2 align ='center'> Listar contatos do usuário logado </h2>

`GET /contacts - FORMATO DA REQUISIÇÃO`

<br>

`GET /contacts - FORMATO DA RESPOSTA - STATUS 200`

```json
[
	{
		"id": "b16bc121-1d84-42c2-b830-a0e9ccf2f430",
		"fullName": "Roger Magalhães",
		"telephone": "031999999910",
		"createdAt": "2023-07-24"
	}
]
```

<h2 align ='center'> Atualizar contatos do usuário logado </h2>

Nesta rota é necessário o envio do id do contato pela url de requisição.

`PATCH /contacts/id - FORMATO DA REQUISIÇÃO`

```json
[
	{
		"fullName": "Roger Magalhães Ferreira",
		"telephone": "031999999910",
	}
]
```

<br>

`PATCH /contacts/id - FORMATO DA RESPOSTA - STATUS 200`

```json
[
	{
		"id": "b16bc121-1d84-42c2-b830-a0e9ccf2f430",
		"fullName": "Roger Magalhães Ferreira",
		"telephone": "031999999910",
		"createdAt": "2023-07-24"
	}
]
```

<h2 align ='center'> Deletar contatos do usuário logado </h2>

Nesta rota é necessário o envio do id do contato pela url de requisição.

`DELETE /contacts/id - FORMATO DA REQUISIÇÃO`

<br>

`DELETE /contacts/id - FORMATO DA RESPOSTA - STATUS 204`

Não possui corpo de resposta.

