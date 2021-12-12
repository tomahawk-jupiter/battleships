# Battleships Game

For learning Test Driven Development (TDD).

## Project setup

### Basic Jest Setup

Create a package.json: `$ npm init -y`

Install Jest: `$ npm install --save-dev jest`

Add to package.json: `"scripts": { "test": "jest" }`

Run tests: `$ npm test`

Add babel to use ES6 modules
Install the @babel/preset-env package: `npm i -D @babel/preset-env`

Create a `.babelrc` file in the project’s root with the following: `{ "presets": ["@babel/preset-env"] }`

-----

### Quokka plugin

`Ctrl + K then Q` make current file a quokka file.

`Ctrl + K then S` stop quokka in current file.

-----

### Eslint Setup

Install eslint: `$ npm install eslint --save-dev`

This version worked for me: `$ npm install eslint@7.32.0 --save-dev`

But I hand to do this: `"eslint": "^7.32.0"` then `npm install` because it changed back to ^8.2.0, I don't know why.

**Jest fix** keywords are triggering linter. Put this in the .eslintrc (inside the curly braces):

    env: {
        jest: true
      }

**with webpack**

Install this: `npm install eslint-webpack-plugin --save-dev`

Then add the plugin to your webpack config. For example:

    const ESLintPlugin = require('eslint-webpack-plugin');

    module.exports = {
    // ...
    plugins: [new ESLintPlugin(options)],
    // ...
    };


-----

### Webpack Setup

1. `$ npm install webpack webpack-cli --save-dev`
4. Create `src/index.js`
5. Create `dist/index.html` with: `<script src="main.js"></script>`
6. Create `webpack.config.js` with contents:

        const path = require('path');
      	module.exports = {
          entry: './src/index.js',
          output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
          },
      	};
7. Set `"mode": "development"` (or production or none) in `webpack.config.js`

8. Add some scripts to package.json: `"build": "webpack"` and `"watch": "webpack --watch"`			

  usage: `$npm run build` and `$npm run watch`

  OR use

  `$npx webpack` and `$npx webpack --watch`

9. [Webpack Asset Management](https://webpack.js.org/guides/asset-management/)

	Get css working: `$ npm install --save-dev style-loader css-loader`

	Add to `webpack.config.js` this:

    	module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
     },

	Create `src/style.css`

	Import css file into index.js like so: `import './style.css';`
