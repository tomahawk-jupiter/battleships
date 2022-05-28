# Battleships Game

A simple Battleships game. An Odin Project assignment for learning Test Driven Development (TDD) and factory functions.

## Contents

- [Overview](#overview)
- [Improvement Ideas](#improvement-ideas)
- [Environment Setup](#environment-setup)
- [Basic Jest Setup](#basic-jest-setup)
- [ESLint Setup](#eslint-setup)
- [Webpack Setup](#webpack-setup)

## Overview

There are some factory functions in `src/factories` for creating boards, players and ships.

The `manipDOM.js` exports some functions for appending DOM elements.

The `index.js` brings everything together into a functioning game.

## Improvement Ideas

The game is currently very basic and could be improved in various ways:

- There is only one set position for the computer player ships.
- The computer player just unintelligently selects squares at random.
- There is no reset button to start a new game.
- There could be a key to show what the square colors stand for.
- There could be a better defined placement phase of the game.
- The games styling could be better, perhaps images used.

## Environment Setup

**Note**: I was using the Atom text editor and Windows 7 with older version of Node when I first setup this project.

### Basic Jest Setup

Create a package.json: `$ npm init -y`

Install Jest: `$ npm install --save-dev jest`

Add to package.json: `"scripts": { "test": "jest" }`

Run tests: `$ npm test`

Add babel to use ES6 modules
Install the @babel/preset-env package: `npm i -D @babel/preset-env`

Create a `.babelrc` file in the project’s root with the following: `{ "presets": ["@babel/preset-env"] }`

### Eslint Setup

Install eslint: `$ npm install eslint --save-dev`

This version worked for me: `$ npm install eslint@7.32.0 --save-dev`

But I hand to do this: `"eslint": "^7.32.0"` then `npm install` because it changed back to ^8.2.0, I don't know why.

**Jest fix** keywords are triggering linter. Put this in the .eslintrc (inside the curly braces):

    {
      "extends": "airbnb-base",
      "globals": {
        "test": "readonly",
        "expect": "readonly",
        "document": "readonly" // for DOM selection
        },
      "rules": {
        "no-console": 'off', // allow console.log
        "linebreak-style": 0 // ignore LF / CRLF errors
        }
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

### Webpack Setup

1.  `$ npm install webpack webpack-cli --save-dev`
2.  Create `src/index.js`
3.  Create `dist/index.html` with: `<script src="main.js"></script>`
4.  Create `webpack.config.js` with contents:

        const path = require('path');

          module.exports = {
            entry: './src/index.js',
            output: {
            filename: 'main.js',
            path: path.resolve(\_\_dirname, 'dist'),
          },
        };

5.  Set `"mode": "development"` (or production or none) in `webpack.config.js`

6.  Add some scripts to package.json: `"build": "webpack"` and `"watch": "webpack --watch"`

    usage: `$ npm run build` and `$ npm run watch`

    OR use

    `$ npx webpack` and `$ npx webpack --watch`

7.  [Webpack Asset Management](https://webpack.js.org/guides/asset-management/)

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

[Page Top](#contents)
