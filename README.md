# react-redux-rtk-saga-materialui-typescript-starter

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

### Development

```shell
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Testing

```shell
yarn test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Build 

```shell
yarn build
```
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Code Quality

### ESLint and Prettier

Running the script `yarn format` will format the code style of all TypeScript files.

The script `yarn lint` will run linter in the project. 
If any best practices, standards, or code styles are not meet in code, it will display the actual error or warning.

Run `yarn lint:fix` command to fix automatically any error found (if the linter knows how to fix it😉) and format code. 

### Commit hooks

Enforce code conventions and prevent bad commits with Husky pre-commit hook.

To install and configure Husky, run: 
```shell
npx husky install
```

To automatically run linter on staged files, run below command to install pre commit hook. 
    
```shell
npx husky add .husky/pre-commit "yarn lint-staged"
```

To enforce conventional commit format on git messages, run below command to use commitlint. 
```shell
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```


## Release

[//]: # (TODO:  add readme for release via Standard Version)


## References

* [React documentation](https://reactjs.org/)
* [Redux Saga](https://redux-saga.js.org/)
* [Redux Style Guide](https://redux.js.org/style-guide/style-guide)
* [Write Action Types as domain/eventName - Redux Style Guide](https://redux.js.org/style-guide/style-guide#write-action-types-as-domaineventname)
* [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
* [MUI: The React component library you always wanted](https://mui.com/)
* [React Router](https://reactrouter.com/)
* [Redux First History](https://github.com/salvoravida/redux-first-history)
* [Redux Logger](https://github.com/LogRocket/redux-logger)
* [I18next](https://react.i18next.com/)
* [JSON Server](https://github.com/typicode/json-server)
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [Husky](https://typicode.github.io/husky/#/)
* [commitlint](https://commitlint.js.org/#/) - Lint commit messages
* [Standard Version](https://github.com/conventional-changelog/standard-version) - A utility for versioning using semver and CHANGELOG generation powered by Conventional Commits.

## Additional Links

* [React+TypeScript Cheatsheets](https://github.com/typescript-cheatsheets/react) - Cheatsheets for experienced React developers getting started with TypeScript
* [React Hook Form vs. Formik: A technical and performance comparison](https://blog.logrocket.com/react-hook-form-vs-formik-comparison/)
* [React Hook Form - form builder](https://react-hook-form.com/form-builder)
* [React Hook Form - typescript Support](https://react-hook-form.com/ts)
* [Redux Style Guide](https://redux.js.org/style-guide/style-guide#write-action-types-as-domaineventname)
* [MUI - theme switcher](https://mui.com/customization/dark-mode/)
* [Level up your CSS linting using Stylelint](https://blog.logrocket.com/using-stylelint-improve-lint-css-scss-sass/)