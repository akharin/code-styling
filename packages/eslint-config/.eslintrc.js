module.exports = {
	extends: ['eslint-config-airbnb', 'eslint:recommended', 'prettier'],
	plugins: ['prettier'],
	'env': {
		'browser': true,
		'node': true,
	},
	rules: {
		'arrow-parens': ['error', 'as-needed'],
		'comma-dangle': ['error', 'never'],
		'curly': 'error',
		'default-case': "off",
		'func-style': 'off',
		"indent": "off",
		"linebreak-style": [1, "windows"],
		'max-len': ["error", { 
			code: 160, 
			comments: 500, 
			ignoreUrls: true,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true
		}],
		'no-bitwise': 'off',
		'no-iterator': 'off',
		"no-plusplus": ["warn", { "allowForLoopAfterthoughts": true }],
		'no-prototype-builtins': 'off',
		'no-restricted-syntax': [
			'error',
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
			},
			{
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
			}
		],
		'no-tabs': 'off',
		'no-underscore-dangle': 'off',
		'nonblock-statement-body-position': 'off',
		'object-curly-spacing': ['error', 'always'],
		'prefer-promise-reject-errors': "off",
		'prettier/prettier': ['error'],
		'radix': [2, 'as-needed'],
		'space-before-function-paren': ['error', {
			anonymous: 'never',
			named: 'never',
			asyncArrow: 'always'
		}],
	}
};







