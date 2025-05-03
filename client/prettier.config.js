/** @type {import("prettier").Config} */
module.exports = {
  semi: true,                     // Add semicolons
  singleQuote: true,             // Use single quotes
  printWidth: 100,               // Max line length
  tabWidth: 2,                   // 2 spaces per tab
  trailingComma: 'es5',          // Add trailing commas where valid in ES5 (objects, arrays, etc.)
  arrowParens: 'always',         // Always include parens in arrow functions
  bracketSpacing: true,          // Add spaces between brackets in object literals
  jsxSingleQuote: false,         // Use double quotes in JSX
  jsxBracketSameLine: false,     // Put the `>` of a multi-line JSX element at the end of the last line
  endOfLine: 'auto',             // Use system default EOL
};
