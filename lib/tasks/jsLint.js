const runCommand = require('../runCommand');
const getEslintConfig = require('../getEslintConfig');
const argv = require('minimist')(process.argv.slice(2));

function jsLint(done) {
	const fileList = (argv._ || []).slice(1);
	const eslintBin = require.resolve('eslint/bin/eslint');
	const eslintConfig = getEslintConfig();
	
	let args = [eslintBin, '-c', eslintConfig, '--ext', '.js,.jsx'];
	args = args.concat(fileList.length ? fileList : ['src']);
	
	if (argv.fix) {
		args.push('--fix');
	}
	
	runCommand('node', args, () => {
		done();
	});
}

module.exports = jsLint;