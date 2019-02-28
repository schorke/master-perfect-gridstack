module.exports = {
  globals: {
    server: true,
  },
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true
  },
  rules: {
    "indent": ["error", 2, { "SwitchCase": 1, "VariableDeclarator": 2 }],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "comma-dangle": ["error", "never"],
    "no-trailing-spaces": ["error", { "ignoreComments": true }],
    "no-cond-assign": ["error", "always"],
    "space-before-blocks": ["error", "always"],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "prefer-const": ["error", { "destructuring": "any", "ignoreReadBeforeAssign": false }],
    "no-var": ["error"],
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "object-shorthand": ["error", "always"],
    "prefer-template": ["error"],
    "template-curly-spacing": ["error", "never"],
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "no-multiple-empty-lines": ["error"]
  }
};
