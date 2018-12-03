const path = require('path');
const fs = require('fs-extra');

const cwd = process.cwd();
const availableNames = ['.eslintrc.js', '.eslintrc.json', '.eslintrc'];

function getEslintConfig() {
	for (const file of availableNames) {
		const filePath = path.join(cwd, file);
		if (fs.existsSync(filePath)) {
			return filePath;
		}
	}
	return path.join(__dirname, '../.eslintrc.js');
}

module.exports = getEslintConfig;