var tnef = require('../dist/commands/parse')

// TODO : Make this a real test suite!!!
tnef.parse('../testFiles/attachments.dat', function (err, content) {
	if (err) {
		console.error(err)
	} else {
		console.log(content)
	}
})