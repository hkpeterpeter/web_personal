A static website built using [React Bootstrap](https://react-bootstrap.github.io/)

## Development Environment
- Install Atom
- Install Atom plugins (e.g. linter-eslint and language-babel)
- Install node and yarn (or npm)

## Project Setup
Install a static web server `serve` and install project packages
```sh
yarn global add serve
yarn
```

## Development
```sh
yarn start
```
Hot loading is enabled. Keep developing and the web browser will be updated
automatically.

## Deployment
```
yarn run build
serve -s build
```
Deploy the materials in the `build` folder to a local/remote webserver
