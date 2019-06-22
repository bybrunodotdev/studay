[![CircleCI](https://circleci.com/gh/r-park/soundcloud-redux.svg?style=shield&circle-token=f1dddd8dfa05f08655f30b7d7451d23360f63652)](https://circleci.com/gh/r-park/soundcloud-redux)


# Studay - Plataforma de ensino Open Source

Encontre conteúdos gratuitos centralizados em um único lugar. [Saiba mais](https://medium.com/@brunoandrade.me/construindo-uma-plataforma-de-ensino-open-source-para-a-comunidade-de-tecnologia-d6fb11b280ec).


Stack
-----

- React (Create-React-App)
- Styled-components
- Redux
- Prop-types
- React-Redux
- Reduxsauce
- React-Router
- Connected-react-router
- Redux-Saga
- Seamless-immutable
- Firebase
- Redux-saga-firebase

Começando
-----------

```shell
$ git clone git@github.com:brdeveloper/studay.git
$ cd studay
$ npm install
$ npm start
```

### Crie um arquivo .env na raiz do projeto e conecte a sua aplicação criada no firebase
|Configurações .env|
|---|
|REACT_APP_API_KEY|
|REACT_APP_AUTH_DOMAIN|
|REACT_APP_DATABASE_URL|
|REACT_APP_PROJECT_ID|
|REACT_APP_STORAGE_BUCKET|
|REACT_APP_MESSAGING_SENDER_ID|
|REACT_APP_APP_ID|


Descrição dos comandos
------------

|Comando|Descrição|
|---|---|
|npm start|Inicia o modo de desenvolvimento @ **localhost:3000**|
|npm run build|Contrui a aplicação para produção na pasta **./build**|
