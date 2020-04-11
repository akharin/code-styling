module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        // "prettier",
        "@code-styling/eslint-config"

    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "jsx-a11y",
        // "prettier"
    ],
    "rules": {
        "react/jsx-tag-spacing" : ["error", {
			"closingSlash": "never",
			"beforeSelfClosing": "never",
			"afterOpening": "never",
			"beforeClosing": "never"
        }],
        "react/jsx-max-props-per-line": ["error", { "maximum": 1}],
        "react/jsx-indent" : ["error", "tab",  {checkAttributes: true, indentLogicalExpressions: true}],
        "react/jsx-indent-props": ["error", "tab"],
        "react/jsx-filename-extension": ["error", { "extensions": [".jsx", ".tsx"] }]
    }
};
