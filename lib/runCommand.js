function runCommand(cmd, args, fn) {
	args = args || [];
	const runner = require('child_process')
		.spawn(cmd, args, {stdio: 'inherit',});
	
	runner.on('close', code => {
		if (fn) {
			fn(code);
		}
	});
}

module.exports = runCommand;