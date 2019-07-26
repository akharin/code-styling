module.exports = {
    arrowParens: "avoid",
    bracketSpacing: true,
    endOfLine: "lf",
    jsxBracketSameLine: false,
    htmlWhitespaceSensitivity: "css",
    printWidth: 160,
    proseWrap: "preserve",
    singleQuote: true,
    tabWidth: 2,
    trailingComma: "none",
    useTabs: false,
    overrides: [
        {
            files: "*.json",
            options: {
                printWidth: 200
            }
        }
    ]
};