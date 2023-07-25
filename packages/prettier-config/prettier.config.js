module.exports = {
	arrowParens: 'avoid',
	bracketSpacing: false,
	endOfLine: 'auto',
	jsxBracketSameLine: false,
	singleAttributePerLine: true,
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
