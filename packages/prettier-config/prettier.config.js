module.exports = {
	arrowParens: 'avoid',
	bracketSpacing: false,
	endOfLine: 'crlf',
	jsxBracketSameLine: false,
	htmlWhitespaceSensitivity: 'css',
	printWidth: 120,
	proseWrap: 'preserve',
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'none',
	useTabs: true,
	overrides: [
		{
			files: '*.json',
			options: {
				printWidth: 200
			}
		}
	]
};
