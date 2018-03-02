A static website built using [React Bootstrap](https://react-bootstrap.github.io/)

## Getting started
Install a static web server `serve` and install project packages
```sh
yarn global add serve       # install a static web server globally
yarn                        # install Dependencies
yarn start                  # Hot loading is enabled. Keep developing, browser will be updated automatically
yarn run build              # production
serve -s build              # test the production. Deploy the `build` folder to a webserver
yarn run deploy             # deploy to the destination ("homepage" in package.json)
```

## Project directory
```
README.md
.eslintrc             # Config file for eslint (Styling JavaScript)
.gitignore
package.json
yarn.lock

[directories]
|- src
  |- data             # static data
  *.js                # js files written in React
  *.css               # stylesheet files           
|- public             # development build
|- dist               # production build
```

## Development stack
Dependencies
- [`react`](https://facebook.github.io/react/) JavaScript library to build user interface
  - [`react-dom`](https://facebook.github.io/react/docs/react-dom.html) Virtual DOM
  - [`prop-types`](https://facebook.github.io/react/docs/typechecking-with-proptypes.html) Type checking for React
- [`react-bootstrap`](http://react-bootstrap.github.io/) Bootstrap 3 React bindings

devDependencies
- `eslint` related:
  - eslint, eslint-config-airbnb,  eslint-plugin-import, eslint-plugin-jsx-a11y, eslint-plugin-react
- `react-scripts` React application development script

Globally installed tools

- `node`
- `npm` and/or `yarn`
- `git`
- [`Atom`](https://atom.io/) editor for web development
  - `language-babel` language syntax highlighting for babel
  - `linter-eslint` eslint integration with Atom
