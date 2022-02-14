# Configurando o inicio de um projeto com:
- Typescript
- Eslint
- Prettier
- editorConfig
- ts-node-dev

####Usaremos o `Yarn` como gerenciador de pacotes

## editorConfig
É uma extensão que gera um arquivo que irá configurar a maioria das IDE's ou editores de texto arrumando a identação, fim de linhas (lf ou crlf), tirando espaços desnecessarios no final de linha e/ou adicionando quebra de linha na ultima linha

Atualmente utilizamos assim no backend da empresa

```editorConfig
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

```

## Prettier
Prettier serve para formatar o código de forma mais agradável, ou seja, sempre que você salvar o arquivo ele será formatado.

Instalando o Prettier
`yarn add -D prettier eslint-plugin-prettier eslint-config-prettier`

Iremos criar um arquivo de configuração para o Prettier

### .prettierrc.json
```json
{
  "singleQuote": true,
  "trailingComma": "all"
}
```

## Typescript
Typescript é um superset do javascript que sugere tipos ao javascript de maneira opcional

Adicionando o pacote
`yarn add -D typescript`

Este comando instala o typescript e gera o tsconfig.json
`yarn tsc --init`

Depois de instalado, o tsconfig.json será gerado com as configurações padrões normalmente alteramos algumas configurações para:

```JSON
  {
    "compilerOpttions": {
      "target": "es2021", //Versão do ECMAScript
      "module": "commonjs", // Modo de compilação
      "outDir": "./dist", //pasta onde os arquivos serão gerados
    }
  }
```

## Eslint
Eslint é um gerenciador de erros do javascript que sugere/aplica correções de forma automática

Adicionando o pacote
`yarn add -D eslint`

Instalando o eslint
`yarn eslint --init`

Irá aparecer algumas perguntas para responder
```
> How would you like to use ESLint?
To check syntax, find problems, and enforce code style
> What type of modules does your project use?
JavaScript modules (import/export)
> Which framework does your project use?
None of these
> Does your project use TypeScript?
Yes
> Where does your code run?
❌ Browser
✅ Node
> How would you like to define a style for your project?
Use a popular style guide
> Which style guide do you want to follow?
Airbnb: https://github.com/airbnb/javascript
> What format do you want your config file to be in?
JSON
```
Ele irá retornar uma lista de pacotes que você precisa instalar para o eslint funcionar

Que no meu caso foi:

`@typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint@^7.32.0 || ^8.2.0 eslint-plugin-import@^2.25.2 @typescript-eslint/parser@latest`

E irá fazer uma ultima pergunta

>**Would you like to install them now with npm?**
>No

Da lista anterior iremos remover apenas um pacote que é o `eslint@^7.32.0 || ^8.2.0` (pois já está instalado) ficando somente:

`@typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.25.2 @typescript-eslint/parser@latest`

Vai ser gerado um arquivo com nome de .eslintrc.json, com as configurações padrões

iremos tambem adicionar o eslint-import-resolver-typescript para que o eslint consiga resolver os imports do typescript

`yarn add -D eslint-import-resolver-typescript`

No arquivo eslintrc.json alteramos algumas configurações para:
```json
{
  "env": {
    "es2021": true, //Versão do ECMAScript
    "node": true // Para o eslint reconhecer o node
  },
  "extends": [
    "airbnb-base", // Baseado no padrão do airbnb
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {  // Configurações do parser
    "ecmaVersion": 2021, //Versão do ECMAScript
    "sourceType": "module" // Modo de compilação
  },
  "plugins": [
    "@typescript-eslint", // Para o eslint reconhecer o typescript
    "prettier" // Para o eslint reconhecer o prettier
  ],
  "rules": {
    "import/prefer-default-export": "off", // Desativa a necessidade do uso de default export
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never"
      }
    ],
    "prettier/prettier": "error" // Para o eslint reconhecer os erros do prettier
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
}
```
## ts-node-dev
Serve apenas para atualizar o servidor sem ficar derrubando e levantando o tempo todo

Instalação
`yarn add -D ts-node-dev`

No arquivo package.json adicionamos o script para rodar o ts-node-dev
```json
  "scripts": {
    "dev": "ts-node-dev --exit-child --respawn --ignore-watch node_modules --transpile-only src/server.ts"
  },
```
