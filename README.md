# Battleships Game

For learning Test Driven Development (TDD).

#### Basic Jest Setup

Create a package.json: `$ npm init -y`

Install Jest: `$ npm install --save-dev jest`

Add to package.json: `"scripts": { "test": "jest" }`

Run tests: `$ npm test`

Add babel to use ES6 modules
Install the @babel/preset-env package: `npm i -D @babel/preset-env`

Create a `.babelrc` file in the project’s root with the following: `{ "presets": ["@babel/preset-env"] }`
