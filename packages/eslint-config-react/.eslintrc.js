module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier",
        "@code-styling/eslint-config"

    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint",
        "react",
        "prettier"
    ],
    "rules": {
        "react/jsx-tag-spacing" : ["error", {
			"closingSlash": "never",
			"beforeSelfClosing": "never",
			"afterOpening": "never",
			"beforeClosing": "never"
        }],
        "react/jsx-max-props-per-line": ["error", { "maximum": 1}]
    }
};
