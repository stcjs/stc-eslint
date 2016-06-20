# stc-eslint

Eslint for stc

## Install

```sh
npm install stc-eslint
```

## How to use

```js
// stc.config.js
var eslint = require('stc-eslint');

stc.lint({
  eslint: {plugin: eslint, include: /\.js$/, options: {}}
})
```

## Default Options

```js
{
  "parser": "babel-eslint",
  "env": {
    "node": true,
    "browser": true
  },
  "rules": {
    "strict": [0],
    "eqeqeq": 2,
    "quotes": [2, "single", {"allowTemplateLiterals": true}],
    "no-underscore-dangle": 0,
    "eol-last": 0,
    "camelcase": 0,
    "no-loop-func": 0,
    "no-trailing-spaces": 0,
    "consistent-return": 0,
    "new-cap": 0,
    "no-shadow": 0,
    "semi": 2,
    "no-process-exit": 0,
    "no-empty": 0,
    "yoda": 0,
    "no-cond-assign": 0,
    "no-new-func": 0,
    "no-labels": 0
  }
}
```

You can use `options` to change it.