var version = require('./package.json').version;

const greet = () => {
	console.log(`greetings from ${version}`);
}
const bar = () => {
	console.log(`bar`);
}
const foo = () => {
	console.log('foo');
}

exports.foo = foo;
exports.bar = bar;
exports.greet = greet;
