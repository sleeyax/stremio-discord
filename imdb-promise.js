const imdbApi = require('imdb');

function imdb(tt) {
    return new Promise((resolve, reject) => {
        imdbApi(tt, function(err, data) {
            if(err) reject(err);
            if (!data) resolve(null);
            resolve(data);
        });
    });
}

module.exports = imdb;
