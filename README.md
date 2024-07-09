# my-pokemon-tcg

Aplicação desenvolvida em Angular utilizando a Ignite UI CLI versão 13.0.2.
Angular version: 17.0.0

Este projeto utiliza uma API Web em memória para demonstrações e testes, que emula operações CRUD em uma API REST.

A ideia desse projeto e construir um card game inspirado no TGC Live.
O objetivo consiste basicamente em consumir a API `https://api.pokemontcg.io` para obter as informações necessárias para se montar os decks de batalha.

Atualmente estes deks estão sendo armazenados em uma 'API em memória', que emula operações CRUD em uma API REST, mas em breve estes recursos serão armazenados em uma 'API FAke'.

## Demo

https://github.com/RodrigoVellozo/my-pokemon-tcg/assets/13935125/b64a11e1-cb82-45ca-acf5-6a129362f559

#### Libs:
- [InMemoryDbService](https://www.npmjs.com/package/angular-in-memory-web-api "npm")
- [Ignite UI](https://www.npmjs.com/package/igniteui-angular "npm")
- [json-server](https://www.npmjs.com/package/json-server "npm")
- [concurrently](https://www.npmjs.com/package/concurrently "npm")
- [ngrx](https://ngrx.io/ "ngrx")

### Instalação e Execução

1. Faça um clone desse repositório: `https://github.com/RodrigoVellozo/my-pokemon-tcg.git`;
2. Execute o comando `npm install` para instalar as dependências;
3. Execute um dos seguintes comandos para iniciar a aplicação (ou um ou outro).
    - ig start
    - npm start

# Lista de Melhorias (TODO)

- [x] Scroll infinito;
- [x] Utilizar o json-server (fake-api) para API de deck
- [x] Implementar componente de loading;
- [x] Implementar o NGRX para gerenciar o estado global da aplicação
- [ ] refatoração de componentes
- [ ] Responsividade do layout

...entre outras coisas que forem aparecendo. :grin:
