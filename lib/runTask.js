#!/usr/bin/env node
require('colorful').colorful();
const program = require('commander');
const version = require('../package').version;

program
	.version(version);
	//.command('lint [dirs]', 'lint javascript and typescript files in [dirs] (\'src\' by default)')
	///.option('-f, --fix', 'Fix errors')
	// .action((dir, cmd) => {
	// 	console.log(dir, cmd);
	// });

// program.on('--help', () => {
// 	console.log();
// 	console.log('Usage:'.to.bold.blue.color);
// 	console.log('  ', 'code-style lint [Array] [--fix]'.to.magenta.color, ' lint javascript and typescript files in directories (\'src\' by default)');
// 	console.log('  ', 'code-style js-lint [Array] [--fix]'.to.magenta.color, ' lint javascript files in directories (\'src\' by default)');
// 	console.log();
// });

program.parse(process.argv);

const task = program.args[0];

if (!task) {
	program.help();
} else {
	console.log('code-style', task);
	const gulp = require('gulp');
	require('./gulpfile');
	gulp.task(task)();
}