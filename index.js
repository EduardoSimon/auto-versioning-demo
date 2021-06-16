var version = require('./package.json').version;

const greet = () => {
	console.log(`greetings from ${version}`);
}

export { greet };