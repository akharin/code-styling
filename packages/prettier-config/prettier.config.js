module.exports = {
	arrowParens: 'avoid',
	bracketSpacing: true,
	endOfLine: 'crlf',
	jsxBracketSameLine: false,
	htmlWhitespaceSensitivity: 'css',
	printWidth: 160,
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