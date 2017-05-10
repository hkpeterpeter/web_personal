A static website built using [React Bootstrap](https://react-bootstrap.github.io/)

## Development Environment
- Install Atom
- Install Atom plugins (e.g. linter-eslint and language-babel)
- Install node and yarn (or npm)

## Project Setup
```sh
yarn
yarn add -dev serve
```
## Development
```sh
yarn start
```
## Deployment
```
yarn run build
serve -s build
```
Deploy the materials in the `build` folder to a local/remote webserver
