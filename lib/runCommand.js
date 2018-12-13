function runCommand(cmd, args, fn) {
	const copiedArgs = args || [];
	// eslint-disable-next-line global-require
	const runner = require('child_process')
		.spawn(cmd, copiedArgs, {stdio: 'inherit'});

	runner.on('close', (code) => {
		if (fn) {
			fn(code);
		}
	});
}

module.exports = runCommand;