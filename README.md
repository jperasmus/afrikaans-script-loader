# afrikaans-script-loader
  > Totally useless but fun translator for JavaScript written in the Afrikaans language

  This package is a [webpack](https://github.com/webpack/webpack) loader that allows transpiling JavaScript files written in Afrikaans into standard JavaScript syntax.

## Current Translations

```json
{
  "break": "breuk",
  "case": "geval",
  "catch": "vang",
  "class": "klas",
  "const": "konst",
  "continue": "aanhou",
  "debugger": "foutvinder",
  "default": "verstek",
  "delete": "verwyder",
  "do": "doen",
  "else": "anders",
  "finally": "finaal",
  "for": "vir",
  "from": "vanaf",
  "function": "funksie",
  "if": "as",
  "import": "invoer",
  "in": "in",
  "instanceof": "voorbeeldvan",
  "interface": "koppelvlak",
  "let": "laat",
  "new": "nuwe",
  "return": "terug",
  "switch": "skakelaar",
  "this": "this",
  "throw": "gooi",
  "try": "probeer",
  "typeof": "typeof",
  "var": "ver",
  "void": "leemte",
  "while": "terwyl",
  "with": "met",
  "use strict": "streng gebruik",
  "yield": "produseer"
}
```

You are not boxed in to use all these Afrikaans words. Use the ones you like, it's just for fun.

## Installation

```bash
npm install afrikaans-script-loader --save-dev
```

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

  Within your webpack configuration object, you'll need to add the afrikaans-script-loader to the list of modules, like so:

  ```javascript
module: {
  loaders: [
    {
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'afrikaans-script'
    }
  ]
}
  ```
