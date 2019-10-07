const needle = require('needle');

function imdb(args) {
    return new Promise((resolve, reject) => {
    	let id = args.id
    	if (!id.startsWith('tt'))
    		return reject('Not an imdb id')
    	if (id.includes(':'))
    		id = id.split(':')[0]
		needle.get('https://v3-cinemeta.strem.io/meta/' + args.type + '/' + id + '.json', (err, resp, body) => {
			if ((body || {}).meta) {
				resolve(body.meta)
			} else {
				reject(err || Error('Unknown error in cinemeta for request: ' + JSON.stringify(args)))
			}
		})
    });
}

module.exports = imdb;
