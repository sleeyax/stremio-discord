const manifest = require('./manifest');
const {addonBuilder} = require('stremio-addon-sdk');
const imdb = require('./imdb-promise');
const updatePresence = require('./rpc');
const parseMovieDuration = require('./movie-duration');

const addon = new addonBuilder(manifest);

function showStartupPresence() {
    updatePresence({
        largeImageKey: 'stremio-logo',
        details: 'https://stremio.com',
        state: 'All the video content you enjoy in one place',
    });
}

showStartupPresence();

addon.defineSubtitlesHandler(async args => {

    const id = args.id.split(':')[0];
    const info = await imdb(args);

    if (info == null) throw 'stremio-discord: no imdb data found for ' + id;

    updatePresence({
        state: `⭐ ${info.imdbRating}/10`,
        details: `📺 ${info.name} (${info.year})`,
        startTimestamp: Date.now(),
        endTimestamp: parseMovieDuration(info.runtime),
        largeImageKey: 'stremio-logo',
    });

    return Promise.resolve({subtitles: []});
});

addon.defineMetaHandler(() => {
    showStartupPresence();
    return Promise.resolve({meta: {}});
});

module.exports = addon.getInterface();
