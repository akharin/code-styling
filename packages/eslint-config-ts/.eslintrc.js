module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		// "prettier/@typescript-eslint",
		// "plugin:prettier/recommended",
		'@code-styling/eslint-config'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: [
		'@typescript-eslint'
		// "prettier"
	],
	rules: {
		'@typescript-eslint/adjacent-overload-signatures': 'error',
		'@typescript-eslint/array-type': ['error', { 'default': 'array-simple' }],
		'@typescript-eslint/class-name-casing': 'error',
		'@typescript-eslint/consistent-type-assertions': 'error',
		'@typescript-eslint/consistent-type-definitions': 'error',
		'@typescript-eslint/explicit-function-return-type': 'warn',
		'@typescript-eslint/explicit-member-accessibility': [
			'error',
			{ 'accessibility': 'no-public' }
		],
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/interface-name-prefix': [
			'warn',
			{
				'prefixWithI': 'always'
			}
		],
		'@typescript-eslint/member-delimiter-style': [
			'error',
			{
				'multiline': {
					'delimiter': 'semi',
					'requireLast': true
				},
				'singleline': {
					'delimiter': 'comma',
					'requireLast': false
				}
			}
		],
		'@typescript-eslint/member-ordering': 'error',
		'react/sort-comp': 'off',
		'@typescript-eslint/no-array-constructor': 'error',
		'@typescript-eslint/no-empty-function': 'error',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/no-inferrable-types': 'warn',
		'@typescript-eslint/no-misused-new': 'error',
		'@typescript-eslint/no-namespace': 'error',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-parameter-properties': 'off',
		'@typescript-eslint/no-this-alias': 'error',
		'@typescript-eslint/no-var-requires': 'error',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error', { 'functions': false }],
		'@typescript-eslint/prefer-for-of': 'error',
		'@typescript-eslint/prefer-function-type': 'error',
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'@typescript-eslint/quotes': 'off',
		'@typescript-eslint/semi': ['error', 'always'],
		'@typescript-eslint/triple-slash-reference': 'error',
		'@typescript-eslint/type-annotation-spacing': 'error',
		'@typescript-eslint/unified-signatures': 'error',
		'camelcase': 'off',
		'no-undef': 'off'
	}
};
